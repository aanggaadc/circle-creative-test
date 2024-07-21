import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTodos } from "../../redux/todoSlice";
import useApiQuery from "../useApiQuery";

export const useGetTodos = () => {
  const { data, loading, error, refetch } =
    useApiQuery<GeneralResponse<Todo[]>>(`/api/todos`);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(loadTodos(data.data));
    }
  }, [data, dispatch]);

  return { loading, error, refetch };
};
