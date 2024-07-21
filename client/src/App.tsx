import { Suspense } from "react";
import { useAuth, useGetUsers } from "./hooks";
import { Toaster } from "react-hot-toast";
import Routing from "./routes";
import useCsrfToken from "./hooks/useCsrfToken";
import { Spinner } from "./components/shared";

function App() {
  const { isLoggedIn } = useAuth();
  useCsrfToken();
  useGetUsers(isLoggedIn);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routing />
      </Suspense>
      <Toaster />
    </>
  );
}

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default App;
