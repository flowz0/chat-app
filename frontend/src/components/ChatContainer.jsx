import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore"
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import MessageSkeleton from "./Skeletons/MessageSkeleton";

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } = useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id)
  }, [selectedUser._id, getMessages])

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <ChatInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto bg-zinc-800">
      <ChatHeader />

      <p>Messages...</p>

      <ChatInput />
    </div>
  );
}

export default ChatContainer;