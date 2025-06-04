import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="bg-black pt-16 pb-8 px-2 mt-0" id="pricing">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
          Choose Your Plan
        </h2>
        <p className="text-lg text-gray-300 text-center mb-8 max-w-4xl mx-auto">
          DishGen Basic accounts are free. Upgrade to Premium or Pro to unlock nearly-unlimited usage, 
          a personalized AI model, and much more. Start your free trial and experience the future of cooking.
        </p>

        <div className="flex justify-center items-center mb-0">
          <span className="text-base font-medium text-gray-400 mr-3">Monthly</span>
          <button 
            type="button" 
            aria-pressed={isAnnual}
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-gray-700 rounded-full transition outline-none border-2 border-solid border-gray-600 flex-shrink-0 shadow-inner focus:ring-2 focus:ring-purple-400"
          >
            <span 
              className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-amber-400 rounded-full shadow-md transition-all" 
              style={{ 
                left: isAnnual ? "calc(100% - 1.54rem)" : "0.125rem", 
                transition: "left 0.2s" 
              }}
            />
          </button>
          <span className="text-base font-medium text-white ml-3">Annual</span>
        </div>
        <p className="text-center text-amber-300 mb-4 mt-2 text-sm font-bold">
          Save 25% with Annual Plans
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Basic Plan */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-3xl p-8 flex flex-col border border-gray-700 relative min-h-[540px] mx-4 md:mx-0">
            <div className="flex items-center mb-4 mx-auto">
              <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-md font-semibold mr-2">
                Basic
              </span>
              <span className="text-gray-400 font-medium text-sm">Free Forever</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-left">Try the Basics</h3>
            <ul className="text-gray-200 space-y-2 text-base mb-8 w-full p-0">
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-lime-400" size={14} />
                <span className="font-semibold">
                  Limited usage credits<br />
                  <span className="text-xs font-semibold">resets weekly</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-lime-400" size={14} />
                <span>Save Your Recipes, Plans, and Favorites</span>
              </li>
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-lime-400" size={14} />
                <span>Basic AI chat with recipe & meal plan tools</span>
              </li>
            </ul>
            <div className="flex-1"></div>
            <Button className="w-full font-semibold py-3 rounded-xl shadow-md text-lg transition duration-200 border-none bg-gray-900 hover:bg-gray-800 text-white mt-8">
              Create Free Account
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="flex-1 bg-gradient-to-br from-purple-900 to-fuchsia-900 rounded-3xl p-8 flex flex-col border border-purple-700 relative min-h-[540px] mx-4 md:mx-0">
            <div className="flex items-center mb-4 mt-0 mx-auto">
              <span className="bg-gradient-to-r from-purple-700 to-fuchsia-700 text-white px-4 py-1 rounded-full text-md font-semibold mr-2">
                Premium
              </span>
              <span className="text-purple-200 font-medium text-sm">7 Days Free</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-left">DishGen Premium</h3>
            <ul className="text-gray-200 space-y-2 text-base mb-8 w-full p-0">
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-amber-400" size={14} />
                <span className="font-semibold">
                  25x more usage credits<br />
                  <span className="text-xs font-semibold">nearly unlimited • resets daily</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-amber-400" size={14} />
                <span>Personalized AI model</span>
              </li>
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-amber-400" size={14} />
                <span>Longer chat context</span>
              </li>
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-amber-400" size={14} />
                <span>
                  Advanced meal planner<br />
                  <span className="text-xs font-semibold">generate recipes within plans</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-amber-400" size={14} />
                <span>Edit existing recipes with AI</span>
              </li>
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-amber-400" size={14} />
                <span>Ad-free experience</span>
              </li>
            </ul>
            <div className="flex-1"></div>
            <div className="w-full flex flex-col items-center mt-8">
              <div className="text-3xl font-extrabold text-white mb-2">
                ${isAnnual ? "72" : "96"}<span className="text-base font-normal ml-1">/{isAnnual ? "year" : "year"}</span>
              </div>
              <Button className="w-full font-semibold py-3 rounded-xl shadow-md text-lg transition duration-200 border-none bg-gradient-to-r from-purple-700 to-fuchsia-700 hover:from-purple-800 hover:to-fuchsia-800 text-white mt-2 cursor-pointer">
                Register to Start
              </Button>
              <a className="text-xs font-semibold text-purple-200 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full mt-2 inline-block transition" href="#">
                Learn More
              </a>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex-1 bg-gradient-to-br to-emerald-900 from-emerald-800 rounded-3xl p-8 flex flex-col border border-gray-700 relative min-h-[540px] mx-4 md:mx-0">
            <div className="flex items-center mb-4 mx-auto">
              <span className="bg-emerald-700 text-white px-4 py-1 rounded-full text-md font-semibold mr-2">
                Pro
              </span>
              <span className="text-emerald-200 font-medium text-sm">7 Days Free</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-left">Business & Power Users</h3>
            <ul className="text-gray-200 space-y-2 text-base mb-8 w-full p-0">
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-emerald-400" size={14} />
                <span>
                  <strong>Commercial Rights</strong><br />
                  <span className="text-xs font-semibold">redistribute recipes & plans</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-emerald-400" size={14} />
                <span>Even Higher Usage Limits</span>
              </li>
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-emerald-400" size={14} />
                <span>Generate AI Images of Recipes</span>
              </li>
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-emerald-400" size={14} />
                <span>Privacy Mode</span>
              </li>
              <li className="flex items-start">
                <Check className="mt-0 mr-2 text-emerald-400" size={14} />
                <span>Everything in Premium</span>
              </li>
            </ul>
            <div className="flex-1"></div>
            <div className="w-full flex flex-col items-center mt-8">
              <div className="text-3xl font-extrabold text-white mb-2">
                ${isAnnual ? "159" : "212"}<span className="text-base font-normal ml-1">/{isAnnual ? "year" : "year"}</span>
              </div>
              <Button className="w-full font-semibold py-3 rounded-xl shadow-md text-lg transition duration-200 border-none bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-white mt-2 cursor-pointer">
                Register to Start
              </Button>
              <a className="text-xs font-semibold text-emerald-200 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full mt-2 inline-block transition" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-6 text-sm">
          cancel anytime – no obligation, no hidden fees
        </div>
        <p className="text-center text-white mt-6">
          <strong>
            Add a DishGen Recipe Generator to your website with our easy-install widget{" "}
            <a className="text-amber-300" href="#">Learn More »</a>
          </strong>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;