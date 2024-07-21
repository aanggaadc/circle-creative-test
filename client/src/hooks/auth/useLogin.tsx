import useApiMutate from "../useApiMutate";
import Cookies from "js-cookie";

type Params = {
  email: string;
  password: string;
};

type Data = {
  token: string;
};

export function useLogin({
  onSuccess,
  onError,
}: {
  onSuccess?: (response: GeneralResponse<Data>) => void;
  onError?: (error: string | null) => void;
} = {}) {
  const { mutate, loading, error } = useApiMutate<
    Params,
    GeneralResponse<Data>
  >("/api/login", {
    method: "POST",
  });

  const login = async (params: Params) => {
    try {
      const response = await mutate(params);

      if (response) {
        const token = response.data.token;
        Cookies.set("auth_token", token, { expires: 1 });
        onSuccess && onSuccess(response as GeneralResponse<Data>);
      }
    } catch (err) {
      onError && onError(error);
    }
  };

  return { mutate: login, loading, error };
}