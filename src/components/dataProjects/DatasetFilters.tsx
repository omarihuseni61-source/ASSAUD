'use client';

import { Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DatasetCategory } from '@/types/dataProjects';

const categories: { value: DatasetCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Datasets' },
  { value: 'mortality', label: 'Mortality' },
  { value: 'claims', label: 'Claims' },
  { value: 'financial', label: 'Financial' },
  { value: 'demographic', label: 'Demographic' },
  { value: 'simulated', label: 'Simulated' },
];

interface DatasetFiltersProps {
  activeCategory: DatasetCategory | 'all';
  setActiveCategory: (cat: DatasetCategory | 'all') => void;
}

export function DatasetFilters({
  activeCategory,
  setActiveCategory,
}: DatasetFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-1.5 text-sm text-gray-500 mr-2">
        <Filter className="w-4 h-4" />
        <span className="font-medium">Filter:</span>
      </div>
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setActiveCategory(cat.value)}
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
            activeCategory === cat.value
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-red-300 hover:text-red-600'
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
