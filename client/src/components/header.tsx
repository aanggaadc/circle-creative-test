import Cookies from "js-cookie";

export default function Header({ title }: { title: string }) {
  const handleLogut = () => {
    Cookies.remove("auth_token");
    window.location.href = "/login";
  };
  return (
    <header className="bg-primary w-full">
      <div className="max-w-screen-lg mx-auto h-[64px] px-5 lg:p-0 lg:h-[105px] text-white font-poppins font-bold text-xl flex items-center justify-between gap-3 md:text-2xl">
        <h1 className="uppercase text-[18px] md:text-[24px]">{title}</h1>

        <button
          onClick={handleLogut}
          className="bg-white rounded-md text-primary text-base py-2 px-3"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
