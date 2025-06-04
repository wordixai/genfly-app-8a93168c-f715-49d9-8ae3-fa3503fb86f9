import { MessageCircle } from "lucide-react";

const FeedbackButton = () => {
  return (
    <a 
      className="tw-hidden sm:tw-flex tw-items-center tw-justify-center tw-fixed tw-bottom-4 tw-right-4 tw-z-50 tw-bg-fuchsia-700 hover:tw-bg-fuchsia-800 tw-text-white tw-rounded-full tw-shadow-lg tw-w-14 tw-h-14 tw-text-3xl tw-transition tw-border-4 tw-border-fuchsia-200 focus:tw-outline-none" 
      href="#"
      aria-label="Send feedback"
      style={{ boxShadow: "rgba(120, 0, 180, 0.18) 0px 4px 24px 0px" }}
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default FeedbackButton;