import Header from "@/components/layout/Header";
import HeroCarousel from "@/components/home/HeroCarousel";
import EditorialGrid from "@/components/home/EditorialGrid";
import FeaturedResearchSection from "@/components/home/FeaturedResearchSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <EditorialGrid />
      <FeaturedResearchSection />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>Hello</h1>
      </div>
    </>
  );
}
