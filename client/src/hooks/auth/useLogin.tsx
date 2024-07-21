import useApiMutate from "../useApiMutate";
import Cookies from "js-cookie";

type Params = {
  email: string;
  password: string;
};

export function useLogin({
  onSuccess,
  onError,
}: {
  onSuccess?: (response: AuthResponse) => void;
  onError?: (error: string | null) => void;
} = {}) {
  const { mutate, loading, error } = useApiMutate<Params, AuthResponse>(
    "/api/login",
    {
      method: "POST",
    }
  );

  const login = async (params: Params) => {
    try {
      const response = await mutate(params);

      if (response?.success) {
        const token = response?.data?.token ?? "";
        Cookies.set("auth_token", token, { expires: 1 });
        onSuccess && onSuccess(response as AuthResponse);
      }
    } catch (err) {
      onError && onError(error);
    }
  };

  return { mutate: login, loading, error };
}
