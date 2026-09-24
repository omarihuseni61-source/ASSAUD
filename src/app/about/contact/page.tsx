import type { Metadata } from 'next';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { socialIcons } from '@/components/common/SocialIcons';
import contactDataRaw from '@/data/about/contact.json';
import type { ContactInfo } from '@/types/about';

const contactData = contactDataRaw as ContactInfo;

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with ASAUD - email, phone, office location, and department contacts.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Get in Touch"
        title="Contact ASAUD"
        description="We'd love to hear from you. Reach out through any of the channels below, or find the right department for your enquiry."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/about/contact' },
        ]}
      />

      {/* Primary Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-7 text-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white mb-4">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <a
                href={`mailto:${contactData.primary.email}`}
                className="text-sm text-blue-600 hover:underline break-all"
              >
                {contactData.primary.email}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 p-7 text-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-white mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <a
                href={`tel:${contactData.primary.phone}`}
                className="text-sm text-green-600 hover:underline"
              >
                {contactData.primary.phone}
              </a>
            </div>

            {/* Office */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 p-7 text-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white mb-4">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {contactData.primary.office.building}
                <br />
                {contactData.primary.office.room}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info & Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Address */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-5">
                <Building2 className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Office Location
                </h3>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <p className="font-semibold text-gray-900">
                  {contactData.primary.office.campus}
                </p>
                <p>{contactData.primary.office.building}</p>
                <p>{contactData.primary.office.room}</p>
                <p className="text-gray-600 pt-3 border-t border-gray-100">
                  {contactData.primary.office.address}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start">
                  <span className="text-gray-600">Weekdays</span>
                  <span className="font-medium text-gray-900 text-right">
                    {contactData.officeHours.weekdays}
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-600">Weekends</span>
                  <span className="font-medium text-gray-900 text-right">
                    {contactData.officeHours.weekends}
                  </span>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 italic">
                    {contactData.officeHours.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Department Contacts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reach the Right Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For specific enquiries, contact the appropriate department directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {contactData.departmentContacts.map((dept, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-1">
                  {dept.department}
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  {dept.description}
                </p>
                <a
                  href={`mailto:${dept.email}`}
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline break-all"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Follow Us on Social Media
          </h2>
          <p className="text-blue-100 mb-8">
            Stay connected and never miss an update.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {contactData.social.map((social) => {
              const Icon = socialIcons[social.icon];
              if (!Icon) return null;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-white text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-white">
                      {social.platform}
                    </div>
                    <div className="text-xs text-blue-200">
                      {social.handle}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
