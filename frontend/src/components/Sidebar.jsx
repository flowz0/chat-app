import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore"
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./Skeletons/SidebarSkeleton";

import { FaUsers } from "react-icons/fa6";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const {onlineUsers} = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading) return <SidebarSkeleton />

  return (
    <aside className="w-20 lg:w-72 bg-zinc-800 border-r border-zinc-700 flex flex-col transition-all duration-200">
      <div className="border-b border-zinc-700 w-full p-4">
        <div className="flex justify-center gap-2">
          <FaUsers className="size-6" />
          <span className="font-medium hidden lg:block">Friends</span>
        </div>
        {/* TODO: Online filter toggle */}
      </div>

      <div className="overflow-y-auto w-full">
        {users.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3 hover:bg-zinc-700 transition-colors cursor-pointer
              ${selectedUser?._id === user._id ? "bg-zinc-600" : ""}
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/profilePicture.png"}
                alt={user.name}
                className="size-8 lg:size-12 object-cover rounded-full"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900" />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar