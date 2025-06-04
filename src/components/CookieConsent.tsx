import { useState } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="tw-fixed tw-bottom-0 tw-w-full tw-bg-black tw-text-neutral-200 tw-py-3 tw-px-4 tw-border-t tw-border-neutral-300 tw-z-50 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-gap-4">
      <span className="tw-text-sm">
        We use cookies to improve your experience. By clicking "Accept", you consent to the use of cookies.
      </span>
      <div className="tw-flex tw-gap-2 tw-mt-2 md:tw-mt-0">
        <Button 
          onClick={() => setIsVisible(false)}
          className="tw-px-4 tw-py-2 tw-rounded tw-border tw-border-neutral-400 tw-bg-white tw-text-neutral-800 hover:tw-bg-neutral-100 tw-transition tw-cursor-pointer tw-text-xs"
        >
          Deny
        </Button>
        <Button 
          onClick={() => setIsVisible(false)}
          className="tw-px-4 tw-py-2 tw-rounded tw-bg-fuchsia-700 tw-text-fuchsia-100 hover:tw-bg-fuchsia-800 tw-border tw-border-fuchsia-600 tw-transition tw-cursor-pointer tw-text-xs"
        >
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;