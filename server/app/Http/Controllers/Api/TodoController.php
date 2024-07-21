<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Todo;
use App\Http\Resources\GeneralResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\TodoResource;

class TodoController extends Controller
{
    public function index()
    {
        $userId = auth()->id();
        $todos = Todo::with('users')
            ->whereHas('users', function ($query) use ($userId) {
                $query->where('users.id', $userId);
            })
            ->latest()
            ->paginate(5);

        return new GeneralResource(true, 'List Todo', TodoResource::collection($todos));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title'     => 'required',
            'user_ids'  => 'required|array',
            'user_ids.*' => 'exists:users,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            $userId = $request->user()->id;
            $userIds = array_unique(array_merge([$userId], $request->user_ids));
            $todo = Todo::create([
                'title'     => $request->title,
                'completed' => false,
            ]);
            $todo->users()->attach($userIds);
            $todo->load('users');
        } catch (\Exception $e) {
            Log::error('Error attaching users: ' . $e->getMessage());
            return response()->json(['error' => 'Error attaching users'], 500);
        }
        return new GeneralResource(true, 'Data Todo Berhasil Ditambahkan!', $todo);
    }


    public function show($id)
    {
        $userId = auth()->id();
        $todo = Todo::where('id', $id)
            ->whereHas('users', function ($query) use ($userId) {
                $query->where('users.id', $userId);
            })
            ->first();

        if (!$todo) {
            return new GeneralResource(false, 'Data Todo Tidak Ditemukan!', null);
        }

        return new GeneralResource(true, 'Detail Data Todo!', $todo);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title'      => 'required',
            'completed'  => 'required|boolean',
            'user_ids'   => 'array',
            'user_ids.*' => 'exists:users,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $userId = auth()->id();
        $todo = Todo::where('id', $id)
            ->whereHas('users', function ($query) use ($userId) {
                $query->where('users.id', $userId);
            })
            ->first();

        if (!$todo) {
            return new GeneralResource(false, 'Data Todo Tidak Ditemukan atau Anda Tidak Memiliki Akses!', null);
        }

        $todo->update([
            'title'     => $request->title,
            'completed' => $request->completed,
        ]);

        if ($request->has('user_ids')) {
            $userIds = array_unique(array_merge([$userId], $request->user_ids));
            $todo->users()->sync($userIds);
        }

        $todo->load('users');
        return new GeneralResource(true, 'Data Todo Berhasil Diupdate!', new TodoResource($todo));
    }


    public function destroy($id)
    {
        $userId = auth()->id();
        $todo = Todo::where('id', $id)
            ->whereHas('users', function ($query) use ($userId) {
                $query->where('users.id', $userId);
            })
            ->first();

        if (!$todo) {
            return new GeneralResource(false, 'Data Todo Tidak Ditemukan!', null);
        }
        $todo->users()->detach();
        $todo->delete();
        return new GeneralResource(true, 'Data Todo Berhasil Dihapus!', $todo);
    }
}
