'use client';

import { useState, useMemo } from 'react';
import { FolderGit2, Search } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SearchBar } from '@/components/common/SearchBar';
import { EmptyState } from '@/components/common/EmptyState';
import { ProjectCard } from '@/components/dataProjects/ProjectCard';
import projectsDataRaw from '@/data/dataProjects/studentProjects.json';
import { cn } from '@/lib/utils';
import type { StudentProject } from '@/types/dataProjects';

const projectsData = projectsDataRaw as { projects: StudentProject[] };

export default function StudentProjectsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(projectsData.projects.map((p) => p.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    const q = search.toLowerCase().trim();
    return projectsData.projects.filter((p) => {
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.toolsUsed.some((t) => t.toLowerCase().includes(q)) ||
        p.team.some((t) => t.name.toLowerCase().includes(q));

      const matchesCategory = category === 'all' || p.category === category;

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
        badge="Innovation Showcase"
        title="Student Projects"
        description="Discover innovative actuarial projects developed by ASAUD students — complete with reports, presentations, and code."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Data & Projects', href: '/data-projects' },
          { label: 'Student Projects', href: '/data-projects/student-projects' },
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
                placeholder="Search projects by title, tool, or team member..."
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    category === cat
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  {cat === 'all' ? 'All Projects' : cat}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FolderGit2 className="w-4 h-4 text-gray-400" />
                <span>
                  <strong className="text-gray-900">{filteredProjects.length}</strong>{' '}
                  {filteredProjects.length === 1 ? 'project' : 'projects'}
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
          {filteredProjects.length === 0 ? (
            <EmptyState
              title="No projects found"
              message="Try adjusting your search or filters."
              actionLabel="Clear filters"
              onAction={clearFilters}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}