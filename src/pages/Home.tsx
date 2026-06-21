import Hero from "@/components/sections/Hero";
import FeaturedEvent from "@/components/sections/FeaturedEvent";
import MediaReel from "@/components/sections/MediaReel";
import Manifesto from "@/components/sections/Manifesto";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedEvent />
      <MediaReel />
      <Manifesto />
    </div>
  );
}
