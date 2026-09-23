'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Icon } from '@/components/common/Icon';
import faqsDataRaw from '@/data/about/faqs.json';
import { cn } from '@/lib/utils';
import type { FAQCategory } from '@/types/about';

const faqsData = faqsDataRaw as { categories: FAQCategory[] };

export default function FAQsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = faqsData.categories;
  const visibleCategories =
    activeCategory === 'all'
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <>
      <PageHeader
        badge="Help Center"
        title="Frequently Asked Questions"
        description="Find quick answers to the most common questions about ASAUD, membership, academics, and more."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'FAQs', href: '/about/faqs' },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              All Questions
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* FAQ Categories */}
          <div className="space-y-10">
            {visibleCategories.map((category) => (
              <div key={category.id}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name={category.icon} className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.faqs.map((faq) => {
                    const isOpen = openId === faq.id;
                    return (
                      <div
                        key={faq.id}
                        className={cn(
                          'bg-white rounded-xl border transition-all',
                          isOpen
                            ? 'border-blue-300 shadow-md'
                            : 'border-gray-200 hover:border-blue-200'
                        )}
                      >
                        <button
                          onClick={() => setOpenId(isOpen ? null : faq.id)}
                          className="w-full flex items-center justify-between gap-4 p-5 text-left"
                        >
                          <span className="font-semibold text-gray-900 text-sm md:text-base">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={cn(
                              'w-5 h-5 text-gray-400 flex-shrink-0 transition-transform',
                              isOpen && 'rotate-180 text-blue-600'
                            )}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">
                              {faq.answer}
                            </p>
                            {faq.relatedLinks.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {faq.relatedLinks.map((link) => (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg hover:bg-blue-100 transition-colors"
                                  >
                                    {link.label}
                                    <ArrowRight className="w-3 h-3" />
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still need help */}
          <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <Link
              href="/about/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}