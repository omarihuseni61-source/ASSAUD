import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  AlertCircle,
  CheckCircle2,
  User,
  Target,
} from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { formatDate } from '@/utils/formatters';
import eventsDataRaw from '@/data/newsEvents/events.json';
import type { EventItem, EventType } from '@/types/newsEvents';

const eventsData = eventsDataRaw as { events: EventItem[] };

const typeConfig: Record<
  EventType,
  { label: string; variant: 'maroon' | 'green' | 'purple' | 'orange' | 'red' | 'gray' }
> = {
  workshop: { label: 'Workshop', variant: 'purple' },
  seminar: { label: 'Seminar', variant: 'maroon' },
  conference: { label: 'Conference', variant: 'red' },
  networking: { label: 'Networking', variant: 'green' },
  competition: { label: 'Competition', variant: 'orange' },
  training: { label: 'Training', variant: 'gray' },
};

interface PageProps {
  params: Promise<{ eventId: string }>;
}

export async function generateStaticParams() {
  return eventsData.events.map((e) => ({ eventId: e.id }));
}

export default async function EventDetailPage({ params }: PageProps) {
  const { eventId } = await params;
  const event = eventsData.events.find((e) => e.id === eventId);

  if (!event) notFound();

  const config = typeConfig[event.type];
  const now = new Date();
  const eventDate = new Date(event.date);
  const deadline = new Date(event.registrationDeadline);
  const isPast = eventDate < now;
  const isDeadlinePassed = deadline < now;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-950 via-red-900 to-red-800 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-red-200 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/news-events" className="hover:text-white">News & Events</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/news-events/events" className="hover:text-white">Events</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{event.title.substring(0, 30)}...</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-5">
            <Badge variant={config.variant}>{config.label}</Badge>
            {isPast && <Badge variant="gray">Past Event</Badge>}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
            {event.title}
          </h1>

          <p className="text-lg text-red-100 mb-6 max-w-3xl leading-relaxed">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-red-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(event.date, 'EEEE, MMMM dd, yyyy')}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {new Date(event.date).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {event.venue}
            </span>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-red-100 to-red-200 shadow-lg">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Theme */}
              <div className="bg-red-50 rounded-2xl border border-red-100 p-6">
                <div className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-1">
                  Theme
                </div>
                <div className="text-lg font-bold text-gray-900">
                  {event.theme}
                </div>
              </div>

              {/* Speakers */}
              {event.speakers.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">
                    Featured Speakers
                  </h2>
                  <div className="space-y-4">
                    {event.speakers.map((speaker, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-4"
                      >
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                          {speaker.name.split(' ').map((n) => n[0]).join('').substring(0, 2)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">
                            {speaker.name}
                          </div>
                          <div className="text-sm text-red-600 mb-1">
                            {speaker.title}
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {speaker.bio}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {event.requirements.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Requirements
                  </h2>
                  <ul className="space-y-2">
                    {event.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Registration Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4">
                  Event Details
                </h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Date & Time
                    </dt>
                    <dd className="flex items-start gap-2 font-semibold text-gray-900">
                      <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        {formatDate(event.date, 'MMM dd, yyyy')}
                        <div className="text-xs text-gray-500 font-normal">
                          {new Date(event.date).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: '2-digit',
                          })}
                          {' — '}
                          {new Date(event.endDate).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                    </dd>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Venue
                    </dt>
                    <dd className="flex items-start gap-2 font-semibold text-gray-900">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{event.venue}</span>
                    </dd>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Target Audience
                    </dt>
                    <dd className="flex items-start gap-2 font-semibold text-gray-900">
                      <Target className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-normal">{event.targetAudience}</span>
                    </dd>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Capacity
                    </dt>
                    <dd className="flex items-center gap-2 font-semibold text-gray-900">
                      <Users className="w-4 h-4 text-gray-400" />
                      {event.capacity} attendees
                    </dd>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      Registration Deadline
                    </dt>
                    <dd className={`flex items-center gap-2 font-semibold ${isDeadlinePassed ? 'text-red-600' : 'text-gray-900'}`}>
                      <Clock className="w-4 h-4" />
                      {formatDate(event.registrationDeadline)}
                    </dd>
                  </div>
                </dl>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  {isPast ? (
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-700">
                        This event has ended
                      </div>
                    </div>
                  ) : isDeadlinePassed ? (
                    <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                      <AlertCircle className="w-5 h-5 text-red-500 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-red-700">
                        Registration closed
                      </div>
                    </div>
                  ) : (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg"
                    >
                      Register Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
