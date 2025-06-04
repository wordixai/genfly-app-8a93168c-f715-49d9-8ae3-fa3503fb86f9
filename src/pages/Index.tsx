import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import CookieConsent from "@/components/CookieConsent";
import FeedbackButton from "@/components/FeedbackButton";

const Index = () => {
  return (
    <div className="tw-min-h-screen tw-bg-white">
      <Header />
      <main>
        <HeroSection />
        <LogoSection />
        <FeaturesSection />
        <PricingSection />
        <FeaturedRecipes />
      </main>
      <CookieConsent />
      <FeedbackButton />
    </div>
  );
};

export default Index;