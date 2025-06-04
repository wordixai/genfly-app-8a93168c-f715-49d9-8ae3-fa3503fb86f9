import { Play } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="tw-bg-gradient-to-br tw-to-purple-950 tw-from-neutral-800 tw-pb-12 tw-pt-10">
      <span id="video"></span>
      <div className="tw-max-w-4xl tw-mx-auto tw-text-center tw-px-4 tw-mb-16">
        <div className="tw-flex tw-items-center tw-justify-center tw-mb-2">
          <img 
            alt="AI Recipe Fork" 
            loading="lazy" 
            width="48" 
            height="80" 
            className="tw-hidden md:tw-block tw-w-12 tw-h-20 tw-mr-4 tw-mt-2" 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=48&h=80&fit=crop&crop=center"
            style={{ transform: "rotate(180deg)" }}
          />
          <div>
            <div className="tw-bg-transparent tw-pt-6 tw-pb-2">
              <div className="tw-text-center tw-mb-2">
                <span className="tw-text-amber-300 tw-uppercase tw-tracking-widest tw-font-bold tw-text-sm">
                  OVER <u>1 MILLION</u> AI RECIPES CREATED
                </span>
              </div>
            </div>
            <h1 className="tw-text-5xl md:tw-text-6xl tw-font-extrabold tw-text-white tw-drop-shadow tw-inline-block">
              Your Personalized AI Kitchen{" "}
              <span className="tw-bg-gradient-to-r tw-from-pink-400 tw-to-violet-300 tw-bg-clip-text tw-text-transparent">
                Copilot
              </span>
            </h1>
          </div>
          <img 
            alt="AI Recipe Fork" 
            loading="lazy" 
            width="48" 
            height="80" 
            className="tw-hidden md:tw-block tw-w-12 tw-h-20 tw-ml-4 tw-mt-2" 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=48&h=80&fit=crop&crop=center"
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
        <p className="tw-text-2xl tw-text-purple-100 tw-mb-8 tw-font-medium">
          Instantly generate custom recipes and meal plans, tailored to your tastes, goals, and lifestyle—just by chatting with your own AI chef.
        </p>
        <div className="tw-flex tw-flex-wrap tw-gap-4 tw-justify-center tw-mb-2">
          <span className="tw-bg-amber-400/20 tw-text-amber-200 tw-font-semibold tw-px-4 tw-py-2 tw-rounded-full tw-text-base">
            Save Time
          </span>
          <span className="tw-bg-purple-700/40 tw-text-purple-100 tw-font-semibold tw-px-4 tw-py-2 tw-rounded-full tw-text-base">
            Reduce Food Waste
          </span>
          <span className="tw-bg-emerald-400/20 tw-text-emerald-100 tw-font-semibold tw-px-4 tw-py-2 tw-rounded-full tw-text-base">
            Eat Healthier
          </span>
          <span className="tw-bg-fuchsia-400/20 tw-text-fuchsia-100 tw-font-semibold tw-px-4 tw-py-2 tw-rounded-full tw-text-base">
            Reach Your Goals
          </span>
        </div>
      </div>

      {/* Video Section */}
      <div className="tw-max-w-3xl tw-mx-auto tw-px-4 tw-mb-12">
        <div 
          className="tw-relative tw-cursor-pointer tw-group tw-overflow-hidden tw-rounded-2xl tw-shadow-2xl tw-border-4 tw-border-solid tw-border-fuchsia-500/60" 
          tabIndex={0} 
          role="button" 
          aria-label="Watch: How It Works"
        >
          <div className="tw-aspect-video">
            <img 
              alt="Watch How DishGen recipe AI Works" 
              loading="lazy" 
              width="800" 
              height="450" 
              className="tw-w-full tw-h-full tw-object-cover tw-transition-all tw-duration-300 group-hover:tw-brightness-75 group-hover:tw-scale-[1.01]" 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=450&fit=crop&crop=center"
            />
          </div>
          <div className="tw-absolute tw-inset-0 tw-flex tw-flex-col tw-items-center tw-justify-center">
            <span className="tw-bg-gradient-to-br tw-from-fuchsia-500 tw-to-purple-700 tw-w-20 tw-h-20 tw-rounded-full tw-shadow-xl tw-border-4 tw-border-white/30 tw-flex tw-items-center tw-justify-center tw-transition-transform tw-duration-300 group-hover:tw-scale-110">
              <Play className="tw-w-8 tw-h-8 tw-ml-1 tw-text-white" />
            </span>
            <span className="tw-mt-6 tw-bg-black/70 tw-text-white tw-px-6 tw-py-2 tw-rounded-full tw-text-lg tw-font-semibold tw-shadow-lg tw-backdrop-blur">
              Watch: How It Works
            </span>
          </div>
          <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-black/60 tw-via-black/10 tw-to-transparent tw-pointer-events-none"></div>
        </div>
      </div>

      {/* Recipe Generator Section */}
      <div className="tw-max-w-6xl tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-10 tw-mb-20 tw-px-4">
        <div className="tw-flex-1 tw-bg-white/10 tw-backdrop-blur-md tw-rounded-3xl tw-shadow-2xl tw-pt-12 tw-pb-4 tw-px-6 md:tw-px-12 tw-mb-8 md:tw-mb-0">
          <h2 className="tw-text-3xl tw-font-bold tw-text-white tw-mb-3">AI Recipe Generator</h2>
          <p className="tw-text-lg tw-text-purple-100 tw-mb-4">
            Describe any idea or ingredient list and DishGen instantly creates a unique recipe just for you. No more endless searching or boring repeats.
          </p>
          <ul className="tw-list-disc tw-text-purple-100 tw-space-y-3 tw-text-md tw-pl-5">
            <li>
              Turn leftovers or pantry items into delicious meals to{" "}
              <span className="tw-font-semibold">save money and reduce waste</span>
            </li>
            <li>Request substitutions, new cuisines, or dietary tweaks—just ask in chat</li>
            <li>Save, remix, and share your favorite creations</li>
            <li>Never run out of inspiration again</li>
          </ul>
        </div>
        <div className="tw-flex-1 tw-flex tw-justify-center">
          <img 
            alt="AI Recipe Generator" 
            loading="lazy" 
            width="384" 
            height="384" 
            className="tw-w-96 tw-h-96 tw-object-cover tw-object-top tw-rounded-2xl tw-shadow-xl tw-border-4 tw-border-amber-300/40" 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=384&h=384&fit=crop&crop=center"
          />
        </div>
      </div>

      {/* Meal Planner Section */}
      <div className="tw-max-w-6xl tw-mx-auto tw-flex tw-flex-col md:tw-flex-row-reverse tw-items-center tw-gap-10 tw-mb-20 tw-px-4">
        <div className="tw-flex-1 tw-bg-white/10 tw-backdrop-blur-md tw-rounded-3xl tw-shadow-2xl tw-pt-12 tw-pb-4 tw-px-6 md:tw-px-12 tw-mb-8 md:tw-mb-0">
          <h2 className="tw-text-3xl tw-font-bold tw-text-white tw-mb-3">AI Meal Planner</h2>
          <p className="tw-text-lg tw-text-purple-100 tw-mb-4">
            Achieve your goals with a meal plan built for you. Whether it's weight loss, muscle gain, or eating on a budget, just tell DishGen what you want.
          </p>
          <ul className="tw-list-disc tw-text-purple-100 tw-space-y-2 tw-text-md tw-pl-5">
            <li>Get a full week of meals, tailored to your preferences and schedule</li>
            <li>Generate AI recipes for any meal in your plan – instantly</li>
            <li>Edit, swap, and customize meals easily from your account</li>
            <li>Stay on track and save time every week</li>
          </ul>
        </div>
        <div className="tw-flex-1 tw-flex tw-justify-center">
          <img 
            alt="AI Meal Planner" 
            loading="lazy" 
            width="384" 
            height="384" 
            className="tw-w-96 tw-h-96 tw-object-cover tw-object-top tw-rounded-2xl tw-shadow-xl tw-border-4 tw-border-emerald-300/40" 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=384&h=384&fit=crop&crop=center"
          />
        </div>
      </div>

      {/* Personalized Profiles Section */}
      <div className="tw-mx-4 md:tw-mx-12">
        <div className="tw-max-w-6xl tw-mx-auto tw-my-8 tw-bg-gradient-to-br tw-from-purple-900/90 tw-to-fuchsia-900/80 tw-rounded-3xl tw-shadow-2xl tw-pt-16 tw-px-6 md:tw-px-20">
          <div className="tw-text-center">
            <span className="tw-text-amber-200 tw-font-bold tw-uppercase tw-text-sm tw-tracking-widest tw-mb-2 tw-block">
              NOW WITH PERSONALIZED PROFILES
            </span>
          </div>
          <h3 className="tw-text-4xl tw-font-extrabold tw-text-white tw-mb-4 tw-text-center">
            The AI-Powered Kitchen Coach Built for{" "}
            <span className="tw-text-amber-200 tw-underline">YOU</span>
          </h3>
          <p className="tw-text-purple-100 tw-text-lg tw-mb-10 tw-text-center tw-max-w-3xl tw-mx-auto">
            Imagine an AI that truly knows you—your tastes, your dietary needs, your goals, and your kitchen.{" "}
            <strong>DishGen's personalized AI profile feature turns our AI model into your intelligent kitchen coach</strong>, 
            always ready to help you eat better, save time, and reach your goals.
          </p>
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-12 tw-items-center">
            <div className="tw-flex-1 tw-flex tw-flex-col tw-items-center tw-mb-6">
              <img 
                alt="Personalized AI Recipes" 
                loading="lazy" 
                width="500" 
                height="540" 
                className="tw-w-full tw-max-w-md tw-h-auto tw-object-cover tw-object-top tw-rounded-2xl tw-shadow-2xl tw-border-4 tw-border-purple-400/30" 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=540&fit=crop&crop=center"
                style={{ maxHeight: "540px" }}
              />
            </div>
            <div className="tw-flex-1">
              <ul className="tw-list-disc tw-list-inside tw-text-purple-100 tw-space-y-3 tw-text-lg tw-mb-6">
                <li>
                  <span className="tw-font-bold">Reach Your Goals</span>
                  <span className="tw-block tw-text-base tw-ml-4">
                    Whether it's eating healthier, building muscle, or saving money, your AI adapts to your needs and keeps you on track.
                  </span>
                </li>
                <li>
                  <span className="tw-font-bold">Get Smarter Suggestions</span>
                  <span className="tw-block tw-text-base tw-ml-4">
                    Your AI chef recommends meal plans and recipes that fit your diet, lifestyle, budget, and more—no more generic results.
                  </span>
                </li>
                <li>
                  <span className="tw-font-bold">Save Time</span>
                  <span className="tw-block tw-text-base tw-ml-4">
                    Skip the planning and searching. Your AI already knows your preferences and delivers ideas that work for you, instantly.
                  </span>
                </li>
                <li>
                  <span className="tw-font-bold">Reduce Food Waste</span>
                  <span className="tw-block tw-text-base tw-ml-4">
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