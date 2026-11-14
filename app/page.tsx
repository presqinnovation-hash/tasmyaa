import Header from "@/components/layout/Header";
import HeroCarousel from "@/components/home/HeroCarousel";
import EditorialGrid from "@/components/home/EditorialGrid";
import FeaturedResearchSection from "@/components/home/FeaturedResearchSection";
import BlogsSection from "@/components/home/BlogsSection";
import ImpactStatisticsSection from "@/components/home/ImpactStatisticsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <EditorialGrid />
      <FeaturedResearchSection />
      <BlogsSection />
      <ImpactStatisticsSection />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>Hello</h1>
      </div>
      <Footer />
    </>
  );
}
