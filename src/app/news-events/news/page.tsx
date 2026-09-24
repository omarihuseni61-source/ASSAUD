'use client';

import { useState, useMemo } from 'react';
import { Newspaper, Search, Filter } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SearchBar } from '@/components/common/SearchBar';
import { EmptyState } from '@/components/common/EmptyState';
import { NewsCard } from '@/components/news/NewsCard';
import newsDataRaw from '@/data/newsEvents/news.json';
import { cn } from '@/lib/utils';
import type { NewsItem, NewsType } from '@/types/newsEvents';

const newsData = newsDataRaw as { items: NewsItem[] };

const types: { value: NewsType | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'announcement', label: 'Announcements' },
  { value: 'internship', label: 'Internships' },
  { value: 'scholarship', label: 'Scholarships' },
  { value: 'competition', label: 'Competitions' },
  { value: 'mentorship', label: 'Mentorship' },
  { value: 'training', label: 'Training' },
  { value: 'achievement', label: 'Achievements' },
];

export default function NewsPage() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState<NewsType | 'all'>('all');

  const filteredNews = useMemo(() => {
    const q = search.toLowerCase().trim();
    return newsData.items
      .filter((item) => {
        const matchesSearch =
          !q ||
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q);

        const matchesType = type === 'all' || item.type === type;

        return matchesSearch && matchesType;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [search, type]);

  const clearFilters = () => {
    setSearch('');
    setType('all');
  };

  return (
    <>
      <PageHeader
        badge="Latest Updates"
        title="News & Opportunities"
        description="Stay informed with announcements, internships, scholarships, and achievements from ASAUD."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Events', href: '/news-events' },
          { label: 'News', href: '/news-events/news' },
        ]}
      />

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Filters */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
            <div className="mb-5">
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search news, internships, scholarships..."
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter by type:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setType(t.value)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    type === t.value
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Newspaper className="w-4 h-4 text-gray-400" />
                <span>
                  <strong className="text-gray-900">{filteredNews.length}</strong>{' '}
                  {filteredNews.length === 1 ? 'item' : 'items'} found
                </span>
              </div>
              {(search || type !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Grid */}
          {filteredNews.length === 0 ? (
            <EmptyState
              title="No news found"
              message="Try adjusting your search or filters."
              actionLabel="Clear filters"
              onAction={clearFilters}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
