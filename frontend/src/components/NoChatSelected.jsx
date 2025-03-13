import { FaMessage } from "react-icons/fa6";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-zinc-800">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <div className="animate-bounce size-12 rounded-lg bg-sky-600/20 flex items-center justify-center">
            <FaMessage className="w-6 h-6 text-zinc-200" />
          </div>

          {/* Welcome Text */}
          <h1 className="text-3xl font-bold sm:text-4xl">Welcome to Chaty!</h1>
          <p>Select a conversation from the sidebar to start chatting.</p>
        </div>
      </div>
    </div>
  )
}

export default NoChatSelected