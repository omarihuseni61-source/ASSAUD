import { FeaturedActivities } from "./FeaturedActivities";
import { Hero } from "./Hero";
import { LatestUpdates } from "./LatestUpdates";
import { QuickAccess } from "./QuickAccess";
import { SocialChannels } from "./SocialChannels";

export function homePage() {
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