export interface SocialLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  youtube?: string;
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
  socialLinks: SocialLinks;
}