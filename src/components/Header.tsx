import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="tw-bg-white tw-shadow-sm tw-border-b tw-border-gray-200">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-flex tw-justify-between tw-items-center tw-h-16">
          <div className="tw-flex tw-items-center">
            <a href="/" className="tw-flex tw-items-center tw-space-x-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="tw-text-purple-600">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/>
              </svg>
              <span className="tw-text-xl tw-font-bold tw-text-gray-900">
                dish<span className="tw-text-purple-600">gen</span>
              </span>
            </a>
          </div>
          
          <nav className="tw-hidden md:tw-flex tw-space-x-8">
            <a href="#" className="tw-text-gray-700 hover:tw-text-purple-600 tw-font-medium">Recipes</a>
            <a href="#" className="tw-text-gray-700 hover:tw-text-purple-600 tw-font-medium">Meal Plan</a>
            <a href="#" className="tw-text-gray-700 hover:tw-text-purple-600 tw-font-medium">Explore</a>
            <a href="#" className="tw-text-gray-700 hover:tw-text-purple-600 tw-font-medium">Premium</a>
            <a href="#" className="tw-text-gray-700 hover:tw-text-purple-600 tw-font-medium">Business</a>
          </nav>

          <div className="tw-flex tw-items-center tw-space-x-4">
            <Button variant="ghost" className="tw-text-gray-700 hover:tw-text-purple-600">
              Sign In
            </Button>
            <Button className="tw-bg-purple-600 hover:tw-bg-purple-700 tw-text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;