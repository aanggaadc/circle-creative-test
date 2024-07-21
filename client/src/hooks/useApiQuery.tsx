import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetcher from "../lib/fetcher";
import getErrorMessage from "../lib/error";

type UseQueryHookReturn<T> = {
  data: T | undefined;
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

export default function useApiQuery<TData, TBody = unknown>(
  url: string,
  body?: TBody,
  options?: RequestInit,
  fetchWhen: boolean = true
): UseQueryHookReturn<TData> {
  const navigate = useNavigate();
  const [data, setData] = useState<TData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetcher<TData, TBody>(url, body, options);
      setData(response);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setError(errorMessage);
      if (errorMessage === "Unauthorized") navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!fetchWhen) return;
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchWhen]);

  return { data, loading, error, refetch: fetchData };
}
