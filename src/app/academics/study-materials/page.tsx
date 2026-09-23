'use client';

import { useMemo, useState } from 'react';
import { BookOpen, Filter } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SearchBar } from '@/components/common/SearchBar';
import { EmptyState } from '@/components/common/EmptyState';
import { CourseCard } from '@/components/academics/CourseCard';
import coursesDataRaw from '@/data/academics/courses.json';
import materialsDataRaw from '@/data/academics/studyMaterials.json';
import { cn } from '@/lib/utils';
import type { Course, StudyMaterial } from '@/types/academics';

const coursesData = coursesDataRaw as { courses: Course[] };
const materialsData = materialsDataRaw as { materials: StudyMaterial[] };

export default function StudyMaterialsPage() {
  const [search, setSearch] = useState('');
  const [year, setYear] = useState<number | 'all'>('all');
  const [semester, setSemester] = useState<number | 'all'>('all');

  const courses = coursesData.courses;
  const materials = materialsData.materials;

  // Filter courses
  const filteredCourses = useMemo(() => {
    const q = search.toLowerCase().trim();
    return courses.filter((course) => {
      const matchesSearch =
        !q ||
        course.name.toLowerCase().includes(q) ||
        course.code.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.lecturer.toLowerCase().includes(q);

      const matchesYear = year === 'all' || course.level === year;
      const matchesSemester = semester === 'all' || course.semester === semester;

      return matchesSearch && matchesYear && matchesSemester;
    });
  }, [courses, search, year, semester]);

  // Count materials per course
  const materialCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    materials.forEach((m) => {
      counts[m.courseId] = m.resources.length;
    });
    return counts;
  }, [materials]);

  const clearFilters = () => {
    setSearch('');
    setYear('all');
    setSemester('all');
  };

  const hasActiveFilters = search || year !== 'all' || semester !== 'all';

  return (
    <>
      <PageHeader
        badge="Study Materials"
        title="Your Complete Resource Library"
        description="Access lecture slides, tutorials, past papers, and quizzes for every Actuarial Science course."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Study Materials', href: '/academics/study-materials' },
        ]}
      />

      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Search + Filters */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Search */}
              <div className="lg:col-span-6">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Search
                </label>
                <SearchBar
                  value={search}
                  onChange={setSearch}
                  placeholder="Search by course name, code, or lecturer..."
                />
              </div>

              {/* Year Filter */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Year
                </label>
                <select
                  value={year}
                  onChange={(e) =>
                    setYear(e.target.value === 'all' ? 'all' : Number(e.target.value))
                  }
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="all">All Years</option>
                  <option value={1}>Year 1</option>
                  <option value={2}>Year 2</option>
                  <option value={3}>Year 3</option>
                  <option value={4}>Year 4</option>
                </select>
              </div>

              {/* Semester Filter */}
              <div className="lg:col-span-3">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Semester
                </label>
                <select
                  value={semester}
                  onChange={(e) =>
                    setSemester(
                      e.target.value === 'all' ? 'all' : Number(e.target.value)
                    )
                  }
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="all">All Semesters</option>
                  <option value={1}>Semester 1</option>
                  <option value={2}>Semester 2</option>
                </select>
              </div>
            </div>

            {/* Filter Summary */}
            <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Filter className="w-4 h-4 text-gray-400" />
                <span>
                  Showing <strong className="text-gray-900">{filteredCourses.length}</strong>{' '}
                  {filteredCourses.length === 1 ? 'course' : 'courses'}
                  {hasActiveFilters && ' matching your filters'}
                </span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length === 0 ? (
            <EmptyState
              title="No courses found"
              message="Try adjusting your search or filters to find the course you're looking for."
              actionLabel="Clear filters"
              onAction={clearFilters}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  materialCount={materialCounts[course.id]}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}