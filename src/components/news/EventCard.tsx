import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Users, ArrowRight, Clock } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { formatDate } from '@/utils/formatters';
import type { EventItem, EventType } from '@/types/newsEvents';

const typeConfig: Record<
  EventType,
  { label: string; variant: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'gray' }
> = {
  workshop: { label: 'Workshop', variant: 'purple' },
  seminar: { label: 'Seminar', variant: 'blue' },
  conference: { label: 'Conference', variant: 'red' },
  networking: { label: 'Networking', variant: 'green' },
  competition: { label: 'Competition', variant: 'orange' },
  training: { label: 'Training', variant: 'gray' },
};

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  const config = typeConfig[event.type];

  return (
    <Link
      href={`/news-events/events/${event.id}`}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge variant={config.variant}>{config.label}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 flex-wrap">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {new Date(event.date).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true,
            })}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {event.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-1">
          {event.description}
        </p>

        <div className="space-y-2 mb-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Capacity: {event.capacity}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-orange-600 font-semibold">
            Deadline: {formatDate(event.registrationDeadline, 'MMM dd')}
          </span>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
            Details
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}