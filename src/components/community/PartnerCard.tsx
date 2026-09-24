import Image from 'next/image';
import { ExternalLink, Building2, Calendar } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import type { Partner, PartnerType } from '@/types/community';

const typeConfig: Record<PartnerType, { label: string; variant: any }> = {
  corporate: { label: 'Corporate', variant: 'maroon' },
  government: { label: 'Government', variant: 'red' },
  educational: { label: 'Educational', variant: 'green' },
  professional: { label: 'Professional', variant: 'purple' },
  ngo: { label: 'NGO', variant: 'orange' },
};

interface PartnerCardProps {
  partner: Partner;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  const config = typeConfig[partner.type];

  return (
    <a
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 hover:border-red-300 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0 p-2">
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge variant={config.variant}>{config.label}</Badge>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
        </div>
      </div>

      {/* Name */}
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {partner.acronym}
        </h3>
      </div>
      <div className="text-sm font-medium text-gray-700 mb-3">
        {partner.name}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
        {partner.description}
      </p>

      {/* Collaboration */}
      <div className="pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          Collaboration
        </div>
        <div className="text-xs text-gray-700 mb-3">
          {partner.collaboration}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Calendar className="w-3 h-3" />
          Partner since {partner.since}
        </div>
      </div>
    </a>
  );
}
