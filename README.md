# Auto Minutes - Landing Page

A professional, modern landing page for Auto Minutes, an AI-powered meeting assistant that automatically transcribes, summarizes, and tracks action items from meetings.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Professional icon library

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── UseCaseCard.tsx
│   │   ├── PricingCard.tsx
│   │   ├── FAQItem.tsx
│   │   ├── MetricCard.tsx
│   │   └── index.ts
│   └── sections/            # Page sections
│       ├── StickyHeader.tsx
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── FeaturesSection.tsx
│       ├── UseCasesSection.tsx
│       ├── SocialProofSection.tsx
│       ├── DemoVideoSection.tsx
│       ├── PricingSection.tsx
│       ├── FAQSection.tsx
│       ├── Footer.tsx
│       └── index.ts
└── lib/
    └── constants.ts         # Data constants and configuration
```

## 🎨 Design Philosophy

The landing page follows a story-driven approach:

1. **Hero** - Strong value proposition
2. **Problem** - Pain points identification
3. **Solution** - How it works (3-step process)
4. **Features** - Key capabilities
5. **Use Cases** - Industry-specific benefits
6. **Social Proof** - Trust building (logos, testimonials, metrics)
7. **Demo** - Product visualization
8. **Pricing** - Clear, transparent plans
9. **FAQ** - Common questions
10. **Footer** - Navigation and legal

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 🎯 Key Features

- ✅ **Fully Responsive** - Mobile-first design
- ✅ **Professional Icons** - Lucide React integration
- ✅ **Type-Safe** - Full TypeScript support
- ✅ **Component-Based** - Modular and maintainable
- ✅ **SEO Optimized** - Proper metadata and structure
- ✅ **Modern UI** - Tailwind CSS with smooth animations
- ✅ **Clean Code** - Well-organized with constants separation

## 📝 Customization

### Update Content

Edit `/src/lib/constants.ts` to update:
- Features
- Pricing plans
- FAQs
- Testimonials
- Metrics
- Company logos

### Update Styling

Modify Tailwind classes in components or extend the theme in `tailwind.config.js`.

### Update Metadata

Edit `/src/app/layout.tsx` to update:
- Page title
- Description
- Keywords

## 🚢 Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Node.js

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## 📄 License

This project is proprietary and confidential.

## 🤝 Contributing

This is a closed-source project. For questions or support, contact the development team.
