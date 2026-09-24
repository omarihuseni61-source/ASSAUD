import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Compass,
  ExternalLink,
  Globe2,
  ArrowRight,
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Icon } from '@/components/common/Icon';
import { Badge } from '@/components/common/Badge';
import careerDataRaw from '@/data/academics/careerPathways.json';
import type { CareerPathwaysData } from '@/types/academics';

const careerData = careerDataRaw as CareerPathwaysData;

export const metadata: Metadata = {
  title: 'Career Pathways',
  description:
    'Learn how to become a professional actuary — qualification routes, professional bodies, and career fields.',
};

export default function CareerPathwaysPage() {
  return (
    <>
      <PageHeader
        badge="Career Development"
        title="Your Path to Becoming an Actuary"
        description="From university studies to professional designation — everything you need to know about building a career in actuarial science."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Career Pathways', href: '/academics/career-pathways' },
        ]}
      />

      {/* Qualification Path */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-4">
              Qualification Route
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {careerData.pathways[0].title}
            </h2>
            <p className="text-lg text-gray-600">
              {careerData.pathways[0].description}
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-red-100 -translate-x-1/2" />

            <div className="space-y-8">
              {careerData.pathways[0].steps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
                >
                  {/* Number Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center font-bold ring-4 ring-white shadow-lg z-10">
                    {step.step}
                  </div>

                  {/* Card */}
                  <div
                    className={`bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all ml-20 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:col-start-2 md:ml-8'
                    }`}
                  >
                    <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold mb-3">
                      {step.duration}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Bodies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
              Professional Bodies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Organizations to Join
            </h2>
            <p className="text-lg text-gray-600">
              The key professional bodies that recognize and support actuaries
              worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerData.professionalBodies.map((body) => (
              <a
                key={body.id}
                href={body.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {body.acronym.substring(0, 2)}
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {body.acronym}
                  </h3>
                  <Badge variant="purple">{body.region}</Badge>
                </div>

                <div className="text-sm font-semibold text-gray-700 mb-2">
                  {body.name}
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {body.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Focus
                  </div>
                  <div className="text-sm text-gray-700">{body.focus}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Career Fields */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
              Career Fields
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Actuaries Work
            </h2>
            <p className="text-lg text-gray-600">
              Diverse career paths available to qualified actuaries across
              industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {careerData.careerFields.map((field) => (
              <div
                key={field.id}
                className="group bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 hover:border-red-300 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon name={field.icon} className="w-6 h-6" />
                  </div>
                  <Badge
                    variant={
                      field.demand === 'High'
                        ? 'green'
                        : field.demand === 'Growing'
                        ? 'maroon'
                        : 'gray'
                    }
                  >
                    {field.demand}
                  </Badge>
                </div>

                <h3 className="font-bold text-gray-900 mb-2">
                  {field.field}
                </h3>

                <p className="text-xs text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {field.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Key Tasks
                  </div>
                  <ul className="space-y-1">
                    {field.responsibilities.slice(0, 3).map((r, i) => (
                      <li
                        key={i}
                        className="text-xs text-gray-600 flex items-start gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                        <span className="truncate">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Compass className="w-14 h-14 text-white mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            Access study materials, connect with mentors, and join events that
            will accelerate your path to becoming a professional actuary.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/academics/study-materials"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-red-50 transition-all shadow-lg hover:shadow-xl"
            >
              Browse Study Materials
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/community/membership"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
            >
              Join ASAUD
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
