import { FeaturedActivities } from "@/components/home/FeaturedActivities";
import { Hero } from "@/components/home/Hero";
import { LatestUpdates } from "@/components/home/LatestUpdates";
import { QuickAccess } from "@/components/home/QuickAccess";
import { SocialChannels } from "@/components/home/SocialChannels";
import Image from "next/image";

export default function Home() {
  return (
    <div> 
      <Hero />
      <LatestUpdates />
      <FeaturedActivities />
      <QuickAccess />
      <SocialChannels />
    </div>
  );
}
