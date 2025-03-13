import { IoIosClose } from "react-icons/io";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

const ChatHeader = () => {
  const {selectedUser, setSelectedUser} = useChatStore();
  const {onlineUsers} = useAuthStore();

  return (
    <div className="py-3 px-4 bg-zinc-800 border-b border-zinc-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 relative">
              <img className="rounded-full" src={selectedUser.profilePic || "/profilePicture.png"} alt={selectedUser.fullName} />
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-medium">{selectedUser.fullName}</h3>
            <p className="text-sm text-zinc-200/70">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button className="bg-zinc-700 text-zinc-400 rounded-full hover:bg-zinc-700/70" onClick={() => setSelectedUser(null)}>
          <IoIosClose className="text-4xl cursor-pointer" />
        </button>
      </div>
    </div>
  )
}

export default ChatHeader