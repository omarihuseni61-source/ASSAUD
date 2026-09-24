import { Database, Download, FileSpreadsheet, Layers, HardDrive } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import type { Dataset, DatasetCategory } from '@/types/dataProjects';

const categoryConfig: Record<DatasetCategory, { label: string; variant: any }> = {
  insurance: { label: 'Insurance', variant: 'maroon' },
  claims: { label: 'Claims', variant: 'orange' },
  mortality: { label: 'Mortality', variant: 'purple' },
  financial: { label: 'Financial', variant: 'green' },
  economic: { label: 'Economic', variant: 'red' },
  demographic: { label: 'Demographic', variant: 'gray' },
  simulated: { label: 'Simulated', variant: 'purple' },
};

interface DatasetCardProps {
  dataset: Dataset;
}

export function DatasetCard({ dataset }: DatasetCardProps) {
  const config = categoryConfig[dataset.category];

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 hover:border-red-300 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white flex-shrink-0">
          <Database className="w-6 h-6" />
        </div>
        <Badge variant={config.variant}>{config.label}</Badge>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
        {dataset.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
        {dataset.description}
      </p>

      {/* Meta */}
      <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-gray-100">
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-0.5">Format</div>
          <div className="text-xs font-bold text-gray-900 uppercase">
            {dataset.format}
          </div>
        </div>
        <div className="text-center border-l border-r border-gray-100">
          <div className="text-xs text-gray-500 mb-0.5">Size</div>
          <div className="text-xs font-bold text-gray-900">
            {dataset.fileSize}
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-0.5">Records</div>
          <div className="text-xs font-bold text-gray-900">
            {dataset.records}
          </div>
        </div>
      </div>

      {/* Applications Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {dataset.applications.slice(0, 3).map((app) => (
          <span
            key={app}
            className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs"
          >
            {app}
          </span>
        ))}
        {dataset.applications.length > 3 && (
          <span className="inline-block px-2 py-0.5 text-gray-500 text-xs">
            +{dataset.applications.length - 3} more
          </span>
        )}
      </div>

      {/* Download */}
      <a
        href={dataset.downloadUrl}
        download
        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        Download Dataset
      </a>
    </div>
  );
}
