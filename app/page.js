import CodeAdapts from "./sections/CodeAdapts";
import HeroSection from "./sections/HeroSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection></HeroSection>
      <CodeAdapts></CodeAdapts>
    </div>
  );
}
