import Image from 'next/image';
import { Mail } from 'lucide-react';
import type { Leader } from '@/types/community';

interface LeaderCardProps {
  leader: Leader;
}

export function LeaderCard({ leader }: LeaderCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Photo */}
      <div className="relative h-64 bg-gradient-to-br from-red-100 to-red-200 overflow-hidden">
        <Image
          src={leader.photo}
          alt={leader.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {leader.name}
        </h3>
        <div className="text-sm font-semibold text-red-600 mb-1">
          {leader.position}
        </div>
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
          {leader.portfolio}
        </div>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {leader.bio}
        </p>

        <a
          href={`mailto:${leader.email}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-50 text-blue-700 text-xs font-semibold rounded-lg hover:bg-red-100 transition-colors"
        >
          <Mail className="w-3.5 h-3.5" />
          Contact
        </a>
      </div>
    </div>
  );
}
