import { Icon } from '@/components/common/Icon';
import type { Objective } from '@/types/about';

interface ObjectivesProps {
  objectives: Objective[];
}

export function Objectives({ objectives }: ObjectivesProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-4">
            Our Objectives
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Aim to Achieve
          </h2>
          <p className="text-lg text-gray-600">
            Six core objectives that guide everything we do at ASAUD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                <Icon name={objective.icon} className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {objective.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
