import { useState } from "react";
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
    <section className="text-center text-white items-center py-14 bg-gradient-to-br to-purple-950 from-fuchsia-900 dot-bg">
      <div className="max-w-4xl mx-auto px-3 md:px-8">
        <h1 className="text-4xl sm:text-5xl mb-4 font-bold">
          Create AI Recipes & Meal Plans
        </h1>
        <p className="text-lg mb-8">
          DishGen can generate all-new recipes and meal plans on demand. Simply enter your ingredients,
          dietary needs, a recipe idea, or meal plan request – DishGen will create something just for you...
        </p>

        <div className="flex flex-col items-center w-full mx-auto">
          <div className="w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-solid border-gray-900">
            <div className="relative px-4 pt-3 pb-2">
              <Textarea
                placeholder=""
                rows={2}
                value={inputValue}
                onChange={handleInputChange}
                className="bg-transparent w-full resize-none outline-none border-none text-lg text-gray-800 font-normal h-16 overflow-auto"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              />
              {showPlaceholder && (
                <div 
                  className="absolute text-start top-3 left-4 text-lg text-gray-400 pointer-events-none"
                  style={{ animation: "0.5s ease 0s 1 normal forwards running slideDownIn", opacity: 1 }}
                >
                  help me create a healthy recipe for...
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 p-3 sm:p-4" style={{ borderTop: "1px solid rgba(0, 0, 0, 0.1)" }}>
              {/* Desktop Layout */}
              <div className="hidden sm:flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">tools</span>
                  <div className="flex gap-2">
                    <div 
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer hover:opacity-95"
                      style={{
                        backgroundColor: "rgba(233, 213, 255, 0.8)",
                        color: "rgb(109, 40, 217)",
                        border: "2px solid rgb(147, 51, 234)",
                        boxShadow: "rgba(124, 58, 237, 0.2) 0px 1px 3px",
                        fontWeight: 500
                      }}
                    >
                      <ChefHat className="text-purple-600 text-xs" size={16} />
                      recipe creator
                    </div>
                    <div 
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer hover:opacity-95"
                      style={{
                        backgroundColor: "rgba(254, 226, 204, 0.8)",
                        color: "rgb(194, 65, 12)",
                        border: "2px solid rgb(249, 115, 22)",
                        boxShadow: "rgba(249, 115, 22, 0.2) 0px 1px 3px",
                        fontWeight: 500
                      }}
                    >
                      <Calendar className="text-orange-600 text-xs" size={16} />
                      meal planner
                    </div>
                  </div>
                </div>
                <div 
                  className="bg-black text-white rounded-full px-6 py-2 flex items-center gap-1 transition-all duration-200 opacity-50"
                  style={{ pointerEvents: "none", boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 4px" }}
                >
                  submit <ArrowUp className="text-xl" size={16} />
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="sm:hidden flex flex-col items-center gap-3">
                <div 
                  className="bg-black text-white rounded-full px-6 py-2 flex items-center justify-center gap-1 transition-all duration-200 w-full opacity-50"
                  style={{ pointerEvents: "none", boxShadow: "rgba(0, 0, 0, 0.25) 0px 2px 4px", minWidth: "120px" }}
                >
                  submit <ArrowUp className="text-xl" size={16} />
                </div>
                <div className="flex items-center justify-center w-full gap-2 px-2">
                  <div 
                    className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer hover:opacity-95 flex-1"
                    style={{
                      backgroundColor: "rgba(233, 213, 255, 0.8)",
                      color: "rgb(109, 40, 217)",
                      border: "2px solid rgb(147, 51, 234)",
                      boxShadow: "rgba(124, 58, 237, 0.2) 0px 1px 3px",
                      fontWeight: 500
                    }}
                  >
                    <ChefHat className="text-purple-600 text-xs" size={16} />
                    recipe creator
                  </div>
                  <div 
                    className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer hover:opacity-95 flex-1"
                    style={{
                      backgroundColor: "rgba(254, 226, 204, 0.8)",
                      color: "rgb(194, 65, 12)",
                      border: "2px solid rgb(249, 115, 22)",
                      boxShadow: "rgba(249, 115, 22, 0.2) 0px 1px 3px",
                      fontWeight: 500
                    }}
                  >
                    <Calendar className="text-orange-600 text-xs" size={16} />
                    meal planner
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 cursor-pointer transition-all duration-300 hover:opacity-90">
            <div 
              className="flex items-center px-4 sm:px-6 py-2 rounded-3xl font-semibold text-gray-800 text-sm sm:text-base"
              style={{
                backgroundColor: "rgb(250, 226, 158)",
                animation: "0.4s ease-out 0s 1 normal none running fadeIn",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 8px"
              }}
            >
              <Lightbulb className="text-yellow-600 mr-2 text-lg flex-shrink-0" size={20} />
              <span className="line-clamp-2">Create a 7-day breakfast plan with different healthy smoothies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;