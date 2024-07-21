import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks";
import { Spinner, ProtectedComp } from "../components/shared";

const Home = lazy(() => import("./home"));
const Login = lazy(() => import("./login"));
const Register = lazy(() => import("./register"));

export default function Routing() {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedComp isAllowed={isLoggedIn}>
            <Home />
          </ProtectedComp>
        }
      />
      <Route
        path="/login"
        element={
          <ProtectedComp isAllowed={!isLoggedIn} redirectTo="/">
            <Login />
          </ProtectedComp>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedComp isAllowed={!isLoggedIn} redirectTo="/">
            <Register />
          </ProtectedComp>
        }
      />
    </Routes>
  );
}
