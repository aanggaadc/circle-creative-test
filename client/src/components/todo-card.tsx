import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cn } from "../lib/utils";
import { useUpdateTodo } from "../hooks";
import { updateTodo } from "../redux/todoSlice";
import { PencilIcon, TrashIcon } from "./icons";

export default function TodoCard({
  todo,
  onClickDelete,
  onClickEdit,
}: {
  todo: Todo;
  onClickDelete: () => void;
  onClickEdit: () => void;
}) {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState(todo.title);
  const [editTitle, setEditTitle] = useState(false);

  const { mutate } = useUpdateTodo({
    onSuccess: (updatedTodo) => {
      setEditTitle(false);
      dispatch(updateTodo(updatedTodo));
    },
  });

  const handleChecked = () => {
    mutate({
      id: todo.id,
      title: todo.title,
      completed: !todo.completed,
    });
  };

  const handleOnBlur = () => {
    if (title === todo.title || !title.trim()) {
      setTitle(todo.title);
      setEditTitle(false);
      return;
    }

    mutate({
      id: todo.id,
      title,
      completed: true,
    });
  };

  useEffect(() => {
    if (editTitle) {
      inputRef.current?.focus();
    }
  }, [editTitle]);

  return (
    <div className="w-full rounded-lg py-5 px-4 shadow-[0px_6px_10px_0px_#0000001A] bg-white flex items-center justify-between font-poppins">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChecked}
          className="w-3 h-3 rounded-none mr-3 md:h-5 md:w-5 checked:bg-primary checked:border-primary"
        />

        {editTitle ? (
          <input
            ref={inputRef}
            className="font-semibold text-sm md:text-base mr-2 w-[40%] md:w-[50%] border-b focus:border-none focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleOnBlur}
          />
        ) : (
          <p
            onClick={() => setEditTitle(true)}
            className={cn(
              "font-semibold text-sm md:text-base mr-2",
              todo.completed && "line-through text-[#888]"
            )}
          >
            {todo.title}
          </p>
        )}

        <button
          onClick={() => {
            setEditTitle(false);
            onClickEdit();
          }}
        >
          <PencilIcon className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      </div>

      <button onClick={onClickDelete}>
        <TrashIcon className="md:w-4 md:h-4" />
      </button>
    </div>
  );
}
