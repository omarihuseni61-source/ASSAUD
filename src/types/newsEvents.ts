export type EventType =
  | 'workshop'
  | 'seminar'
  | 'conference'
  | 'networking'
  | 'competition'
  | 'training';

export interface Speaker {
  name: string;
  title: string;
  bio: string;
  photo: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  endDate: string;
  venue: string;
  type: EventType;
  description: string;
  theme: string;
  speakers: Speaker[];
  targetAudience: string;
  capacity: number;
  registrationDeadline: string;
  registrationUrl: string;
  image: string;
  requirements: string[];
}

export interface EventsData {
  events: EventItem[];
}

export type NewsType =
  | 'announcement'
  | 'internship'
  | 'scholarship'
  | 'competition'
  | 'mentorship'
  | 'training'
  | 'career'
  | 'achievement'
  | 'news';

export interface NewsItem {
  id: string;
  title: string;
  type: NewsType;
  date: string;
  description: string;
  fullContent: string;
  image: string;
  category: string;
  deadline?: string;
  link: string;
  featured: boolean;
}

export interface NewsData {
  items: NewsItem[];
}
