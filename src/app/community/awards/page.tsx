'use client';

import { useState, useMemo } from 'react';
import { Award as AwardIcon, Filter } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { EmptyState } from '@/components/common/EmptyState';
import { AwardCard } from '@/components/community/AwardCard';
import awardsDataRaw from '@/data/community/awards.json';
import { cn } from '@/lib/utils';
import type { Award, AwardCategory } from '@/types/community';

const awardsData = awardsDataRaw as { awards: Award[] };

const categories: { value: AwardCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Awards' },
  { value: 'academic', label: 'Academic' },
  { value: 'research', label: 'Research' },
  { value: 'competition', label: 'Competition' },
  { value: 'scholarship', label: 'Scholarship' },
  { value: 'professional', label: 'Professional' },
  { value: 'leadership', label: 'Leadership' },
];

export default function AwardsPage() {
  const [activeCategory, setActiveCategory] = useState<AwardCategory | 'all'>('all');
  const [year, setYear] = useState<number | 'all'>('all');

  const years = useMemo(() => {
    const y = new Set(awardsData.awards.map((a) => a.year));
    return Array.from(y).sort((a, b) => b - a);
  }, []);

  const filteredAwards = useMemo(() => {
    return awardsData.awards.filter((a) => {
      const matchesCategory = activeCategory === 'all' || a.category === activeCategory;
      const matchesYear = year === 'all' || a.year === year;
      return matchesCategory && matchesYear;
    });
  }, [activeCategory, year]);

  const clearFilters = () => {
    setActiveCategory('all');
    setYear('all');
  };

  return (
    <>
      <PageHeader
        badge="Recognition"
        title="Awards & Recognition"
        description="Celebrating outstanding achievements of ASAUD members and alumni."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Community', href: '/community' },
          { label: 'Awards', href: '/community/awards' },
        ]}
      />

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Filters */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    activeCategory === cat.value
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="pt-5 border-t border-gray-100">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Filter by year:
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setYear('all')}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                    year === 'all'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  All Years
                </button>
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => setYear(y)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                      year === y
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    )}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <AwardIcon className="w-4 h-4 text-gray-400" />
                <span>
                  <strong className="text-gray-900">{filteredAwards.length}</strong>{' '}
                  {filteredAwards.length === 1 ? 'award' : 'awards'} found
                </span>
              </div>
              {(activeCategory !== 'all' || year !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Awards Grid */}
          {filteredAwards.length === 0 ? (
            <EmptyState
              title="No awards found"
              message="Try adjusting your filters."
              actionLabel="Clear filters"
              onAction={clearFilters}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAwards.map((award) => (
                <AwardCard key={award.id} award={award} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
