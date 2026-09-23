import type { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { Icon } from '@/components/common/Icon';
import historyDataRaw from '@/data/about/history.json';
import type { History } from '@/types/about';

const historyData = historyDataRaw as History;

export const metadata: Metadata = {
  title: 'Our History',
  description: 'The story of ASAUD - from 15 founding members in 2015 to over 500 today.',
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        badge="Our Journey"
        title="The History of ASAUD"
        description={historyData.background}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'History', href: '/about/history' },
        ]}
      />

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {historyData.overview}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Milestones
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through the Years
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-200 -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {historyData.timeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:direction-rtl'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100 z-10" />

                  {/* Content Card */}
                  <div
                    className={`bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:col-start-2 md:ml-8'
                    } ${
                      event.highlight
                        ? 'border-l-4 border-l-blue-500'
                        : ''
                    }`}
                  >
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-3">
                      {event.year}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
              Achievements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Milestones We're Proud Of
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {historyData.achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-7 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon name={achievement.icon} className="w-7 h-7" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {achievement.title}
                </div>
                <p className="text-xs text-gray-600 mb-2">{achievement.description}</p>
                <span className="inline-block text-xs font-semibold text-green-600">
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}