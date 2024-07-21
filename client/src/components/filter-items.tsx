import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { loadTodos } from "../redux/todoSlice";
import { ChecklistIcon } from "./icons";

export type FilterType =
  | "newest"
  | "oldest"
  | "ascending"
  | "descending"
  | "active";

type FilterItemProps = {
  label: string;
  filterType: FilterType;
  sortFunction: (todos: Todo[]) => Todo[];
  icon: JSX.Element;
  activeFilter: FilterType;
  setActiveFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  closeDropdown: () => void;
};

export default function FilterItem({
  label,
  filterType,
  sortFunction,
  icon,

  activeFilter,
  setActiveFilter,
  closeDropdown,
}: FilterItemProps) {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);

  const handleClick = () => {
    dispatch(loadTodos(sortFunction(todos)));
    setActiveFilter(filterType);
    closeDropdown();
  };

  return (
    <button
      className="relative w-full px-4 py-3 text-sm text-gray-700 flex items-center gap-3"
      onClick={handleClick}
    >
      {icon}
      <p> {label}</p>
      {activeFilter === filterType && (
        <div className="absolute right-3">
          <ChecklistIcon />
        </div>
      )}
    </button>
  );
}
