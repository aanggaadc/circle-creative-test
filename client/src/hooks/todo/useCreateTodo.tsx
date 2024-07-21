import useApiMutate from "../useApiMutate";

type Params = {
  title: string;
  user_ids: number[];
};

export function useCreateTodo({
  onSuccess,
  onError,
}: {
  onSuccess?: (response: Todo) => void;
  onError?: (error: string | null) => void;
} = {}) {
  const { mutate, loading, error } = useApiMutate<
    Params,
    GeneralResponse<Todo>
  >("/api/todos", {
    method: "POST",
  });

  const createTodo = async (params: Params) => {
    try {
      const response = await mutate(params);
      onSuccess && onSuccess(response?.data as Todo);
    } catch (err) {
      onError && onError(error);
    }
  };

  return { mutate: createTodo, loading, error };
}
