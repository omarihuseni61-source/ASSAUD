import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { LeaderCard } from '@/components/community/LeaderCard';
import leadershipDataRaw from '@/data/community/leadership.json';
import type { LeadershipData } from '@/types/community';

const leadershipData = leadershipDataRaw as LeadershipData;

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Meet the current ASAUD executive leadership team.',
};

export default function LeadershipPage() {
  const sortedLeaders = [...leadershipData.leaders].sort(
    (a, b) => a.order - b.order
  );

  return (
    <>
      <PageHeader
        badge="Executive Team"
        title="ASAUD Leadership"
        description={`Meet the dedicated student leaders serving the association for the ${leadershipData.currentTerm} term.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Community', href: '/community' },
          { label: 'Leadership', href: '/community/leadership' },
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                Term
              </div>
              <div className="text-lg font-bold text-gray-900">
                {leadershipData.currentTerm}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedLeaders.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
