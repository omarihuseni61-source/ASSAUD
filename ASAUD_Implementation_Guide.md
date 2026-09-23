# ASAUD Website - Implementation Guide & Best Practices

Complete implementation guide with code examples, best practices, and setup instructions.

---

## 1. PROJECT SETUP

### 1.1 Initialize Next.js Project

```bash
# Create new Next.js project with TypeScript and Tailwind
npx create-next-app@latest asaud-website \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-git

# Navigate to project
cd asaud-website

# Install additional dependencies
npm install lucide-react date-fns clsx
npm install --save-dev @types/node
```

### 1.2 Project Structure Setup

```bash
# Create all necessary directories
mkdir -p src/{app,components,data,hooks,lib,types,utils,styles,config}
mkdir -p src/data/{home,about,academics,dataProjects,community,newsEvents,navigation,site}
mkdir -p src/components/{layout,sections,cards,common,forms,filters,carousels,features}
mkdir -p public/{images,documents,downloads,favicons,og-images}
mkdir -p tests/{components,pages,utils}
```

---

## 2. TYPESCRIPT TYPES

### 2.1 Common Types (`/src/types/index.ts`)

```typescript
// Base types used across the application

export interface Metadata {
  id: string;
  createdAt: string;
  updatedAt: string;
  author?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  subItems?: NavItem[];
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  icon?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  office?: {
    building: string;
    room: string;
    campus: string;
  };
}

export interface Person {
  id: string;
  name: string;
  email: string;
  phone?: string;
  bio?: string;
  photo?: string;
  role?: string;
}

export interface Resource {
  type: 'lecture' | 'tutorial' | 'pastpaper' | 'quiz' | 'document';
  title: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
  downloadUrl: string;
  description?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  venue: string;
  type: 'workshop' | 'seminar' | 'conference' | 'networking' | 'competition' | 'training';
  description: string;
  image?: string;
  registrationUrl?: string;
  registrationDeadline?: string;
}

export interface News {
  id: string;
  title: string;
  type: string;
  date: string;
  description: string;
  fullContent?: string;
  image?: string;
  category?: string;
  deadline?: string;
  link?: string;
  featured?: boolean;
}

export interface Partner {
  id: string;
  name: string;
  type: 'corporate' | 'government' | 'educational' | 'ngo';
  description: string;
  logo?: string;
  website?: string;
  collaboration?: string;
  contactEmail?: string;
}

export interface Award {
  id: string;
  title: string;
  recipient: string;
  category: 'academic' | 'competition' | 'scholarship' | 'professional' | 'research' | 'leadership';
  year: number;
  description: string;
  image?: string;
}
```

### 2.2 Academics Types (`/src/types/academics.ts`)

```typescript
import { Resource } from './index';

export interface Course {
  id: string;
  code: string;
  name: string;
  level: number;
  semester: number;
  credits: number;
  lecturer: string;
  email: string;
  description: string;
  objectives: string[];
  prerequisites: string[];
  assessmentMethod: string;
}

export interface StudyMaterial {
  courseId: string;
  courseCode: string;
  courseName: string;
  level: number;
  semester: number;
  lecturer: string;
  resources: Resource[];
}

export interface CareerPathway {
  id: string;
  title: string;
  description: string;
  steps: PathwayStep[];
  resources: ResourceLink[];
}

export interface PathwayStep {
  step: number;
  description: string;
  duration: string;
}

export interface ResourceLink {
  title: string;
  url: string;
}

export interface ProfessionalBody {
  id: string;
  name: string;
  description: string;
  website: string;
  focus: string;
}

export interface CareerField {
  id: string;
  field: string;
  description: string;
  responsibilities: string[];
  salaryRange: string;
}
```

### 2.3 Data Projects Types (`/src/types/dataProjects.ts`)

```typescript
export interface Dataset {
  id: string;
  name: string;
  category: 'insurance' | 'claims' | 'mortality' | 'financial' | 'demographic' | 'simulated';
  description: string;
  variables: Variable[];
  source: string;
  format: 'csv' | 'xlsx' | 'json';
  fileSize: string;
  downloadUrl: string;
  usageExample?: string;
  applications: string[];
}

export interface Variable {
  name: string;
  type: 'string' | 'integer' | 'decimal' | 'date' | 'boolean';
  description: string;
}

export interface StudentProject {
  id: string;
  title: string;
  description: string;
  team: TeamMember[];
  academicYear: string;
  problemStatement: string;
  objectives: string[];
  methodology: string;
  toolsUsed: string[];
  findings: string;
  deliverables: Deliverable[];
  thumbnail?: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  email: string;
}

export interface Deliverable {
  type: 'report' | 'presentation' | 'code' | 'demo';
  url: string;
}
```

---

## 3. UTILITY FUNCTIONS

### 3.1 Formatters (`/src/utils/formatters.ts`)

```typescript
import { format, parseISO } from 'date-fns';

export const formatDate = (dateString: string, formatStr: string = 'MMM dd, yyyy'): string => {
  try {
    return format(parseISO(dateString), formatStr);
  } catch (error) {
    return dateString;
  }
};

export const formatDateTime = (dateString: string): string => {
  return formatDate(dateString, 'MMM dd, yyyy - h:mm a');
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const toTitleCase = (text: string): string => {
  return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};
```

### 3.2 Search Utilities (`/src/utils/searchUtils.ts`)

```typescript
export interface SearchResult<T> {
  item: T;
  score: number;
  highlights: string[];
}

export const searchItems = <T extends Record<string, any>>(
  items: T[],
  query: string,
  searchFields: (keyof T)[]
): SearchResult<T>[] => {
  if (!query.trim()) return items.map(item => ({ item, score: 0, highlights: [] }));

  const lowerQuery = query.toLowerCase();
  const results: SearchResult<T>[] = [];

  items.forEach(item => {
    let score = 0;
    const highlights: string[] = [];

    searchFields.forEach(field => {
      const value = String(item[field] || '').toLowerCase();
      
      if (value.includes(lowerQuery)) {
        score += 1;
        // Exact match scores higher
        if (value === lowerQuery) score += 2;
        
        // Add context around match
        const index = value.indexOf(lowerQuery);
        const start = Math.max(0, index - 20);
        const end = Math.min(value.length, index + lowerQuery.length + 20);
        highlights.push(value.substring(start, end));
      }
    });

    if (score > 0) {
      results.push({ item, score, highlights });
    }
  });

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score);
};

export const getSearchSuggestions = <T extends Record<string, any>>(
  items: T[],
  field: keyof T
): string[] => {
  const suggestions = new Set<string>();
  items.forEach(item => {
    const value = String(item[field] || '');
    suggestions.add(value);
  });
  return Array.from(suggestions).sort();
};
```

### 3.3 Filter Utilities (`/src/utils/filterUtils.ts`)

```typescript
export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export const filterByProperty = <T extends Record<string, any>>(
  items: T[],
  property: keyof T,
  value: any
): T[] => {
  return items.filter(item => item[property] === value);
};

export const filterByMultiple = <T extends Record<string, any>>(
  items: T[],
  filters: Record<keyof T, any>
): T[] => {
  return items.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === null || value === undefined) return true;
      return item[key as keyof T] === value;
    });
  });
};

export const filterByRange = <T extends Record<string, any>>(
  items: T[],
  property: keyof T,
  min: number,
  max: number
): T[] => {
  return items.filter(item => {
    const value = Number(item[property]);
    return value >= min && value <= max;
  });
};

export const filterByDateRange = <T extends Record<string, any>>(
  items: T[],
  property: keyof T,
  startDate: Date,
  endDate: Date
): T[] => {
  return items.filter(item => {
    const itemDate = new Date(item[property] as string);
    return itemDate >= startDate && itemDate <= endDate;
  });
};

export const getFilterOptions = <T extends Record<string, any>>(
  items: T[],
  property: keyof T
): FilterOption[] => {
  const options = new Map<string, number>();
  
  items.forEach(item => {
    const value = String(item[property] || 'Unknown');
    options.set(value, (options.get(value) || 0) + 1);
  });

  return Array.from(options.entries())
    .map(([value, count]) => ({
      value,
      label: value,
      count
    }))
    .sort((a, b) => b.count! - a.count!);
};
```

### 3.4 Download Utilities (`/src/utils/downloadUtils.ts`)

```typescript
export const downloadFile = (url: string, filename: string): void => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadJSON = (data: any, filename: string): void => {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  downloadFile(url, filename || 'data.json');
  URL.revokeObjectURL(url);
};

export const downloadCSV = (data: any[], filename: string): void => {
  if (!data || data.length === 0) return;

  const headers = Object.keys(data[0]);
  const csv = [
    headers.join(','),
    ...data.map(row =>
      headers
        .map(header => {
          const value = row[header];
          return typeof value === 'string' && value.includes(',')
            ? `"${value}"`
            : value;
        })
        .join(',')
    )
  ].join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  downloadFile(url, filename || 'data.csv');
  URL.revokeObjectURL(url);
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
};
```

---

## 4. CUSTOM HOOKS

### 4.1 useSearch Hook (`/src/hooks/useSearch.ts`)

```typescript
'use client';

import { useState, useMemo, useCallback } from 'react';
import { searchItems } from '@/utils/searchUtils';

export interface UseSearchResult<T> {
  results: T[];
  query: string;
  setQuery: (query: string) => void;
  isSearching: boolean;
  totalResults: number;
  clearSearch: () => void;
}

export const useSearch = <T extends Record<string, any>>(
  items: T[],
  searchFields: (keyof T)[]
): UseSearchResult<T> => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return items;
    return searchItems(items, query, searchFields).map(result => result.item);
  }, [query, items, searchFields]);

  const clearSearch = useCallback(() => {
    setQuery('');
  }, []);

  return {
    results,
    query,
    setQuery,
    isSearching: query.length > 0,
    totalResults: results.length,
    clearSearch
  };
};
```

### 4.2 useFilter Hook (`/src/hooks/useFilter.ts`)

```typescript
'use client';

import { useState, useMemo, useCallback } from 'react';
import { filterByMultiple } from '@/utils/filterUtils';

export interface UseFilterResult<T> {
  filtered: T[];
  filters: Record<string, any>;
  setFilter: (key: string, value: any) => void;
  setFilters: (filters: Record<string, any>) => void;
  clearFilters: () => void;
  removeFilter: (key: string) => void;
}

export const useFilter = <T extends Record<string, any>>(
  items: T[]
): UseFilterResult<T> => {
  const [filters, setFilters] = useState<Record<string, any>>({});

  const filtered = useMemo(() => {
    if (Object.keys(filters).length === 0) return items;
    return filterByMultiple(items, filters);
  }, [items, filters]);

  const setFilter = useCallback((key: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  const removeFilter = useCallback((key: string) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  }, []);

  return {
    filtered,
    filters,
    setFilter,
    setFilters: (newFilters) => setFilters(newFilters),
    clearFilters,
    removeFilter
  };
};
```

### 4.3 usePagination Hook (`/src/hooks/usePagination.ts`)

```typescript
'use client';

import { useState, useMemo } from 'react';

export interface UsePaginationResult<T> {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  items: T[];
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  setPageSize: (size: number) => void;
}

export const usePagination = <T extends any>(
  allItems: T[],
  initialPageSize: number = 10
): UsePaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const totalPages = Math.ceil(allItems.length / pageSize);

  const items = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return allItems.slice(startIndex, startIndex + pageSize);
  }, [allItems, currentPage, pageSize]);

  const goToPage = (page: number) => {
    const pageNum = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNum);
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  return {
    currentPage,
    pageSize,
    totalPages,
    items,
    goToPage,
    nextPage,
    prevPage,
    setPageSize: (size: number) => {
      setPageSize(size);
      setCurrentPage(1);
    }
  };
};
```

---

## 5. REUSABLE COMPONENTS

### 5.1 Card Component (`/src/components/cards/CourseCard.tsx`)

```typescript
'use client';

import Link from 'next/link';
import { Badge } from '@/components/common/Badge';
import { Course } from '@/types/academics';

interface CourseCardProps {
  course: Course;
  actionText?: string;
  actionHref?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  actionText = 'View Materials',
  actionHref
}) => {
  const href = actionHref || `/academics/study-materials/${course.id}`;

  return (
    <article className="h-full p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 flex-1">{course.name}</h3>
      </div>

      <p className="text-sm text-gray-600 mb-3">
        Code: <span className="font-mono font-semibold">{course.code}</span>
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="blue">Level {course.level}</Badge>
        <Badge variant="green">Semester {course.semester}</Badge>
        <Badge variant="gray">{course.credits} Credits</Badge>
      </div>

      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{course.description}</p>

      <div className="mb-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-600">
          <span className="font-semibold">Lecturer:</span> {course.lecturer}
        </p>
        <a
          href={`mailto:${course.email}`}
          className="text-xs text-blue-600 hover:underline"
        >
          {course.email}
        </a>
      </div>

      <Link
        href={href}
        className="inline-block mt-auto text-blue-600 hover:text-blue-800 font-medium text-sm"
      >
        {actionText} →
      </Link>
    </article>
  );
};
```

### 5.2 Generic List Component (`/src/components/common/GenericList.tsx`)

```typescript
'use client';

import { useMemo } from 'react';
import { EmptyState } from '@/components/common/EmptyState';
import { Loading } from '@/components/common/Loading';

interface GenericListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string;
  gridCols?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  emptyMessage?: string;
  className?: string;
}

const gridColsMap = {
  sm: 'grid-cols-1',
  md: 'grid-cols-1 md:grid-cols-2',
  lg: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
};

export const GenericList = <T extends any>({
  items,
  renderItem,
  keyExtractor,
  gridCols = 'lg',
  isLoading = false,
  emptyMessage = 'No items found',
  className = ''
}: GenericListProps<T>): React.ReactNode => {
  if (isLoading) {
    return <Loading />;
  }

  if (!items || items.length === 0) {
    return <EmptyState message={emptyMessage} />;
  }

  return (
    <div className={`grid ${gridColsMap[gridCols]} gap-6 ${className}`}>
      {items.map((item, index) => (
        <div key={keyExtractor(item)}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
};
```

### 5.3 Dynamic Content Renderer (`/src/components/common/ContentRenderer.tsx`)

```typescript
'use client';

import { ReactNode } from 'react';

interface ContentRendererProps<T> {
  data: T[];
  children: (item: T, index: number) => ReactNode;
}

/**
 * Generic component for rendering lists of data
 * Usage: <ContentRenderer data={items}>{item => <Card item={item} />}</ContentRenderer>
 */
export const ContentRenderer = <T extends any>({
  data,
  children
}: ContentRendererProps<T>): React.ReactNode => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No content available</p>
      </div>
    );
  }

  return (
    <>
      {data.map((item, index) => (
        <div key={`item-${index}`}>{children(item, index)}</div>
      ))}
    </>
  );
};
```

---

## 6. PAGE IMPLEMENTATION EXAMPLES

### 6.1 Courses List Page (`/src/app/academics/study-materials/page.tsx`)

```typescript
'use client';

import { useState } from 'react';
import coursesData from '@/data/academics/courses.json';
import materialsData from '@/data/academics/studyMaterials.json';
import { CourseCard } from '@/components/cards/CourseCard';
import { SearchBar } from '@/components/common/SearchBar';
import { useSearch } from '@/hooks/useSearch';
import { useFilter } from '@/hooks/useFilter';
import { GenericList } from '@/components/common/GenericList';
import { FilterForm } from '@/components/filters/CourseFilter';

export default function StudyMaterialsPage() {
  const { results, query, setQuery } = useSearch(
    coursesData.courses,
    ['name', 'code', 'description']
  );

  const { filtered, filters, setFilter, clearFilters } = useFilter(coursesData.courses);

  const displayItems = query ? results : filtered;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Study Materials</h1>
        <p className="text-lg text-gray-600">
          Access lecture slides, tutorials, past papers, and quizzes for all courses
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-1">
          <FilterForm
            filters={filters}
            onFilterChange={setFilter}
            onClearFilters={clearFilters}
          />
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search courses by name or code..."
          />

          <GenericList
            items={displayItems}
            renderItem={(course) => (
              <CourseCard course={course} />
            )}
            keyExtractor={(course) => course.id}
            gridCols="md"
            emptyMessage="No courses match your search or filters"
          />
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Study Materials | ASAUD',
  description: 'Access lecture slides, tutorials, and past papers for all actuarial science courses'
};
```

### 6.2 Events List Page (`/src/app/news-events/events/page.tsx`)

```typescript
'use client';

import { useMemo } from 'react';
import eventsData from '@/data/newsEvents/events.json';
import { EventCard } from '@/components/cards/EventCard';
import { useFilter } from '@/hooks/useFilter';
import { GenericList } from '@/components/common/GenericList';
import { EventFilter } from '@/components/filters/EventFilter';

export default function EventsPage() {
  const { filtered, filters, setFilter, clearFilters } = useFilter(eventsData.events);

  // Sort by date
  const sortedEvents = useMemo(() => {
    return [...filtered].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [filtered]);

  // Separate upcoming and past events
  const now = new Date();
  const upcomingEvents = sortedEvents.filter(evt => new Date(evt.date) >= now);
  const pastEvents = sortedEvents.filter(evt => new Date(evt.date) < now);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Events & Workshops</h1>
        <p className="text-lg text-gray-600">
          Join us for industry events, workshops, and networking opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <aside className="lg:col-span-1">
          <EventFilter
            filters={filters}
            onFilterChange={setFilter}
            onClearFilters={clearFilters}
          />
        </aside>

        {/* Events */}
        <div className="lg:col-span-3 space-y-12">
          {upcomingEvents.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
              <GenericList
                items={upcomingEvents}
                renderItem={(event) => (
                  <EventCard event={event} />
                )}
                keyExtractor={(event) => event.id}
                gridCols="md"
              />
            </section>
          )}

          {pastEvents.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Past Events</h2>
              <GenericList
                items={pastEvents}
                renderItem={(event) => (
                  <EventCard event={event} />
                )}
                keyExtractor={(event) => event.id}
                gridCols="md"
              />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Events | ASAUD',
  description: 'Upcoming workshops, seminars, and networking events'
};
```

### 6.3 Dynamic Detail Page (`/src/app/academics/study-materials/[courseId]/page.tsx`)

```typescript
'use client';

import { notFound } from 'next/navigation';
import materialsData from '@/data/academics/studyMaterials.json';
import coursesData from '@/data/academics/courses.json';
import { ResourceCard } from '@/components/cards/ResourceCard';
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav';

interface CourseDetailPageProps {
  params: {
    courseId: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  // Find course materials
  const materials = materialsData.materials.find(
    m => m.courseId === params.courseId
  );

  // Find course info
  const course = coursesData.courses.find(c => c.id === params.courseId);

  if (!materials || !course) {
    notFound();
  }

  // Group resources by type
  const resourcesByType = materials.resources.reduce((acc, resource) => {
    if (!acc[resource.type]) {
      acc[resource.type] = [];
    }
    acc[resource.type].push(resource);
    return acc;
  }, {} as Record<string, typeof materials.resources>);

  const typeLabels: Record<string, string> = {
    lecture: 'Lecture Slides',
    tutorial: 'Tutorials',
    pastpaper: 'Past Papers & Exams',
    quiz: 'Quizzes'
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbNav items={[
        { label: 'Academics', href: '/academics' },
        { label: 'Study Materials', href: '/academics/study-materials' },
        { label: course.name, href: '#' }
      ]} />

      <div className="mt-8 mb-12">
        <h1 className="text-4xl font-bold mb-2">{course.name}</h1>
        <p className="text-lg text-gray-600">{course.code}</p>
        <div className="flex gap-4 mt-4">
          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">
            Level {course.level}
          </span>
          <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded">
            Semester {course.semester}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <p className="text-gray-700 mb-6">{course.description}</p>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Course Objectives</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {course.objectives.map((obj, idx) => (
                <li key={idx}>{obj}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Assessment Method</h3>
            <p className="text-gray-700">{course.assessmentMethod}</p>
          </div>
        </div>

        <aside className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold mb-4">Course Information</h3>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-gray-600">Credits</dt>
              <dd className="font-semibold">{course.credits}</dd>
            </div>
            <div>
              <dt className="text-gray-600">Lecturer</dt>
              <dd className="font-semibold">{course.lecturer}</dd>
            </div>
            <div>
              <dt className="text-gray-600">Email</dt>
              <dd>
                <a href={`mailto:${course.email}`} className="text-blue-600 hover:underline">
                  {course.email}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      {/* Resources by Type */}
      <div className="space-y-12">
        {Object.entries(resourcesByType).map(([type, resources]) => (
          <section key={type}>
            <h2 className="text-2xl font-bold mb-6">{typeLabels[type]}</h2>
            <div className="space-y-4">
              {resources.map(resource => (
                <ResourceCard key={resource.title} resource={resource} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return coursesData.courses.map(course => ({
    courseId: course.id
  }));
}

export const metadata = {
  title: 'Study Materials | ASAUD',
  description: 'Access study materials for this course'
};
```

---

## 7. TAILWIND CSS CONFIGURATION

### `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#0066cc',
          600: '#0052a3',
          700: '#003d7a',
          900: '#001a33',
        },
        secondary: {
          50: '#f0fdf4',
          500: '#00a86b',
          600: '#008c56',
          700: '#006b41',
        },
        accent: {
          50: '#fffbf0',
          500: '#ff9800',
          600: '#e68900',
          700: '#cc7700',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        '3xl': '1.5rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
};
```

---

## 8. DEPLOYMENT CHECKLIST

- [ ] All data files populated with actual content
- [ ] All images optimized and placed in `/public`
- [ ] TypeScript compilation successful (`npm run build`)
- [ ] All pages tested in development mode
- [ ] Responsive design tested on mobile/tablet
- [ ] Links and navigation verified
- [ ] File downloads tested
- [ ] SEO metadata added to all pages
- [ ] Lighthouse score > 90
- [ ] Environment variables configured
- [ ] CI/CD pipeline set up
- [ ] Analytics configured
- [ ] Backup of data folder created

---

## 9. PERFORMANCE OPTIMIZATION TIPS

1. **Image Optimization:** Use Next.js `Image` component
2. **Code Splitting:** Dynamic imports for heavy components
3. **Data Loading:** Use `getStaticProps` for SSG
4. **Caching:** Configure ISR (Incremental Static Regeneration)
5. **Compression:** Enable Gzip compression on server
6. **CDN:** Use Vercel's global CDN
7. **Lazy Loading:** Implement intersection observer for sections
8. **Bundle Analysis:** Use `@next/bundle-analyzer`

---

## 10. MAINTENANCE & UPDATES

### Regular Tasks
- Update study materials each semester
- Add new events as they're planned
- Review and update career information
- Monitor broken links
- Update partner information
- Archive past events

### Content Update Process
1. Modify JSON data files
2. Commit changes to Git
3. Push to main branch
4. Automatic deployment to production
5. Verify changes live

This implementation guide ensures a scalable, maintainable, and professional ASAUD website!
