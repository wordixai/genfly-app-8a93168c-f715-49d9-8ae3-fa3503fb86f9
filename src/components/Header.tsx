import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="tw-bg-white tw-shadow-sm tw-border-b tw-border-gray-200">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-flex tw-justify-between tw-items-center tw-h-16">
          <div className="tw-flex tw-items-center">
            <div className="tw-flex tw-items-center tw-space-x-2">
              <div className="tw-w-8 tw-h-8 tw-bg-gradient-to-r tw-from-purple-600 tw-to-fuchsia-600 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                <span className="tw-text-white tw-font-bold tw-text-sm">D</span>
              </div>
              <span className="tw-text-xl tw-font-bold tw-text-gray-900">
                dish<span className="tw-text-purple-600">gen</span>
              </span>
            </div>
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