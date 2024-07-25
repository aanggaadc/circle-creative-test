import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetcher from "../lib/fetcher";
import getErrorMessage from "../lib/error";

interface IOptions extends RequestInit {
  enabled?: boolean;
}

type UseQueryHookReturn<T> = {
  data: T | undefined;
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

export default function useApiQuery<TData, TBody = unknown>(
  url: string,
  body?: TBody,
  options: IOptions = { enabled: true }
): UseQueryHookReturn<TData> {
  const navigate = useNavigate();
  const [data, setData] = useState<TData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (controller: AbortController) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetcher<TData, TBody>(url, body, {
        ...options,
        signal: controller.signal,
      });
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
    if (!options.enabled) return;

    const controller = new AbortController();
    fetchData(controller);

    return () => {
      controller.abort();
    };
  }, [options.enabled]);

  return {
    data,
    loading,
    error,
    refetch: () => fetchData(new AbortController()),
  };
}
