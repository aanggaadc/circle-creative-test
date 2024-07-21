import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetcher from "../lib/fetcher";
import getErrorMessage from "../lib/error";

type UseMutateReturn<T, R> = {
  mutate: (body?: T, urlOverride?: string) => Promise<R | undefined>;
  loading: boolean;
  error: string | null;
};

export default function useApiMutate<T, R>(
  url: string,
  options?: RequestInit
): UseMutateReturn<T, R> {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (
    body?: T,
    urlOverride?: string
  ): Promise<R | undefined> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetcher<R, T>(urlOverride || url, body, options);
      return response;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setError(errorMessage);
      if (errorMessage === "Unauthorized") navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
}
