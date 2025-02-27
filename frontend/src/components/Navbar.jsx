import { useAuthStore } from "../store/useAuthStore"
import { Link } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMessage, FaUser,  } from "react-icons/fa6";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <nav className="bg-zinc-900/80 border-b border-zinc-700 fixed w-full top-0 z-40 backdrop-blur-lg">

      <div className="mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-x-2.5 hover:opacity-80 transition-all">
            <div className="size-9 rounded-lg bg-sky-600/20 flex items-center justify-center">
              <FaMessage className="w-5 h-5 text-zinc-200" />
            </div>
            <h1 className="text-lg font-bold">Chaty</h1>
          </Link>
        </div>

        <div className="flex gap-4">
          <Link to="/settings" className="transition-all flex items-center justify-center gap-1.5 hover:opacity-80">
            <IoSettingsSharp className="size-5" />
            <span className="hidden sm:block">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link to="/profile" className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
                <FaUser className="size-5" />
                <span className="hidden sm:block">Profile</span>
              </Link>

              <button className="flex gap-1.5 items-center cursor-pointer hover:opacity-80" onClick={logout}>
                <RiLogoutBoxRLine className="size-5" />
                <span className="hidden sm:block">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>

    </nav>
  )
}

export default Navbar