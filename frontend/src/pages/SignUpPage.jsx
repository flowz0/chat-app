import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sucess = validateForm();

    if (sucess === true) signup(formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 sm:p-10">
      <div className="w-80">
        <h1 className="text-3xl font-bold text-center sm:text-4xl">Sign up</h1>
        <p className="mt-4 text-center sm:text-lg">Create an account to get started.</p>
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-y-2">
          <div className="flex flex-col w-full">
            <label htmlFor="fullName" className="text-zinc-400">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="John Doe"
              className="mt-1.5 py-2 px-2.5 rounded bg-zinc-800 text-zinc-300  placeholder:text-zinc-500 focus:outline-2 focus:outline-zinc-500 active:outline-zinc-500"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-zinc-400">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email@example.com"
              className="mt-1.5 py-2 px-2.5 rounded bg-zinc-800 text-zinc-300  placeholder:text-zinc-500 focus:outline-2 focus:outline-zinc-500 active:outline-zinc-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password" className="text-zinc-400">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                className="w-full mt-1.5 py-2 px-2.5 pr-10 rounded bg-zinc-800 text-zinc-300  placeholder:text-zinc-500 focus:outline-2 focus:outline-zinc-500 active:outline-zinc-500"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
          <button className="mt-2 py-2 rounded-lg font-semibold bg-sky-600 text-zinc-200 hover:cursor-pointer hover:bg-sky-700" disabled={isSigningUp}>
            {isSigningUp ? (
              <div role="status" className=" flex items-center justify-center">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-zinc-200 fill-sky-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold underline text-sky-500 hover:text-sky-600">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage