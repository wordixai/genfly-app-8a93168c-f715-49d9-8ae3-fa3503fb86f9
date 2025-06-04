import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                dish<span className="text-purple-600">gen</span>
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Recipes</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Meal Plan</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Explore</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Premium</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Business</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;