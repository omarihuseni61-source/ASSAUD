import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import footerDataRaw from '@/data/navigation/footerLinks.json';
import siteConfigRaw from '@/data/site/config.json';
import { socialIcons } from '@/components/common/SocialIcons';
import type { FooterSection, SiteConfig } from '@/types/common';


const footerData = footerDataRaw as { sections: FooterSection[] };
const siteConfig = siteConfigRaw as SiteConfig;

export function Footer() {
  const sections = footerData.sections;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div>
                <div className="font-bold text-xl text-white leading-none">
                  {siteConfig.siteName}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  University of Dar es Salaam
                </div>
              </div>
            </Link>

            <p className="text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            {/* Contact Info */}
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>University of Dar es Salaam, Tanzania</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {(Object.entries(siteConfig.socialLinks) as [string, string][]).map(
                ([platform, url]) => {
                  const Icon = socialIcons[platform];
                  if (!Icon) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={platform}
                      className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                }
              )}
            </div>
          </div>

          {/* Link Columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {year} {siteConfig.fullName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/about/constitution"
                className="hover:text-white transition-colors"
              >
                Constitution
              </Link>
              <Link
                href="/about/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/about/faqs"
                className="hover:text-white transition-colors"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}