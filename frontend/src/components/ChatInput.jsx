import { useRef, useState } from "react"
import { useChatStore } from "../store/useChatStore";
import { IoIosClose } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { FaImage } from "react-icons/fa6";
import toast from "react-hot-toast";

const ChatInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      // Clear form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="bg-zinc-800 p-4 w-full">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg outline outline-zinc-700 shadow shadow-zinc-950"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-zinc-700 text-zinc-400 flex items-center justify-center hover:bg-zinc-700/70"
              type="button"
            >
              <IoIosClose className="size-4 cursor-pointer" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex">
        <div className="flex-1 flex">
          <input
            type="text"
            className="p-2.5 w-full rounded-md outline-1 outline-zinc-700 text-zinc-400 placeholder:text-zinc-600 focus:outline-zinc-500"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
        </div>
        <div className="flex items-center justify-center gap-x-2.5 ml-5">
          <button
            type="button"
            className={`p-2.5 cursor-pointer rounded-full text-zinc-400 hover:bg-zinc-700/70 ${imagePreview ? "bg-zinc-700" : ""}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <FaImage className="size-5" />
          </button>
          <button
            type="submit"
            className="p-2.5 cursor-pointer bg-zinc-700 text-zinc-400 rounded-full hover:bg-zinc-700/70 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-400"
            disabled={!text.trim() && !imagePreview}
          >
            <IoSend className="size-5" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatInput