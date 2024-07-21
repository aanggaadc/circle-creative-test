import useApiMutate from "../useApiMutate";

type Params = {
  id: number;
  completed: boolean;
  title: string;
  user_ids?: number[];
};

export function useUpdateTodo({
  onSuccess,
  onError,
}: {
  onSuccess?: (response: Todo) => void;
  onError?: (error: string | null) => void;
} = {}) {
  const { mutate, loading, error } = useApiMutate<
    Omit<Params, "id">,
    GeneralResponse<Todo>
  >("", { method: "PUT" });

  const updateTodo = async (params: Params) => {
    const url = `/api/todos/${params.id}`;
    const payload = {
      title: params.title,
      completed: params.completed,
      user_ids: params.user_ids,
    };
    try {
      const response = await mutate(payload, url);
      onSuccess && onSuccess(response?.data as Todo);
    } catch (err) {
      onError && onError(error);
    }
  };

  return { mutate: updateTodo, loading, error };
}
