import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Users,
  Calendar,
  Mail,
  Target,
  Wrench,
  Lightbulb,
  FileText,
  Presentation,
  Code,
  Monitor,
  ExternalLink,
} from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import projectsDataRaw from '@/data/dataProjects/studentProjects.json';
import type { StudentProject, Deliverable } from '@/types/dataProjects';

const projectsData = projectsDataRaw as { projects: StudentProject[] };

const deliverableConfig: Record<
  Deliverable['type'],
  { icon: any; label: string; color: string }
> = {
  report: { icon: FileText, label: 'Report', color: 'bg-red-100 text-red-700' },
  presentation: { icon: Presentation, label: 'Slides', color: 'bg-purple-100 text-purple-700' },
  code: { icon: Code, label: 'Code', color: 'bg-green-100 text-green-700' },
  demo: { icon: Monitor, label: 'Demo', color: 'bg-orange-100 text-orange-700' },
};

interface PageProps {
  params: Promise<{ projectId: string }>;
}

export async function generateStaticParams() {
  return projectsData.projects.map((p) => ({ projectId: p.id }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { projectId } = await params;
  const project = projectsData.projects.find((p) => p.id === projectId);

  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-red-200 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/data-projects" className="hover:text-white">Data & Projects</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/data-projects/student-projects" className="hover:text-white">Student Projects</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{project.title.substring(0, 30)}...</span>
          </nav>

          <Badge variant="maroon" className="mb-5">{project.category}</Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-red-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {project.academicYear}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {project.team.length} {project.team.length === 1 ? 'member' : 'members'}
            </span>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-red-100 to-red-200 shadow-lg">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Overview</h2>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Problem */}
              <div className="bg-orange-50 rounded-2xl border border-orange-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Problem Statement</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.problemStatement}</p>
              </div>

              {/* Objectives */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Objectives</h2>
                <ul className="space-y-2.5">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Methodology */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Methodology</h2>
                <p className="text-gray-700 leading-relaxed">{project.methodology}</p>
              </div>

              {/* Findings */}
              <div className="bg-green-50 rounded-2xl border border-green-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Key Findings</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.findings}</p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Team */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4 text-red-600" />
                  Project Team
                </h3>
                <div className="space-y-4">
                  {project.team.map((member, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {member.name.split(' ').map((n) => n[0]).join('').substring(0, 2)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 text-sm">
                          {member.name}
                        </div>
                        <div className="text-xs text-red-600">{member.role}</div>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-xs text-gray-500 hover:text-blue-600 truncate flex items-center gap-1 mt-0.5"
                        >
                          <Mail className="w-3 h-3" />
                          Email
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-green-600" />
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="inline-block px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-md text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-600" />
                  Deliverables
                </h3>
                <div className="space-y-2">
                  {project.deliverables.map((d, i) => {
                    const config = deliverableConfig[d.type];
                    const Icon = config.icon;
                    return (
                      <a
                        key={i}
                        href={d.url}
                        target={d.url.startsWith('http') ? '_blank' : undefined}
                        rel={d.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all group"
                      >
                        <div className={`w-9 h-9 rounded-lg ${config.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-900">
                            {config.label}
                          </div>
                        </div>
                        {d.url.startsWith('http') ? (
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                        ) : (
                          <FileText className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
