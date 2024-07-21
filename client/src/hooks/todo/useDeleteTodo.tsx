import useApiMutate from "../useApiMutate";

export function useDeleteTodo({
  onSuccess,
  onError,
}: {
  onSuccess?: (response: Todo) => void;
  onError?: (error: string | null) => void;
} = {}) {
  const { mutate, loading, error } = useApiMutate<"", GeneralResponse<Todo>>(
    "",
    {
      method: "DELETE",
    }
  );

  const deleteTodo = async (params: { id: number }) => {
    const url = `/api/todos/${params.id}`;
    try {
      const response = await mutate("", url);
      onSuccess && onSuccess(response?.data as Todo);
    } catch (err) {
      onError && onError(error);
    }
  };

  return { mutate: deleteTodo, loading, error };
}
