import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight,
  User,
  Mail,
  Award,
  Target,
  FileText,
} from 'lucide-react';
import { ResourceCard } from '@/components/academics/ResourceCard';
import { Badge } from '@/components/common/Badge';
import coursesDataRaw from '@/data/academics/courses.json';
import materialsDataRaw from '@/data/academics/studyMaterials.json';
import type {
  Course,
  MaterialResource,
  MaterialType,
  StudyMaterial,
} from '@/types/academics';

const coursesData = coursesDataRaw as { courses: Course[] };
const materialsData = materialsDataRaw as { materials: StudyMaterial[] };

const typeLabels: Record<MaterialType, string> = {
  lecture: 'Lecture Slides',
  tutorial: 'Tutorials',
  pastpaper: 'Past Papers & Exams',
  quiz: 'Quizzes',
};

const typeOrder: MaterialType[] = ['lecture', 'tutorial', 'pastpaper', 'quiz'];

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export async function generateStaticParams() {
  return coursesData.courses.map((course) => ({
    courseId: course.id,
  }));
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { courseId } = await params;

  const course = coursesData.courses.find((c) => c.id === courseId);
  const materials = materialsData.materials.find((m) => m.courseId === courseId);

  if (!course) {
    notFound();
  }

  // Group resources by type
  const resourcesByType = (materials?.resources || []).reduce(
    (acc, resource) => {
      if (!acc[resource.type]) acc[resource.type] = [];
      acc[resource.type].push(resource);
      return acc;
    },
    {} as Record<MaterialType, MaterialResource[]>
  );

  const totalResources = materials?.resources.length || 0;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-red-200 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/academics"
              className="hover:text-white transition-colors"
            >
              Academics
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/academics/study-materials"
              className="hover:text-white transition-colors"
            >
              Study Materials
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{course.code}</span>
          </nav>

          <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg text-sm font-mono font-bold mb-5">
            {course.code}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
            {course.name}
          </h1>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs font-semibold">
              Year {course.level}
            </span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs font-semibold">
              Semester {course.semester}
            </span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs font-semibold">
              {course.credits} Credits
            </span>
          </div>

          <p className="text-lg text-red-100 max-w-3xl leading-relaxed">
            {course.description}
          </p>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Objectives */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Course Objectives
                  </h2>
                </div>
                <ul className="space-y-2.5">
                  {course.objectives.map((obj, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Assessment Method
                  </h2>
                </div>
                <p className="text-sm text-gray-700">
                  {course.assessmentMethod}
                </p>
              </div>
            </div>

            {/* Right: Info */}
            <aside className="space-y-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4">
                  Course Information
                </h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Course Code
                    </dt>
                    <dd className="font-mono font-semibold text-gray-900">
                      {course.code}
                    </dd>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Credits
                    </dt>
                    <dd className="font-semibold text-gray-900">
                      {course.credits} Credits
                    </dd>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Year / Semester
                    </dt>
                    <dd className="font-semibold text-gray-900">
                      Year {course.level} • Semester {course.semester}
                    </dd>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Lecturer
                    </dt>
                    <dd className="flex items-center gap-2 font-semibold text-gray-900">
                      <User className="w-4 h-4 text-gray-400" />
                      {course.lecturer}
                    </dd>
                    <dd className="flex items-center gap-2 text-blue-600 hover:underline mt-1.5">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${course.email}`} className="text-xs">
                        {course.email}
                      </a>
                    </dd>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Available Resources
                    </dt>
                    <dd className="flex items-center gap-2 font-semibold text-gray-900">
                      <FileText className="w-4 h-4 text-gray-400" />
                      {totalResources} files
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Resources by Type */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Study Materials
            </h2>
            <p className="text-gray-600">
              Download lecture slides, tutorials, past papers, and quizzes.
            </p>
          </div>

          {totalResources === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
              <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">
                No materials available yet
              </h3>
              <p className="text-sm text-gray-600">
                Materials for this course will be added soon.
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {typeOrder.map((type) => {
                const resources = resourcesByType[type];
                if (!resources || resources.length === 0) return null;

                return (
                  <div key={type}>
                    <div className="flex items-center gap-3 mb-5">
                      <h3 className="text-xl font-bold text-gray-900">
                        {typeLabels[type]}
                      </h3>
                      <Badge variant="maroon">{resources.length}</Badge>
                    </div>
                    <div className="space-y-3">
                      {resources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
