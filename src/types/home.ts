export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroCTA {
  text: string;
  link: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  stats: HeroStat[];
  cta: {
    primary: HeroCTA;
    secondary: HeroCTA;
  };
}

export interface QuickAccessSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
  highlights: string[];
}

export interface QuickAccessData {
  sections: QuickAccessSection[];
}

export interface FeaturedActivity {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  date: string;
  featured: boolean;
}

export interface FeaturedActivitiesData {
  activities: FeaturedActivity[];
}

export interface Update {
  id: string;
  date: string;
  title: string;
  content: string;
  type: 'academic' | 'opportunity' | 'announcement';
  link: string;
}

export interface UpdatesData {
  updates: Update[];
}