import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useGetTodos } from "../hooks";

import Header from "../components/header";
import TodoCard from "../components/todo-card";
import Filter from "../components/filter";
import DeleteModal from "../components/delete-modal";
import TodoModal from "../components/todos-modal";
import { Spinner } from "../components/shared";
import { PlusIcon } from "../components/icons";

export default function Home() {
  const { loading: fetchingTodos } = useGetTodos();
  const todos = useSelector((state: RootState) => state.todo.todos);
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleCreateTodo = () => {
    setOpenModal(true);
    setSelectedTodo(null);
  };

  const handleClickedDeleteTodo = (todo: Todo) => {
    setOpenDeleteModal(true);
    setSelectedTodo(todo);
  };

  const handleClickedEditTodo = (todo: Todo) => {
    setOpenModal(true);
    setSelectedTodo(todo);
  };

  return (
    <>
      <Header title={"Todo List"} />

      <main className="p-8 font-poppins max-w-screen-lg mx-auto lg:py-8 lg:px-0">
        {fetchingTodos ? (
          <div className="min-h-[calc(100vh_-_64px)] lg:min-h-[calc(100vh_-_105px)] flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="flex flex-col">
              <div className="flex justify-end gap-2">
                <Filter />
                <button
                  onClick={handleCreateTodo}
                  className="w-[100px] md:w-[120px] font-poppins text-xs font-semibold text-white rounded-3xl p-3 bg-primary flex items-center justify-center gap-1 md:text-sm md:px-6"
                >
                  <PlusIcon />
                  Tambah
                </button>
              </div>
            </div>

            {!todos?.length ? (
              <EmptyToDo />
            ) : (
              <div className="flex flex-col gap-2 mt-7">
                {todos.map((todo) => (
                  <TodoCard
                    key={todo.id}
                    todo={todo}
                    onClickDelete={() => handleClickedDeleteTodo(todo)}
                    onClickEdit={() => handleClickedEditTodo(todo)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <TodoModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        data={selectedTodo}
      />
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        data={selectedTodo}
      />
    </>
  );
}

const EmptyToDo = () => {
  return (
    <div className="mt-[90px]">
      <img
        src="/images/todo-empty-state.png"
        alt="empty"
        className="block mx-auto w-full md:w-1/2 cursor-pointer"
      />
    </div>
  );
};
