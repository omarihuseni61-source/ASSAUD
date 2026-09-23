import Image from 'next/image';
import Link from 'next/link';
import { Users, Calendar, ArrowRight, Folder } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import type { StudentProject } from '@/types/dataProjects';

interface ProjectCardProps {
  project: StudentProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/data-projects/student-projects/${project.id}`}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge variant="blue">{project.category}</Badge>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs">
          <Calendar className="w-3.5 h-3.5" />
          {project.academicYear}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Team */}
        <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
          <Users className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">
            {project.team.map((t) => t.name).join(', ')}
          </span>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.toolsUsed.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium"
            >
              {tool}
            </span>
          ))}
          {project.toolsUsed.length > 4 && (
            <span className="inline-block px-2 py-0.5 text-gray-500 text-xs">
              +{project.toolsUsed.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Folder className="w-3.5 h-3.5" />
            {project.deliverables.length} deliverables
          </div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
            View
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}