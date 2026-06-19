import Hero from "@/components/sections/Hero";
import FeaturedEvent from "@/components/sections/FeaturedEvent";
import MediaReel from "@/components/sections/MediaReel";
import Manifesto from "@/components/sections/Manifesto";
import EventsGrid from "@/components/sections/EventsGrid";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedEvent />
      <MediaReel />
      <Manifesto />
      <EventsGrid />
    </div>
  );
}
