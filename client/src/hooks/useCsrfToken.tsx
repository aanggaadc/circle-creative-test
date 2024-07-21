import { useEffect } from "react";
import fetcher from "../lib/fetcher";

const useCsrfToken = () => {
  useEffect(() => {
    const initiateConnection = async () => {
      try {
        await fetcher("/sanctum/csrf-cookie");
      } catch (error) {
        console.error("Failed to initialize CSRF token:", error);
      }
    };

    initiateConnection();
  }, []);
};

export default useCsrfToken;
