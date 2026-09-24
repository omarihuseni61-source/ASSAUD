export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  subItems?: NavSubItem[];
}

export interface NavSubItem {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  siteName: string;
  fullName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  logo: string;
  favicon: string;
  language: string;
  contactEmail: string;
  phone: string;
  socialLinks: Record<string, string>;
}
