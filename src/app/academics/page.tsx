import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Compass,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Academics',
  description:
    'Explore the Actuarial Science programme at UDSM, access study materials, and discover career pathways.',
};

const sections = [
  {
    icon: GraduationCap,
    title: 'Actuarial Science at UDSM',
    description:
      'Learn about the 4-year programme, its structure, courses by year, and requirements.',
    href: '/academics/actuarial-science',
    color: 'from-red-500 to-red-700',
    bg: 'bg-red-50',
    text: 'text-red-600',
  },
  {
    icon: BookOpen,
    title: 'Study Materials',
    description:
      'Access lecture slides, tutorials, past papers, and quizzes for all courses.',
    href: '/academics/study-materials',
    color: 'from-green-500 to-green-700',
    bg: 'bg-green-50',
    text: 'text-green-600',
  },
  {
    icon: Compass,
    title: 'Career Pathways',
    description:
      'Discover how to become a professional actuary and explore career fields.',
    href: '/academics/career-pathways',
    color: 'from-purple-500 to-purple-700',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
  },
];

export default function AcademicsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full mb-5">
            Educational Hub
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
            Academics at ASAUD
          </h1>
          <p className="text-lg md:text-xl text-red-100 max-w-3xl leading-relaxed">
            Your complete academic companion — programme details, study
            resources, and guidance toward a professional actuarial career.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${section.color} opacity-5 rounded-full -mr-10 -mt-10 group-hover:opacity-10 group-hover:scale-110 transition-all`}
                  />
                  <div
                    className={`w-14 h-14 rounded-xl ${section.bg} ${section.text} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  <div
                    className={`flex items-center gap-1.5 text-sm font-semibold ${section.text} group-hover:gap-2.5 transition-all`}
                  >
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
