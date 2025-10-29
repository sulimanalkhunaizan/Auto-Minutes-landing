// Brand colors
export const colors = {
  primary: '#2563EB',
  secondary: '#7C3AED',
  accent: '#059669',
  dark: '#1F2937',
  light: '#F9FAFB',
} as const;

// Features data
export const features = [
  {
    id: 'transcription',
    title: 'Real-time Transcription',
    description: 'Crystal-clear transcription as people speak with speaker identification',
  },
  {
    id: 'summaries',
    title: 'AI-Powered Summaries',
    description: 'Intelligent summaries highlighting key decisions and discussion points',
  },
  {
    id: 'actions',
    title: 'Action Item Tracking',
    description: 'Automatically detect and assign action items with due dates',
  },
  {
    id: 'integrations',
    title: 'Seamless Integrations',
    description: 'Connect with Slack, Notion, Asana, and your favorite tools',
  },
  {
    id: 'search',
    title: 'Smart Search',
    description: 'Find anything across all your meetings with semantic search',
  },
] as const;

// Use cases data
export const useCases = [
  {
    role: 'Engineering Teams',
    description: 'Standups, sprint planning, and technical reviews with automated follow-ups',
  },
  {
    role: 'Sales Teams',
    description: 'Client calls with automated CRM updates and deal tracking',
  },
  {
    role: 'Executive Leadership',
    description: 'Board meetings and strategy sessions with decision tracking',
  },
  {
    role: 'Consulting Firms',
    description: 'Client meetings with professional summaries and deliverables',
  },
] as const;

// Pricing plans data
export const pricingPlans = [
  {
    name: 'Starter',
    price: '$19',
    period: 'month',
    description: 'Perfect for individuals and small teams',
    features: [
      '10 hours of transcription/month',
      'AI summaries',
      'Basic action items',
      'Email support',
    ],
    cta: 'Start Free Trial',
    featured: false,
  },
  {
    name: 'Professional',
    price: '$49',
    period: 'month',
    description: 'Most popular for growing teams',
    features: [
      '50 hours of transcription/month',
      'Advanced AI summaries',
      'Smart action items',
      'Slack & Teams integration',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited transcription',
      'Custom AI models',
      'API access',
      'SSO & Security',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
] as const;

// FAQ data
export const faqs = [
  {
    question: 'How accurate is the transcription?',
    answer: 'Our AI achieves 99% accuracy for clear audio in supported languages. Accuracy may vary with background noise or strong accents.',
  },
  {
    question: 'Which meeting platforms do you support?',
    answer: 'We support Zoom, Microsoft Teams, Google Meet, and any platform that allows participants. We also support audio file uploads.',
  },
  {
    question: 'Is my meeting data secure?',
    answer: 'Yes, all data is encrypted in transit and at rest. We comply with GDPR, CCPA, and enterprise security standards.',
  },
  {
    question: 'Can I export my meeting notes?',
    answer: 'Absolutely! Export to PDF, Google Docs, Notion, or sync directly with your project management tools.',
  },
] as const;

// Company logos (legacy - now defined in SocialProofSection)
export const companies = [
  'TechCorp',
  'StartupInc',
  'GlobalBiz',
  'InnovateLabs',
] as const;

