export interface Objective {
  title: string;
  description: string;
  icon: string;
}

export interface CoreValue {
  value: string;
  description: string;
  icon: string;
}

export interface MembershipCategory {
  name: string;
  description: string;
  eligibility: string;
}

export interface MembershipScope {
  title: string;
  description: string;
  categories: MembershipCategory[];
}

export interface Role {
  role: string;
  description: string;
}

export interface AboutASAUD {
  identity: {
    name: string;
    acronym: string;
    tagline: string;
    established: string;
  };
  relationship: {
    university: string;
    faculty: string;
    establishmentDate: string;
  };
  overview: string;
  vision: string;
  mission: string;
  objectives: Objective[];
  coreValues: CoreValue[];
  membershipScope: MembershipScope;
  roles: Role[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  highlight: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: string;
}

export interface History {
  founded: string;
  background: string;
  overview: string;
  timeline: TimelineEvent[];
  achievements: Achievement[];
}

export interface ConstitutionChapter {
  number: number;
  title: string;
  sections: string[];
}

export interface Constitution {
  lastUpdated: string;
  version: string;
  description: string;
  documentUrl: string;
  chapters: ConstitutionChapter[];
}

export interface FAQRelatedLink {
  label: string;
  href: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  relatedLinks: FAQRelatedLink[];
}

export interface FAQCategory {
  id: string;
  category: string;
  icon: string;
  faqs: FAQ[];
}

export interface FAQsData {
  categories: FAQCategory[];
}

export interface ContactInfo {
  primary: {
    email: string;
    phone: string;
    office: {
      building: string;
      room: string;
      campus: string;
      address: string;
    };
  };
  social: {
    platform: string;
    handle: string;
    url: string;
    icon: string;
  }[];
  departmentContacts: {
    department: string;
    description: string;
    email: string;
    personInCharge: string;
  }[];
  officeHours: {
    weekdays: string;
    weekends: string;
    note: string;
  };
}