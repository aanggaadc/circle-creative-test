import getErrorMessage from "./error";
import { getCsrfToken } from "./utils";
import Cookies from "js-cookie";

const fetcher = async <TData, BData = unknown>(
  url: string,
  body?: BData,
  options?: RequestInit
): Promise<TData> => {
  const token = Cookies.get("auth_token");
  const csrfToken = getCsrfToken();
  const baseUrl = import.meta.env.VITE_API_URL as string;
  let fullUrl = new URL(url, baseUrl).toString();

  const headers = {
    "Content-Type": "application/json",
    "X-XSRF-TOKEN": csrfToken,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options?.headers || {}),
  };

  const requestOptions: RequestInit = {
    ...options,
    headers,
    method: options?.method || "GET",
    credentials: "include",
  };

  if (requestOptions.method !== "GET" && body) {
    requestOptions.body =
      body instanceof FormData ? body : JSON.stringify(body);
  }

  if (requestOptions.method === "GET" && body) {
    const searchParams = new URLSearchParams(body as Record<string, string>);
    fullUrl += `?${searchParams.toString()}`;
  }

  const response = await fetch(fullUrl, requestOptions);

  let responseData;
  try {
    if (response.headers.get("Content-Type")?.includes("application/json")) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }
  } catch (error) {
    throw new Error(`Failed to parse JSON response: ${getErrorMessage(error)}`);
  }

  if (!response.ok) {
    const errorMessage =
      responseData?.message ||
      `Fetch error: ${response.status} ${response.statusText}`;

    if (response.status === 401) {
      Cookies.remove("auth_token");
      throw new Error("Unauthorized");
    }

    throw new Error(errorMessage);
  }

  return responseData as TData;
};

export default fetcher;
