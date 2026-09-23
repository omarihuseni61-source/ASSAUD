import type { Metadata } from 'next';
import {
  Check,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Handshake,
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Icon } from '@/components/common/Icon';
import membershipDataRaw from '@/data/community/membership.json';
import type { MembershipData } from '@/types/community';

const membershipData = membershipDataRaw as MembershipData;

export const metadata: Metadata = {
  title: 'Membership',
  description: 'Join ASAUD and unlock study materials, events, mentorship, and more.',
};

export default function MembershipPage() {
  const stats = [
    { label: 'Total Members', value: membershipData.statistics.totalMembers, icon: Users, color: 'text-blue-600' },
    { label: 'Active Members', value: membershipData.statistics.activeMembers, icon: TrendingUp, color: 'text-green-600' },
    { label: 'Alumni', value: membershipData.statistics.graduatedMembers, icon: Award, color: 'text-purple-600' },
    { label: 'Partners', value: membershipData.statistics.partners, icon: Handshake, color: 'text-orange-600' },
  ];

  return (
    <>
      <PageHeader
        badge="Join Us"
        title="ASAUD Membership"
        description={membershipData.overview}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Community', href: '/community' },
          { label: 'Membership', href: '/community/membership' },
        ]}
      />

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Member Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join ASAUD?
            </h2>
            <p className="text-lg text-gray-600">
              Six powerful benefits that accelerate your academic and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipData.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon name={benefit.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
              Membership Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipData.categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-gradient-to-b from-blue-50 to-white rounded-2xl border border-blue-100 p-7 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{cat.name}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                    {cat.price}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                <div className="mb-5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Eligibility
                  </div>
                  <ul className="space-y-1.5">
                    {cat.eligibility.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Benefits
                  </div>
                  <ul className="space-y-1.5">
                    {cat.benefits.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
              How to Join
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {membershipData.joinSteps.map((step) => (
              <div
                key={step.step}
                className="text-center bg-white rounded-2xl border border-gray-200 p-6"
              >
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={membershipData.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              Register Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}