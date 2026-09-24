import Link from 'next/link';
import { ArrowRight, User } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import type { Course } from '@/types/academics';

interface CourseCardProps {
  course: Course;
  materialCount?: number;
}

export function CourseCard({ course, materialCount }: CourseCardProps) {
  return (
    <Link
      href={`/academics/study-materials/${course.id}`}
      className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 hover:border-red-300 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="inline-flex items-center px-2.5 py-1 bg-red-50 text-red-700 rounded-lg text-xs font-mono font-bold">
          {course.code}
        </div>
        <div className="flex gap-1.5">
          <Badge variant="maroon">Y{course.level}</Badge>
          <Badge variant="green">S{course.semester}</Badge>
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
        {course.name}
      </h3>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
        {course.description}
      </p>

      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <User className="w-3.5 h-3.5" />
        <span className="truncate">{course.lecturer}</span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">
          {course.credits} Credits
        </span>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
          {materialCount !== undefined && (
            <span className="text-xs text-gray-400 font-normal">
              {materialCount} files
            </span>
          )}
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
