import Link from 'next/link';
import {
  BookOpen,
  Database,
  Users,
  Newspaper,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import quickAccessData from '@/data/home/quickAccess.json';
import type { QuickAccessSection } from '@/types/home';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'book-open': BookOpen,
  database: Database,
  users: Users,
  newspaper: Newspaper,
};

const colorMap: Record<
  QuickAccessSection['color'],
  { bg: string; text: string; border: string; gradient: string }
> = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
    gradient: 'from-blue-500 to-blue-700',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-200',
    gradient: 'from-green-500 to-green-700',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-200',
    gradient: 'from-purple-500 to-purple-700',
  },
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    border: 'border-orange-200',
    gradient: 'from-orange-500 to-orange-700',
  },
};

export function QuickAccess() {
  const sections = quickAccessData.sections as QuickAccessSection[];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Explore ASAUD
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-lg text-gray-600">
            Navigate through our key sections to access academic resources,
            community information, and professional opportunities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section) => {
            const Icon = iconMap[section.icon] || BookOpen;
            const colors = colorMap[section.color];

            return (
              <Link
                key={section.id}
                href={section.href}
                className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-full -mr-10 -mt-10 group-hover:opacity-10 group-hover:scale-110 transition-all`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {section.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {section.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {section.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-xs text-gray-500"
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 ${colors.text} flex-shrink-0`} />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div
                  className={`flex items-center gap-1.5 text-sm font-semibold ${colors.text} group-hover:gap-2.5 transition-all`}
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}