import { Link } from "react-router-dom";
import { useRegister } from "../hooks";
import { InputField } from "../components/shared";

export default function Login() {
  const { mutate, loading } = useRegister({
    onSuccess: () => {
      window.location.href = "/";
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const password_confirmation = formData.get(
      "password_confirmation"
    ) as string;

    mutate({ name, email, password, password_confirmation });
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 font-poppins">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src="/images/circle.png" className="w-[150px] mx-auto" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <InputField
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            label="Nama"
            id="name"
            name="name"
            type="text"
            required
          />

          <InputField
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            label="Email"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />

          <InputField
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />

          <InputField
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            label="Konfirmasi Password"
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            autoComplete="current-password"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 max-w-[unset] text-xs font-medium lg:text-sm bg-primary text-white rounded-md"
          >
            Submit
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          Login <Link to="/login">here</Link>
        </p>
      </div>
    </div>
  );
}
