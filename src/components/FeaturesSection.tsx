import { Play } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-br to-purple-950 from-neutral-800 pb-12 pt-10">
      <span id="video"></span>
      <div className="max-w-4xl mx-auto text-center px-4 mb-16">
        <div className="flex items-center justify-center mb-2">
          <img 
            alt="AI Recipe Fork" 
            loading="lazy" 
            width="48" 
            height="80" 
            className="hidden md:block w-12 h-20 mr-4 mt-2" 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=48&h=80&fit=crop&crop=center"
            style={{ transform: "rotate(180deg)" }}
          />
          <div>
            <div className="bg-transparent pt-6 pb-2">
              <div className="text-center mb-2">
                <span className="text-amber-300 uppercase tracking-widest font-bold text-sm">
                  OVER <u>1 MILLION</u> AI RECIPES CREATED
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow inline-block">
              Your Personalized AI Kitchen{" "}
              <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">
                Copilot
              </span>
            </h1>
          </div>
          <img 
            alt="AI Recipe Fork" 
            loading="lazy" 
            width="48" 
            height="80" 
            className="hidden md:block w-12 h-20 ml-4 mt-2" 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=48&h=80&fit=crop&crop=center"
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
        <p className="text-2xl text-purple-100 mb-8 font-medium">
          Instantly generate custom recipes and meal plans, tailored to your tastes, goals, and lifestyle—just by chatting with your own AI chef.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-2">
          <span className="bg-amber-400/20 text-amber-200 font-semibold px-4 py-2 rounded-full text-base">
            Save Time
          </span>
          <span className="bg-purple-700/40 text-purple-100 font-semibold px-4 py-2 rounded-full text-base">
            Reduce Food Waste
          </span>
          <span className="bg-emerald-400/20 text-emerald-100 font-semibold px-4 py-2 rounded-full text-base">
            Eat Healthier
          </span>
          <span className="bg-fuchsia-400/20 text-fuchsia-100 font-semibold px-4 py-2 rounded-full text-base">
            Reach Your Goals
          </span>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-3xl mx-auto px-4 mb-12">
        <div 
          className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-2xl border-4 border-solid border-fuchsia-500/60" 
          tabIndex={0} 
          role="button" 
          aria-label="Watch: How It Works"
        >
          <div className="aspect-video">
            <img 
              alt="Watch How DishGen recipe AI Works" 
              loading="lazy" 
              width="800" 
              height="450" 
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 group-hover:scale-[1.01]" 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=450&fit=crop&crop=center"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="bg-gradient-to-br from-fuchsia-500 to-purple-700 w-20 h-20 rounded-full shadow-xl border-4 border-white/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 ml-1 text-white" />
            </span>
            <span className="mt-6 bg-black/70 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg backdrop-blur">
              Watch: How It Works
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Recipe Generator Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20 px-4">
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl pt-12 pb-4 px-6 md:px-12 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-3">AI Recipe Generator</h2>
          <p className="text-lg text-purple-100 mb-4">
            Describe any idea or ingredient list and DishGen instantly creates a unique recipe just for you. No more endless searching or boring repeats.
          </p>
          <ul className="list-disc text-purple-100 space-y-3 text-md pl-5">
            <li>
              Turn leftovers or pantry items into delicious meals to{" "}
              <span className="font-semibold">save money and reduce waste</span>
            </li>
            <li>Request substitutions, new cuisines, or dietary tweaks—just ask in chat</li>
            <li>Save, remix, and share your favorite creations</li>
            <li>Never run out of inspiration again</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            alt="AI Recipe Generator" 
            loading="lazy" 
            width="384" 
            height="384" 
            className="w-96 h-96 object-cover object-top rounded-2xl shadow-xl border-4 border-amber-300/40" 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=384&h=384&fit=crop&crop=center"
          />
        </div>
      </div>

      {/* Meal Planner Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 mb-20 px-4">
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl pt-12 pb-4 px-6 md:px-12 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-3">AI Meal Planner</h2>
          <p className="text-lg text-purple-100 mb-4">
            Achieve your goals with a meal plan built for you. Whether it's weight loss, muscle gain, or eating on a budget, just tell DishGen what you want.
          </p>
          <ul className="list-disc text-purple-100 space-y-2 text-md pl-5">
            <li>Get a full week of meals, tailored to your preferences and schedule</li>
            <li>Generate AI recipes for any meal in your plan – instantly</li>
            <li>Edit, swap, and customize meals easily from your account</li>
            <li>Stay on track and save time every week</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            alt="AI Meal Planner" 
            loading="lazy" 
            width="384" 
            height="384" 
            className="w-96 h-96 object-cover object-top rounded-2xl shadow-xl border-4 border-emerald-300/40" 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=384&h=384&fit=crop&crop=center"
          />
        </div>
      </div>

      {/* Personalized Profiles Section */}
      <div className="mx-4 md:mx-12">
        <div className="max-w-6xl mx-auto my-8 bg-gradient-to-br from-purple-900/90 to-fuchsia-900/80 rounded-3xl shadow-2xl pt-16 px-6 md:px-20">
          <div className="text-center">
            <span className="text-amber-200 font-bold uppercase text-sm tracking-widest mb-2 block">
              NOW WITH PERSONALIZED PROFILES
            </span>
          </div>
          <h3 className="text-4xl font-extrabold text-white mb-4 text-center">
            The AI-Powered Kitchen Coach Built for{" "}
            <span className="text-amber-200 underline">YOU</span>
          </h3>
          <p className="text-purple-100 text-lg mb-10 text-center max-w-3xl mx-auto">
            Imagine an AI that truly knows you—your tastes, your dietary needs, your goals, and your kitchen.{" "}
            <strong>DishGen's personalized AI profile feature turns our AI model into your intelligent kitchen coach</strong>, 
            always ready to help you eat better, save time, and reach your goals.
          </p>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 flex flex-col items-center mb-6">
              <img 
                alt="Personalized AI Recipes" 
                loading="lazy" 
                width="500" 
                height="540" 
                className="w-full max-w-md h-auto object-cover object-top rounded-2xl shadow-2xl border-4 border-purple-400/30" 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=540&fit=crop&crop=center"
                style={{ maxHeight: "540px" }}
              />
            </div>
            <div className="flex-1">
              <ul className="list-disc list-inside text-purple-100 space-y-3 text-lg mb-6">
                <li>
                  <span className="font-bold">Reach Your Goals</span>
                  <span className="block text-base ml-4">
                    Whether it's eating healthier, building muscle, or saving money, your AI adapts to your needs and keeps you on track.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Get Smarter Suggestions</span>
                  <span className="block text-base ml-4">
                    Your AI chef recommends meal plans and recipes that fit your diet, lifestyle, budget, and more—no more generic results.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Save Time</span>
                  <span className="block text-base ml-4">
                    Skip the planning and searching. Your AI already knows your preferences and delivers ideas that work for you, instantly.
                  </span>
                </li>
                <li>
                  <span className="font-bold">Reduce Food Waste</span>
                  <span className="block text-base ml-4">
                    Get creative ideas for what's in your fridge, so you use more and waste less.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;