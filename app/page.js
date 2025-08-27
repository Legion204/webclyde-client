import AboutUs from "./sections/AboutUs";
import CodeAdapts from "./sections/CodeAdaptsSection";
import HeroSection from "./sections/HeroSection";
import PortfolioSection from "./sections/PortfolioSection";
import Services from "./sections/ServicesSection";


export default function Home() {
  return (
    <div className="w-full">
      <HeroSection></HeroSection>
      <CodeAdapts></CodeAdapts>
      <Services></Services>
      <PortfolioSection></PortfolioSection>
      <AboutUs></AboutUs>
    </div>
  );
}
