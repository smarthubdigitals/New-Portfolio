export type ServiceType = 
  | 'Social Media Graphics & Promotional Flyers'
  | 'Short-Form Video & AI Content'
  | 'Business Website Design';

export interface ServiceItem {
  id: string;
  title: string;
  type: ServiceType;
  iconName: string;
  description: string;
  features: string[];
  ctaText: string;
}

export type PortfolioCategory = 'all' | 'graphics' | 'videos' | 'websites';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'graphics' | 'videos' | 'websites';
  clientName: string;
  businessType: string;
  isConcept: boolean; // Always true for concept projects
  shortDescription: string;
  fullDescription: string;
  thumbnailUrl: string;
  tags: string[];
  // Specific properties
  flyerImageUrl?: string;
  videoUrl?: string; // MP4 or Embed link
  websiteDemoUrl?: string;
  featuresCreated?: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phoneWhatsapp: string;
  businessName: string;
  serviceNeeded: ServiceType;
  projectDetails: string;
  honeypot?: string; // Bot protection
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyReason {
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  category: 'timelines' | 'pricing' | 'delivery' | 'general';
  categoryLabel: string;
  question: string;
  answer: string;
  highlightText?: string;
}
