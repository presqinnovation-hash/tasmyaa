import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import EditorialMosaic from "@/components/home/EditorialMosaic";
import FeaturedResearch from "@/components/home/FeaturedResearch";
import SpotlightSection from "@/components/home/SpotlightSection";
import BlogsSection from "@/components/home/BlogsSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import { Container } from "@/components/common/Ui";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <Container className="editorial-body">
          <EditorialMosaic />
          <div className="research-layout">
            <FeaturedResearch />
            <SpotlightSection />
            <BlogsSection />
          </div>
        </Container>
        <StatisticsSection />
      </main>
      <Footer />
    </>
  );
}
