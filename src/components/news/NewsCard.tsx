import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  ArrowRight,
  Clock,
  Briefcase,
  GraduationCap,
  Award,
  Megaphone,
  Users,
  TrendingUp,
  Newspaper,
  BookOpen,
} from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { formatDate, formatRelativeTime } from '@/utils/formatters';
import type { NewsItem, NewsType } from '@/types/newsEvents';

const typeConfig: Record<
  NewsType,
  {
    label: string;
    variant: 'maroon' | 'green' | 'purple' | 'orange' | 'red' | 'gray';
    icon: React.ComponentType<{ className?: string }>;
  }
> = {
  announcement: { label: 'Announcement', variant: 'maroon', icon: Megaphone },
  internship: { label: 'Internship', variant: 'orange', icon: Briefcase },
  scholarship: { label: 'Scholarship', variant: 'green', icon: GraduationCap },
  competition: { label: 'Competition', variant: 'purple', icon: Award },
  mentorship: { label: 'Mentorship', variant: 'maroon', icon: Users },
  training: { label: 'Training', variant: 'purple', icon: BookOpen },
  career: { label: 'Career', variant: 'green', icon: TrendingUp },
  achievement: { label: 'Achievement', variant: 'red', icon: Award },
  news: { label: 'News', variant: 'gray', icon: Newspaper },
};

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  const config = typeConfig[item.type];
  const Icon = config.icon;

  return (
    <Link
      href={item.link}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-red-100 to-red-200">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge variant={config.variant}>{config.label}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatRelativeTime(item.date)}
          </span>
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {item.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-1">
          {item.description}
        </p>

        {item.deadline && (
          <div className="flex items-center gap-1.5 text-xs text-orange-600 font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            Apply by {formatDate(item.deadline, 'MMM dd, yyyy')}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-500">{item.category}</span>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
            Read More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
