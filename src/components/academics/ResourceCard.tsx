import { FileText, Download, Calendar, HardDrive } from 'lucide-react';
import { formatDate } from '@/utils/formatters';
import type { MaterialResource } from '@/types/academics';

const typeConfig: Record<
  MaterialResource['type'],
  { label: string; color: string; bg: string }
> = {
  lecture: { label: 'Lecture', color: 'text-red-700', bg: 'bg-red-100' },
  tutorial: { label: 'Tutorial', color: 'text-green-700', bg: 'bg-green-100' },
  pastpaper: { label: 'Past Paper', color: 'text-orange-700', bg: 'bg-orange-100' },
  quiz: { label: 'Quiz', color: 'text-purple-700', bg: 'bg-purple-100' },
};

interface ResourceCardProps {
  resource: MaterialResource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const config = typeConfig[resource.type];

  return (
    <div className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-red-200 transition-all">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-lg ${config.bg} ${config.color} flex items-center justify-center flex-shrink-0`}>
          <FileText className="w-6 h-6" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${config.bg} ${config.color}`}>
              {config.label}
            </span>
          </div>

          <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-red-600 transition-colors">
            {resource.title}
          </h3>

          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
            {resource.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(resource.uploadDate)}
            </span>
            <span className="flex items-center gap-1">
              <HardDrive className="w-3.5 h-3.5" />
              {resource.fileSize}
            </span>
          </div>
        </div>

        <a
          href={resource.downloadUrl}
          download
          className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
          aria-label={`Download ${resource.title}`}
        >
          <Download className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
