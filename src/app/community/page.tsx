import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, UserCheck, Award, Handshake, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Community',
  description: 'Meet the people, achievements, and partnerships behind ASAUD.',
};

const sections = [
  {
    icon: Users,
    title: 'Leadership',
    description: 'Meet the current executive team leading ASAUD.',
    href: '/community/leadership',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
  },
  {
    icon: UserCheck,
    title: 'Membership',
    description: 'Learn how to join and the benefits of being a member.',
    href: '/community/membership',
    color: 'from-green-500 to-green-700',
    bg: 'bg-green-50',
    text: 'text-green-600',
  },
  {
    icon: Award,
    title: 'Awards & Recognition',
    description: 'Celebrate student achievements and recognition.',
    href: '/community/awards',
    color: 'from-yellow-500 to-yellow-700',
    bg: 'bg-yellow-50',
    text: 'text-yellow-600',
  },
  {
    icon: Handshake,
    title: 'Partners',
    description: 'Discover our industry and institutional partners.',
    href: '/community/partners',
    color: 'from-purple-500 to-purple-700',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
  },
];

export default function CommunityPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full mb-5">
            Our Community
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
            ASAUD Community
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            The people, achievements, and partnerships that make ASAUD what it is.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
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