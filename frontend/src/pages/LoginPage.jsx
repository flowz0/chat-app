import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { FaMessage, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { TbLockFilled, TbMailFilled } from "react-icons/tb";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 sm:p-10">
      <div className="w-80">
        <div className="flex justify-center">
          <div className="flex items-center gap-x-2">
            <div className="size-9 rounded-lg bg-sky-600/20 flex items-center justify-center">
              <FaMessage className="w-5 h-5 text-zinc-200" />
            </div>
            <h1 className="text-lg font-bold">Chaty</h1>
          </div>
        </div>
        <h1 className="mt-6 text-3xl font-bold text-center sm:text-4xl">Sign in</h1>
        <p className="mt-4 text-center sm:text-lg">Log in to start chatting.</p>
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-y-4">
          <div className="flex flex-col w-full">

            <label htmlFor="email" className="text-zinc-400 flex items-center gap-x-1.5"><TbMailFilled /> Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email@example.com"
              className="mt-2 py-2 px-2.5 rounded bg-zinc-800 text-zinc-300  placeholder:text-zinc-500 focus:outline-2 focus:outline-zinc-500 active:outline-zinc-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password" className="text-zinc-400 flex items-center gap-x-1.5"><TbLockFilled /> Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                className="w-full mt-2 py-2 px-2.5 pr-10 rounded bg-zinc-800 text-zinc-300  placeholder:text-zinc-500 focus:outline-2 focus:outline-zinc-500 active:outline-zinc-500"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                autoComplete="password"
              />
              {formData.password && (
                <button
                  type="button"
                  className="absolute inset-y-0 right-2.5 flex items-center pt-1"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEyeSlash className="size-6 text-zinc-500" />
                  ) : (
                    <FaRegEye className="size-6 text-zinc-500" />
                  )}
                </button>
              )}
            </div>
          </div>
          <button className="mt-2 py-2 rounded-lg font-semibold bg-sky-600 text-zinc-200 hover:cursor-pointer hover:bg-sky-700" disabled={isLoggingIn}>
            {isLoggingIn ? (
              <div role="status" className=" flex items-center justify-center">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-zinc-200 fill-sky-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <p className="mt-12 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-semibold underline text-sky-500 hover:text-sky-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage