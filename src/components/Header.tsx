import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                dish<span className="text-purple-600">gen</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="#" className="text-gray-700 hover:text-purple-600 font-medium text-sm">Recipe</Link>
            <Link to="#" className="text-gray-700 hover:text-purple-600 font-medium text-sm">Meal Plan</Link>
            <Link to="#" className="text-gray-700 hover:text-purple-600 font-medium text-sm">Explore</Link>
            <Link to="#" className="text-gray-700 hover:text-purple-600 font-medium text-sm">Premium</Link>
            <Link to="#" className="text-gray-700 hover:text-purple-600 font-medium text-sm">Business</Link>
          </nav>

          <div className="flex items-center">
            <Button variant="default" size="sm" className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md px-4 py-1">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;