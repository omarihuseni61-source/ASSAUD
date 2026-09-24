import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { MembershipScope as MembershipScopeType } from '@/types/about';

interface MembershipScopeProps {
  data: MembershipScopeType;
}

export function MembershipScope({ data }: MembershipScopeProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
            Membership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {data.categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {category.description}
              </p>
              <div className="flex items-start gap-2 text-xs text-gray-500 border-t border-gray-100 pt-4">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{category.eligibility}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/community/membership"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl"
          >
            Learn More About Membership
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
