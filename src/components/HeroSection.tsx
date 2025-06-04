import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, Calendar, ArrowUp, Lightbulb } from "lucide-react";

const HeroSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    setShowPlaceholder(e.target.value === "");
  };

  return (
    <section className="tw-text-center tw-text-white tw-items-center tw-py-14 tw-bg-gradient-to-br tw-to-purple-950 tw-from-fuchsia-900 dot-bg">
      <div className="tw-max-w-4xl tw-mx-auto tw-px-3 md:tw-px-8">
        <h1 className="tw-text-4xl sm:tw-text-5xl tw-mb-4 tw-font-bold">
          Create AI Recipes & Meal Plans
        </h1>
        <p className="tw-text-lg tw-mb-8">
          DishGen can generate all-new recipes and meal plans on demand. Simply enter your ingredients,
          dietary needs, a recipe idea, or meal plan request – DishGen will create something just for you...
        </p>

        <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-mx-auto">
          <div className="tw-w-full tw-bg-white tw-rounded-3xl tw-overflow-hidden tw-shadow-lg tw-border tw-border-solid tw-border-gray-900">
            <div className="tw-relative tw-px-4 tw-pt-3 tw-pb-2">
              <Textarea
                placeholder=""
                rows={2}
                value={inputValue}
                onChange={handleInputChange}
                className="tw-bg-transparent tw-w-full tw-resize-none tw-outline-none tw-border-none tw-text-lg tw-text-gray-800 tw-font-normal tw-h-16 tw-overflow-auto"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              />
              {showPlaceholder && (
                <div 
                  className="tw-absolute tw-text-start tw-top-3 tw-left-4 tw-text-lg tw-text-gray-400 tw-pointer-events-none"
                  style={{ animation: "0.5s ease 0s 1 normal forwards running slideDownIn", opacity: 1 }}
                >
                  help me create a healthy recipe for...
                </div>
              )}
            </div>

            <div className="tw-border-t tw-border-gray-200 tw-p-3 sm:tw-p-4" style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}>
              {/* Desktop Layout */}
              <div className="tw-hidden sm:tw-flex tw-items-center tw-justify-between">
                <div className="tw-flex tw-items-center tw-gap-2">
                  <span className="tw-text-gray-400 tw-text-sm">tools</span>
                  <div className="tw-flex tw-gap-2">
                    <div 
                      className="tw-flex tw-items-center tw-gap-1.5 tw-px-4 tw-py-2 tw-rounded-full tw-text-sm tw-transition-all tw-duration-200 tw-cursor-pointer hover:tw-opacity-95"
                      style={{
                        backgroundColor: "rgba(233, 213, 255, 0.8)",
                        color: "rgb(109, 40, 217)",
                        border: "2px solid rgb(147, 51, 234)",
                        boxShadow: "rgba(124, 58, 237, 0.2) 0px 1px 3px",
                        fontWeight: 500
                      }}
                    >
                      <ChefHat className="tw-text-purple-600 tw-text-xs" size={16} />
                      recipe creator
                    </div>
                    <div 
                      className="tw-flex tw-items-center tw-gap-1.5 tw-px-4 tw-py-2 tw-rounded-full tw-text-sm tw-transition-all tw-duration-200 tw-cursor-pointer hover:tw-opacity-95"
                      style={{
                        backgroundColor: "rgba(254, 226, 204, 0.8)",
                        color: "rgb(194, 65, 12)",
                        border: "2px solid rgb(249, 115, 22)",
                        boxShadow: "rgba(249, 115, 22, 0.2) 0px 1px 3px",
                        fontWeight: 500
                      }}
                    >
                      <Calendar className="tw-text-orange-600 tw-text-xs" size={16} />
                      meal planner
                    </div>
                  </div>
                </div>
                <div 
                  className="tw-bg-black tw-text-white tw-rounded-full tw-px-6 tw-py-2 tw-flex tw-items-center tw-gap-1 tw-transition-all tw-duration-200 tw-opacity-50"
                  style={{ pointerEvents: "none", boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 4px" }}
                >
                  submit <ArrowUp className="tw-text-xl" size={16} />
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="sm:tw-hidden tw-flex tw-flex-col tw-items-center tw-gap-3">
                <div 
                  className="tw-bg-black tw-text-white tw-rounded-full tw-px-6 tw-py-2 tw-flex tw-items-center tw-justify-center tw-gap-1 tw-transition-all tw-duration-200 tw-w-full tw-opacity-50"
                  style={{ pointerEvents: "none", boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 4px", minWidth: "120px" }}
                >
                  submit <ArrowUp className="tw-text-xl" size={16} />
                </div>
                <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-gap-2 tw-px-2">
                  <div 
                    className="tw-flex tw-items-center tw-justify-center tw-gap-1.5 tw-px-4 tw-py-2 tw-rounded-full tw-text-sm tw-transition-all tw-duration-200 tw-cursor-pointer hover:tw-opacity-95 tw-flex-1"
                    style={{
                      backgroundColor: "rgba(233, 213, 255, 0.8)",
                      color: "rgb(109, 40, 217)",
                      border: "2px solid rgb(147, 51, 234)",
                      boxShadow: "rgba(124, 58, 237, 0.2) 0px 1px 3px",
                      fontWeight: 500
                    }}
                  >
                    <ChefHat className="tw-text-purple-600 tw-text-xs" size={16} />
                    recipe creator
                  </div>
                  <div 
                    className="tw-flex tw-items-center tw-justify-center tw-gap-1.5 tw-px-4 tw-py-2 tw-rounded-full tw-text-sm tw-transition-all tw-duration-200 tw-cursor-pointer hover:tw-opacity-95 tw-flex-1"
                    style={{
                      backgroundColor: "rgba(254, 226, 204, 0.8)",
                      color: "rgb(194, 65, 12)",
                      border: "2px solid rgb(249, 115, 22)",
                      boxShadow: "rgba(249, 115, 22, 0.2) 0px 1px 3px",
                      fontWeight: 500
                    }}
                  >
                    <Calendar className="tw-text-orange-600 tw-text-xs" size={16} />
                    meal planner
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tw-mt-4 tw-cursor-pointer tw-transition-all tw-duration-300 hover:tw-opacity-90">
            <div 
              className="tw-flex tw-items-center tw-px-4 sm:tw-px-6 tw-py-2 tw-rounded-3xl tw-font-semibold tw-text-gray-800 tw-text-sm sm:tw-text-base"
              style={{
                backgroundColor: "rgb(250, 226, 158)",
                animation: "0.4s ease-out 0s 1 normal none running fadeIn",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 8px"
              }}
            >
              <Lightbulb className="tw-text-yellow-600 tw-mr-2 tw-text-lg tw-flex-shrink-0" size={20} />
              <span className="tw-line-clamp-2">Create a 7-day breakfast plan with different healthy smoothies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;