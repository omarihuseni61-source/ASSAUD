export interface Leader {
  id: string;
  name: string;
  position: string;
  portfolio: string;
  bio: string;
  photo: string;
  email: string;
  term: string;
  order: number;
}

export interface LeadershipData {
  currentTerm: string;
  leaders: Leader[];
}

export interface MembershipBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface MembershipCategory {
  name: string;
  price: string;
  description: string;
  eligibility: string[];
  benefits: string[];
}

export interface JoinStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface MembershipData {
  overview: string;
  benefits: MembershipBenefit[];
  categories: MembershipCategory[];
  joinSteps: JoinStep[];
  statistics: {
    totalMembers: string;
    activeMembers: string;
    graduatedMembers: string;
    partners: string;
  };
  registrationUrl: string;
}

export type AwardCategory =
  | 'academic'
  | 'competition'
  | 'scholarship'
  | 'professional'
  | 'research'
  | 'leadership';

export interface Award {
  id: string;
  title: string;
  recipient: string;
  category: AwardCategory;
  year: number;
  description: string;
  image: string;
}

export interface AwardsData {
  awards: Award[];
}

export type PartnerType =
  | 'corporate'
  | 'government'
  | 'educational'
  | 'professional'
  | 'ngo';

export interface Partner {
  id: string;
  name: string;
  acronym: string;
  type: PartnerType;
  description: string;
  logo: string;
  website: string;
  collaboration: string;
  since: string;
}

export interface PartnersData {
  partners: Partner[];
}
