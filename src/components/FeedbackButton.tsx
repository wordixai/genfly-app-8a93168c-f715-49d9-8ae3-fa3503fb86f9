import { MessageCircle } from "lucide-react";

const FeedbackButton = () => {
  return (
    <a 
      className="hidden sm:flex items-center justify-center fixed bottom-4 right-4 z-50 bg-fuchsia-700 hover:bg-fuchsia-800 text-white rounded-full shadow-lg w-14 h-14 text-3xl transition border-4 border-fuchsia-200 focus:outline-none" 
      href="#"
      aria-label="Send feedback"
      style={{ boxShadow: "rgba(120, 0, 180, 0.18) 0px 4px 24px 0px" }}
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default FeedbackButton;