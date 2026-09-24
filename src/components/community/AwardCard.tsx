import { Award as AwardIcon, Trophy, GraduationCap, Crown, BookOpen, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import type { Award, AwardCategory } from '@/types/community';

const categoryConfig: Record<
  AwardCategory,
  { label: string; variant: any; icon: any }
> = {
  academic: { label: 'Academic', variant: 'maroon', icon: GraduationCap },
  competition: { label: 'Competition', variant: 'orange', icon: Trophy },
  scholarship: { label: 'Scholarship', variant: 'green', icon: BookOpen },
  professional: { label: 'Professional', variant: 'purple', icon: AwardIcon },
  research: { label: 'Research', variant: 'red', icon: TrendingUp },
  leadership: { label: 'Leadership', variant: 'gray', icon: Crown },
};

interface AwardCardProps {
  award: Award;
}

export function AwardCard({ award }: AwardCardProps) {
  const config = categoryConfig[award.category];
  const Icon = config.icon;

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 hover:border-red-300 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white flex-shrink-0">
          <Icon className="w-6 h-6" />
        </div>
        <Badge variant={config.variant}>{config.label}</Badge>
      </div>

      <div className="inline-block px-2.5 py-1 bg-red-50 text-red-700 rounded-lg text-xs font-bold mb-3">
        {award.year}
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
        {award.title}
      </h3>

      <div className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">
        {award.description}
      </div>

      <div className="pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          Recipient
        </div>
        <div className="font-semibold text-gray-900 text-sm">
          {award.recipient}
        </div>
      </div>
    </div>
  );
}
