import { Icon } from '@/components/common/Icon';
import type { CoreValue } from '@/types/about';

interface CoreValuesProps {
  values: CoreValue[];
}

export function CoreValues({ values }: CoreValuesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
            Core Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Principles That Guide Us
          </h2>
          <p className="text-lg text-gray-600">
            Values that shape our culture, decisions, and community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Icon name={value.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">
                {value.value}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}