import { useState } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-black text-neutral-200 py-3 px-4 border-t border-neutral-300 z-50 flex flex-col md:flex-row items-center justify-center gap-4">
      <span className="text-sm">
        We use cookies to improve your experience. By clicking "Accept", you consent to the use of cookies.
      </span>
      <div className="flex gap-2 mt-2 md:mt-0">
        <Button 
          onClick={() => setIsVisible(false)}
          className="px-4 py-2 rounded border border-neutral-400 bg-white text-neutral-800 hover:bg-neutral-100 transition cursor-pointer text-xs"
        >
          Deny
        </Button>
        <Button 
          onClick={() => setIsVisible(false)}
          className="px-4 py-2 rounded bg-fuchsia-700 text-fuchsia-100 hover:bg-fuchsia-800 border border-fuchsia-600 transition cursor-pointer text-xs"
        >
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;