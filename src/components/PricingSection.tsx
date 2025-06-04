import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="tw-bg-black tw-pt-16 tw-pb-8 tw-px-2 tw-mt-0" id="pricing">
      <div className="tw-max-w-6xl tw-mx-auto">
        <h2 className="tw-text-4xl md:tw-text-5xl tw-font-extrabold tw-text-white tw-text-center tw-mb-4">
          Choose Your Plan
        </h2>
        <p className="tw-text-lg tw-text-gray-300 tw-text-center tw-mb-8 tw-max-w-4xl tw-mx-auto">
          DishGen Basic accounts are free. Upgrade to Premium or Pro to unlock nearly-unlimited usage, 
          a personalized AI model, and much more. Start your free trial and experience the future of cooking.
        </p>

        <div className="tw-flex tw-justify-center tw-items-center tw-mb-0">
          <span className="tw-text-base tw-font-medium tw-text-gray-400 tw-mr-3">Monthly</span>
          <button 
            type="button" 
            aria-pressed={isAnnual}
            onClick={() => setIsAnnual(!isAnnual)}
            className="tw-relative tw-w-14 tw-h-7 tw-bg-gray-700 tw-rounded-full tw-transition tw-outline-none tw-border-2 tw-border-solid tw-border-gray-600 tw-flex-shrink-0 tw-shadow-inner focus:tw-ring-2 focus:tw-ring-purple-400"
          >
            <span 
              className="tw-absolute tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-w-6 tw-h-6 tw-bg-amber-400 tw-rounded-full tw-shadow-md tw-transition-all" 
              style={{ 
                left: isAnnual ? "calc(100% - 1.54rem)" : "0.125rem", 
                transition: "left 0.2s" 
              }}
            />
          </button>
          <span className="tw-text-base tw-font-medium tw-text-white tw-ml-3">Annual</span>
        </div>
        <p className="tw-text-center tw-text-amber-300 tw-mb-4 tw-mt-2 tw-text-sm tw-font-bold">
          Save 25% with Annual Plans
        </p>

        <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-8 tw-justify-center">
          {/* Basic Plan */}
          <div className="tw-flex-1 tw-bg-white tw-bg-opacity-10 tw-rounded-3xl tw-p-8 tw-flex tw-flex-col tw-border tw-border-gray-700 tw-relative tw-min-h-[540px] tw-mx-4 md:tw-mx-0">
            <div className="tw-flex tw-items-center tw-mb-4 tw-mx-auto">
              <span className="tw-bg-gray-700 tw-text-white tw-px-4 tw-py-1 tw-rounded-full tw-text-md tw-font-semibold tw-mr-2">
                Basic
              </span>
              <span className="tw-text-gray-400 tw-font-medium tw-text-sm">Free Forever</span>
            </div>
            <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-2 tw-text-left">Try the Basics</h3>
            <ul className="tw-text-gray-200 tw-space-y-2 tw-text-base tw-mb-8 tw-w-full tw-p-0">
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-lime-400" size={14} />
                <span className="tw-font-semibold">
                  Limited usage credits<br />
                  <span className="tw-text-xs tw-font-semibold">resets weekly</span>
                </span>
              </li>
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-lime-400" size={14} />
                <span>Save Your Recipes, Plans, and Favorites</span>
              </li>
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-lime-400" size={14} />
                <span>Basic AI chat with recipe & meal plan tools</span>
              </li>
            </ul>
            <div className="tw-flex-1"></div>
            <Button className="tw-w-full tw-font-semibold tw-py-3 tw-rounded-xl tw-shadow-md tw-text-lg tw-transition tw-duration-200 tw-border-none tw-bg-gray-900 hover:tw-bg-gray-800 tw-text-white tw-mt-8">
              Create Free Account
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="tw-flex-1 bg-premium-gradient tw-rounded-3xl tw-p-8 tw-flex tw-flex-col tw-border tw-border-purple-700 tw-relative tw-min-h-[540px] tw-mx-4 md:tw-mx-0">
            <div className="tw-flex tw-items-center tw-mb-4 tw-mt-0 tw-mx-auto">
              <span className="tw-bg-gradient-to-r tw-from-purple-700 tw-to-fuchsia-700 tw-text-white tw-px-4 tw-py-1 tw-rounded-full tw-text-md tw-font-semibold tw-mr-2">
                Premium
              </span>
              <span className="tw-text-purple-200 tw-font-medium tw-text-sm">7 Days Free</span>
            </div>
            <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-2 tw-text-left">DishGen Premium</h3>
            <ul className="tw-text-gray-200 tw-space-y-2 tw-text-base tw-mb-8 tw-w-full tw-p-0">
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-amber-400" size={14} />
                <span className="tw-font-semibold">
                  25x more usage credits<br />
                  <span className="tw-text-xs tw-font-semibold">nearly unlimited • resets daily</span>
                </span>
              </li>
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-amber-400" size={14} />
                <span>Personalized AI model</span>
              </li>
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-amber-400" size={14} />
                <span>Longer chat context</span>
              </li>
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-amber-400" size={14} />
                <span>
                  Advanced meal planner<br />
                  <span className="tw-text-xs tw-font-semibold">generate recipes within plans</span>
                </span>
              </li>
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-amber-400" size={14} />
                <span>Edit existing recipes with AI</span>
              </li>
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-amber-400" size={14} />
                <span>Ad-free experience</span>
              </li>
            </ul>
            <div className="tw-flex-1"></div>
            <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-mt-8">
              <div className="tw-text-3xl tw-font-extrabold tw-text-white tw-mb-2">
                ${isAnnual ? "72" : "96"}<span className="tw-text-base tw-font-normal tw-ml-1">/{isAnnual ? "year" : "year"}</span>
              </div>
              <Button className="tw-w-full tw-font-semibold tw-py-3 tw-rounded-xl tw-shadow-md tw-text-lg tw-transition tw-duration-200 tw-border-none tw-bg-gradient-to-r tw-from-purple-700 tw-to-fuchsia-700 hover:tw-from-purple-800 hover:tw-to-fuchsia-800 tw-text-white tw-mt-2 tw-cursor-pointer">
                Register to Start
              </Button>
              <a className="tw-text-xs tw-font-semibold tw-text-purple-200 tw-bg-white/10 hover:tw-bg-white/20 tw-px-3 tw-py-1 tw-rounded-full tw-mt-2 tw-inline-block tw-transition" href="#">
                Learn More
              </a>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="tw-flex-1 bg-pro-gradient tw-rounded-3xl tw-p-8 tw-flex tw-flex-col tw-border tw-border-gray-700 tw-relative tw-min-h-[540px] tw-mx-4 md:tw-mx-0">
            <div className="tw-flex tw-items-center tw-mb-4 tw-mx-auto">
              <span className="tw-bg-emerald-700 tw-text-white tw-px-4 tw-py-1 tw-rounded-full tw-text-md tw-font-semibold tw-mr-2">
                Pro
              </span>
              <span className="tw-text-emerald-200 tw-font-medium tw-text-sm">7 Days Free</span>
            </div>
            <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-2 tw-text-left">Business & Power Users</h3>
            <ul className="tw-text-gray-200 tw-space-y-2 tw-text-base tw-mb-8 tw-w-full tw-p-0">
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-emerald-400" size={14} />
                <span>
                  <strong>Commercial Rights</strong><br />
                  <span className="tw-text-xs tw-font-semibold">redistribute recipes & plans</span>
                </span>
              </li>
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-emerald-400" size={14} />
                <span>Even Higher Usage Limits</span>
              </li>
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-emerald-400" size={14} />
                <span>Generate AI Images of Recipes</span>
              </li>
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-emerald-400" size={14} />
                <span>Privacy Mode</span>
              </li>
              <li className="tw-flex tw-items-start">
                <Check className="tw-mt-0 tw-mr-2 tw-text-emerald-400" size={14} />
                <span>Everything in Premium</span>
              </li>
            </ul>
            <div className="tw-flex-1"></div>
            <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-mt-8">
              <div className="tw-text-3xl tw-font-extrabold tw-text-white tw-mb-2">
                ${isAnnual ? "159" : "212"}<span className="tw-text-base tw-font-normal tw-ml-1">/{isAnnual ? "year" : "year"}</span>
              </div>
              <Button className="tw-w-full tw-font-semibold tw-py-3 tw-rounded-xl tw-shadow-md tw-text-lg tw-transition tw-duration-200 tw-border-none tw-bg-gradient-to-r tw-from-emerald-700 tw-to-emerald-800 hover:tw-from-emerald-800 hover:tw-to-emerald-700 tw-text-white tw-mt-2 tw-cursor-pointer">
                Register to Start
              </Button>
              <a className="tw-text-xs tw-font-semibold tw-text-emerald-200 tw-bg-white/10 hover:tw-bg-white/20 tw-px-3 tw-py-1 tw-rounded-full tw-mt-2 tw-inline-block tw-transition" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="tw-text-center tw-text-gray-400 tw-mt-6 tw-text-sm">
          cancel anytime – no obligation, no hidden fees
        </div>
        <p className="tw-text-center tw-text-white tw-mt-6">
          <strong>
            Add a DishGen Recipe Generator to your website with our easy-install widget{" "}
            <a className="tw-text-amber-300" href="#">Learn More »</a>
          </strong>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;