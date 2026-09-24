import type { Metadata } from 'next';
import {
  Clock,
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Icon } from '@/components/common/Icon';
import programDataRaw from '@/data/academics/programInfo.json';
import type { ProgramInfo } from '@/types/academics';

const program = programDataRaw as ProgramInfo;

export const metadata: Metadata = {
  title: 'Actuarial Science at UDSM',
  description:
    'Explore the 4-year BSc. Actuarial Science programme at the University of Dar es Salaam.',
};

export default function ActuarialSciencePage() {
  return (
    <>
      <PageHeader
        badge="Programme Overview"
        title={program.programInfo.name}
        description={program.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Actuarial Science at UDSM', href: '/academics/actuarial-science' },
        ]}
      />

      {/* Quick Facts */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Clock, label: 'Duration', value: program.programInfo.duration },
              { icon: GraduationCap, label: 'Degree', value: program.programInfo.degree },
              { icon: BookOpen, label: 'Faculty', value: program.programInfo.faculty },
              { icon: Award, label: 'University', value: 'UDSM' },
            ].map((fact, i) => {
              const IconComp = fact.icon;
              return (
                <div
                  key={i}
                  className="text-center p-5 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <IconComp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {fact.label}
                  </div>
                  <div className="text-sm font-bold text-gray-900">
                    {fact.value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programme Structure */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Programme Structure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your 4-Year Journey
            </h2>
            <p className="text-lg text-gray-600">
              A structured progression from foundations to advanced actuarial
              practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {program.structure.years.map((year) => (
              <div
                key={year.year}
                className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      {year.year}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                        Year {year.year}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {year.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {year.description}
                </p>

                <div className="mb-5 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="text-xs font-semibold text-blue-700 mb-0.5">
                    Focus Area
                  </div>
                  <div className="text-sm text-gray-700">{year.focus}</div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Sample Courses
                  </div>
                  <div className="space-y-2">
                    {year.courses.slice(0, 5).map((course) => (
                      <div
                        key={course.code}
                        className="flex items-center justify-between text-sm"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-mono text-xs text-blue-600 font-bold flex-shrink-0">
                            {course.code}
                          </span>
                          <span className="text-gray-700 truncate">
                            {course.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                          {course.credits}cr
                        </span>
                      </div>
                    ))}
                    {year.courses.length > 5 && (
                      <div className="text-xs text-blue-600 font-medium pt-2">
                        + {year.courses.length - 5} more courses
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Progression */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Progression Requirements
                </h2>
              </div>
              <div className="space-y-4">
                {program.progressionRequirements.map((req, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-orange-50 to-white border border-orange-100 rounded-xl p-5"
                  >
                    <div className="font-semibold text-gray-900 mb-1">
                      {req.level}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {req.requirement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Graduation */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Graduation Requirements
                </h2>
              </div>
              <div className="space-y-4">
                {program.graduationRequirements.map((req, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-green-50 to-white border border-green-100 rounded-xl p-5 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {req.requirement}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {req.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
              Skills You'll Develop
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Master
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {program.skillsDeveloped.map((skill, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{skill.skill}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
