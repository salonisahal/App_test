export interface CollaborationCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface ResourceItem {
  id: string;
  title: string;
  summary: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
}
