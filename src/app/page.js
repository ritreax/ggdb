import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FeaturedWeekSection } from "@/components/section/FeaturedWeek/FeaturedWeekSection";
import { HeroSection } from "@/components/section/HeroSection/HeroSection";
import { MostVisitedSection } from "@/components/section/MostVisited/MostVisitedSection";
import { TopCompaniesSection } from "@/components/section/TopCompanies/TopCompaniesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center gap-36">
      <div className="px-4 w-full min-h-dvh flex flex-col items-center">
        <Header />
        <HeroSection />
      </div>

      <FeaturedWeekSection />
      <MostVisitedSection />
      <TopCompaniesSection />

      <Footer />
    </div>
  );
}
