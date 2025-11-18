import { Hero } from "@/components/sections/Hero";
import WhyWormiBox from "@/components/sections/WhyWormiBox";
import DataStatistics from "@/components/sections/DataStatistics";
import ModernTechnology from "@/components/sections/ModernTechnology";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyWormiBox />
      <DataStatistics />
      <ModernTechnology />
      <Testimonials />
    </div>
  );
}
