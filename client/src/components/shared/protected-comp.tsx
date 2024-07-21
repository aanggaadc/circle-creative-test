import { Navigate, Outlet } from "react-router-dom";

type PropsType = {
  isAllowed: boolean;
  redirectTo?: string;
  children: React.ReactNode;
};

export function ProtectedComp({
  isAllowed,
  redirectTo = "/login",
  children,
}: PropsType) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
}
