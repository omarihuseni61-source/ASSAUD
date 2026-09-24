'use client';

import { useState, useMemo } from 'react';
import { Handshake } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { EmptyState } from '@/components/common/EmptyState';
import { PartnerCard } from '@/components/community/PartnerCard';
import partnersDataRaw from '@/data/community/partners.json';
import { cn } from '@/lib/utils';
import type { Partner, PartnerType } from '@/types/community';

const partnersData = partnersDataRaw as { partners: Partner[] };

const types: { value: PartnerType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Partners' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'government', label: 'Government' },
  { value: 'educational', label: 'Educational' },
  { value: 'professional', label: 'Professional' },
];

export default function PartnersPage() {
  const [activeType, setActiveType] = useState<PartnerType | 'all'>('all');

  const filteredPartners = useMemo(() => {
    return partnersData.partners.filter(
      (p) => activeType === 'all' || p.type === activeType
    );
  }, [activeType]);

  return (
    <>
      <PageHeader
        badge="Collaborations"
        title="Our Partners"
        description="Organizations and institutions that collaborate with ASAUD to support actuarial education and career development."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Community', href: '/community' },
          { label: 'Partners', href: '/community/partners' },
        ]}
      />

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Filter */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
            <div className="flex flex-wrap gap-2 mb-5">
              {types.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setActiveType(t.value)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    activeType === t.value
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 pt-5 border-t border-gray-100">
              <Handshake className="w-4 h-4 text-gray-400" />
              <span>
                <strong className="text-gray-900">{filteredPartners.length}</strong>{' '}
                {filteredPartners.length === 1 ? 'partner' : 'partners'} found
              </span>
            </div>
          </div>

          {/* Grid */}
          {filteredPartners.length === 0 ? (
            <EmptyState
              title="No partners found"
              message="Try a different filter."
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPartners.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
