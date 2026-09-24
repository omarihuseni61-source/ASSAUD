import Link from 'next/link';
import { Calendar, ArrowRight, GraduationCap, Briefcase, Megaphone } from 'lucide-react';
import updatesData from '@/data/home/updates.json';
import { formatRelativeTime } from '@/utils/formatters';
import type { Update } from '@/types/home';

const typeConfig: Record<
  Update['type'],
  { icon: React.ComponentType<{ className?: string }>; color: string; label: string }
> = {
  academic: {
    icon: GraduationCap,
    color: 'bg-red-100 text-red-700',
    label: 'Academic',
  },
  opportunity: {
    icon: Briefcase,
    color: 'bg-green-100 text-green-700',
    label: 'Opportunity',
  },
  announcement: {
    icon: Megaphone,
    color: 'bg-orange-100 text-orange-700',
    label: 'Announcement',
  },
};

export function LatestUpdates() {
  const updates = updatesData.updates as Update[];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Header */}
          <div className="lg:col-span-1">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4">
              Latest
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Updates
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Stay informed with the latest announcements, academic updates,
              and opportunities from ASAUD.
            </p>
            <Link
              href="/news-events/news"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              View All Updates
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Column: Updates List */}
          <div className="lg:col-span-2 space-y-4">
            {updates.map((update) => {
              const config = typeConfig[update.type];
              const Icon = config.icon;

              return (
                <Link
                  key={update.id}
                  href={update.link}
                  className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-red-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg ${config.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${config.color}`}
                        >
                          {config.label}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          {formatRelativeTime(update.date)}
                        </div>
                      </div>

                      <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                        {update.title}
                      </h3>

                      <p className="text-sm text-gray-600 line-clamp-2">
                        {update.content}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
