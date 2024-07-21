import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("auth_token");
    setIsLoggedIn(!!token);
    setLoading(false);
  }, []);

  return { isLoggedIn, setIsLoggedIn, loading };
}
