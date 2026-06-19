import { CollaborationCard, CompanyValue, FeatureItem, PricingPlan, ResourceItem, Testimonial } from '../types';

export const collaborationCards: CollaborationCard[] = [
  {
    id: 'collab-1',
    title: 'Unified Dashboards',
    description: 'Track engagement and retention across every channel.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'collab-2',
    title: 'Team Workflows',
    description: 'Coordinate high-impact campaigns with clarity.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'collab-3',
    title: 'AI Engagement',
    description: 'Predict churn and activate users at the right time.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'collab-4',
    title: 'Secure Insights',
    description: 'Enterprise-grade analytics with bank-level security.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  }
];

export const featureItems: FeatureItem[] = [
  {
    id: 'feature-analytics',
    title: 'Analytics',
    description: 'Reporting and engagement metrics with live dashboards.',
    icon: 'insights'
  },
  {
    id: 'feature-community',
    title: 'Community',
    description: 'Build stronger customer relationships and trust.',
    icon: 'groups'
  },
  {
    id: 'feature-automation',
    title: 'Automation',
    description: 'Workflow automation that scales with your teams.',
    icon: 'auto-awesome'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Alicia Gomez',
    company: 'Northwind Capital',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'Circle transformed our engagement strategy with crisp insights and automation.'
  },
  {
    id: 'testimonial-2',
    name: 'Marcus Lee',
    company: 'Stratus Analytics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'The reports are immediate, gorgeous, and help us react faster.'
  },
  {
    id: 'testimonial-3',
    name: 'Priya Patel',
    company: 'Elevate Health',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    rating: 4,
    quote: 'Our team loves the workflow automations and intuitive layout.'
  },
  {
    id: 'testimonial-4',
    name: 'Anurag Singh',
    company: 'Vertex Ledger',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    rating: 1,
    quote: 'We ran into delays, clunky automation, and support did not resolve our issues.'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'pricing-starter',
    name: 'Starter',
    price: 'Free',
    description: 'For startups validating engagement strategies.',
    features: ['Basic analytics', 'Email support', 'Community access']
  },
  {
    id: 'pricing-pro',
    name: 'Professional',
    price: '$29/month',
    description: 'Best for growing teams that need automation.',
    features: ['Advanced dashboards', 'Automation flows', 'Priority support'],
    highlighted: true
  },
  {
    id: 'pricing-enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'Secure and scalable solutions for large orgs.',
    features: ['Dedicated success', 'Custom integrations', 'Enterprise security']
  }
];

export const resourceItems: ResourceItem[] = [
  {
    id: 'resource-1',
    title: 'Engagement Playbooks',
    summary: 'Frameworks and templates to boost activation.'
  },
  {
    id: 'resource-2',
    title: 'Circle University',
    summary: 'On-demand product training for fast onboarding.'
  },
  {
    id: 'resource-3',
    title: 'Customer Stories',
    summary: 'Enterprise-grade outcomes powered by Circle.'
  }
];

export const companyValues: CompanyValue[] = [
  {
    id: 'value-1',
    title: 'Trust First',
    description: 'Security and transparency are built into every workflow.'
  },
  {
    id: 'value-2',
    title: 'Bold Innovation',
    description: 'We keep teams ahead with AI-driven intelligence.'
  },
  {
    id: 'value-3',
    title: 'Customer Obsessed',
    description: 'We succeed when your customers stay engaged.'
  }
];
