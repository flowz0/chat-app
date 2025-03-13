import { useChatStore } from "../store/useChatStore"

import ChatContainer from "../components/ChatContainer"
import NoChatSelected from "../components/NoChatSelected"
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-screen bg-zinc-900 text-zinc-100 flex flex-col items-center">
      <div className="pt-28 px-6 w-full max-w-6xl h-[calc(100vh-2rem)]">
        <div className="flex h-full rounded-lg overflow-hidden">
          <Sidebar />

          {!selectedUser ? <NoChatSelected /> : <ChatContainer />}

        </div>
      </div>
    </div>
  )
}

export default HomePage