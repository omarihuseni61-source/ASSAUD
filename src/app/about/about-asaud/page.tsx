import type { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { VisionMission } from '@/components/about/VisionMission';
import { Objectives } from '@/components/about/Objectives';
import { CoreValues } from '@/components/about/CoreValues';
import { MembershipScope } from '@/components/about/MembershipScope';
import aboutDataRaw from '@/data/about/about-asaud.json';
import type { AboutASAUD } from '@/types/about';

const aboutData = aboutDataRaw as AboutASAUD;

export const metadata: Metadata = {
  title: 'About ASAUD',
  description:
    'Learn about ASAUD\'s identity, vision, mission, objectives, core values, and membership scope.',
};

export default function AboutASAUDPage() {
  return (
    <>
      <PageHeader
        badge="Who We Are"
        title={aboutData.identity.name}
        description={aboutData.overview}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'About ASAUD', href: '/about/about-asaud' },
        ]}
      />

      <VisionMission data={aboutData} />
      <Objectives objectives={aboutData.objectives} />
      <CoreValues values={aboutData.coreValues} />
      <MembershipScope data={aboutData.membershipScope} />
    </>
  );
}