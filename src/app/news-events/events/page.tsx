'use client';

import { useState, useMemo } from 'react';
import { Calendar, Search, Filter } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SearchBar } from '@/components/common/SearchBar';
import { EmptyState } from '@/components/common/EmptyState';
import { EventCard } from '@/components/news/EventCard';
import eventsDataRaw from '@/data/newsEvents/events.json';
import { cn } from '@/lib/utils';
import type { EventItem, EventType } from '@/types/newsEvents';

const eventsData = eventsDataRaw as { events: EventItem[] };

const types: { value: EventType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Events' },
  { value: 'networking', label: 'Networking' },
  { value: 'workshop', label: 'Workshops' },
  { value: 'seminar', label: 'Seminars' },
  { value: 'conference', label: 'Conferences' },
  { value: 'training', label: 'Training' },
];

export default function EventsPage() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState<EventType | 'all'>('all');

  const { upcoming, past } = useMemo(() => {
    const now = new Date();
    const q = search.toLowerCase().trim();

    const filtered = eventsData.events.filter((e) => {
      const matchesSearch =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.venue.toLowerCase().includes(q) ||
        e.speakers.some((s) => s.name.toLowerCase().includes(q));

      const matchesType = type === 'all' || e.type === type;

      return matchesSearch && matchesType;
    });

    const sorted = [...filtered].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return {
      upcoming: sorted.filter((e) => new Date(e.date) >= now),
      past: sorted.filter((e) => new Date(e.date) < now).reverse(),
    };
  }, [search, type]);

  const clearFilters = () => {
    setSearch('');
    setType('all');
  };

  return (
    <>
      <PageHeader
        badge="Events Calendar"
        title="Upcoming Events"
        description="Workshops, career fairs, seminars, and networking opportunities for actuarial science students."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Events', href: '/news-events' },
          { label: 'Events', href: '/news-events/events' },
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
                placeholder="Search events by title, venue, or speaker..."
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
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>
                  <strong className="text-gray-900">{upcoming.length}</strong>{' '}
                  upcoming · <strong className="text-gray-900">{past.length}</strong>{' '}
                  past
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

          {/* Upcoming */}
          {upcoming.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Upcoming Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcoming.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* Past */}
          {past.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Past Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-75">
                {past.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* Empty */}
          {upcoming.length === 0 && past.length === 0 && (
            <EmptyState
              title="No events found"
              message="Try adjusting your search or filters."
              actionLabel="Clear filters"
              onAction={clearFilters}
            />
          )}
        </div>
      </section>
    </>
  );
}