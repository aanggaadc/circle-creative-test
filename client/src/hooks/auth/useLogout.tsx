import useApiMutate from "../useApiMutate";
import Cookies from "js-cookie";

export function useLogout({
  onSuccess,
  onError,
}: {
  onSuccess?: (response: AuthResponse) => void;
  onError?: (error: string | null) => void;
} = {}) {
  const { mutate, loading, error } = useApiMutate<null, AuthResponse>(
    "/api/logout",
    {
      method: "POST",
    }
  );

  const login = async () => {
    try {
      const response = await mutate();

      if (response?.success) {
        Cookies.remove("auth_token");
        onSuccess && onSuccess(response as AuthResponse);
      }
    } catch (err) {
      onError && onError(error);
    }
  };

  return { mutate: login, loading, error };
}
