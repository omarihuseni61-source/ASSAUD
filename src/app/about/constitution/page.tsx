import type { Metadata } from 'next';
import { Download, FileText, Calendar, ScrollText } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { formatDate } from '@/utils/formatters';
import constitutionDataRaw from '@/data/about/constitution.json';
import type { Constitution } from '@/types/about';

const constitution = constitutionDataRaw as Constitution;

export const metadata: Metadata = {
  title: 'Constitution',
  description:
    'The official constitution of ASAUD - governance, membership, and operations.',
};

export default function ConstitutionPage() {
  return (
    <>
      <PageHeader
        badge="Governance"
        title="ASAUD Constitution"
        description={constitution.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Constitution', href: '/about/constitution' },
        ]}
      />

      {/* Meta + Download */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Official Constitution Document
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Updated {formatDate(constitution.lastUpdated)}
                  </span>
                  <span>Version {constitution.version}</span>
                </div>
              </div>
            </div>
            <a
              href={constitution.documentUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex-shrink-0"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Contents Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Constitution Chapters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The full constitution is available in the PDF above. Below is a
              summary of the key chapters.
            </p>
          </div>

          <div className="space-y-6">
            {constitution.chapters.map((chapter) => (
              <div
                key={chapter.number}
                className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                    {chapter.number}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      Chapter {chapter.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {chapter.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {chapter.sections.map((section, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <ScrollText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{section}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}