'use client';

import { useState, useMemo } from 'react';
import { Database, Search } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SearchBar } from '@/components/common/SearchBar';
import { EmptyState } from '@/components/common/EmptyState';
import { DatasetCard } from '@/components/dataProjects/DatasetCard';
import { DatasetFilters } from '@/components/dataProjects/DatasetFilters';
import datasetsDataRaw from '@/data/dataProjects/datasets.json';
import type { Dataset, DatasetCategory } from '@/types/dataProjects';

const datasetsData = datasetsDataRaw as { datasets: Dataset[] };

export default function DataHubPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<DatasetCategory | 'all'>('all');

  const filteredDatasets = useMemo(() => {
    const q = search.toLowerCase().trim();
    return datasetsData.datasets.filter((d) => {
      const matchesSearch =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.source.toLowerCase().includes(q) ||
        d.applications.some((a) => a.toLowerCase().includes(q));

      const matchesCategory = category === 'all' || d.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const clearFilters = () => {
    setSearch('');
    setCategory('all');
  };

  return (
    <>
      <PageHeader
        badge="Data Hub"
        title="Actuarial Datasets Library"
        description="Practice with real and simulated datasets covering insurance, mortality, financial, and demographic areas."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Data & Projects', href: '/data-projects' },
          { label: 'Data Hub', href: '/data-projects/data-hub' },
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
                placeholder="Search datasets by name, source, or use case..."
              />
            </div>
            <DatasetFilters
              activeCategory={category}
              setActiveCategory={setCategory}
            />
            <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Database className="w-4 h-4 text-gray-400" />
                <span>
                  <strong className="text-gray-900">{filteredDatasets.length}</strong>{' '}
                  {filteredDatasets.length === 1 ? 'dataset' : 'datasets'} found
                </span>
              </div>
              {(search || category !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Grid */}
          {filteredDatasets.length === 0 ? (
            <EmptyState
              title="No datasets found"
              message="Try adjusting your search or filters."
              actionLabel="Clear filters"
              onAction={clearFilters}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDatasets.map((dataset) => (
                <DatasetCard key={dataset.id} dataset={dataset} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}