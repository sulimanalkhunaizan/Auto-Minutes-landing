import React from 'react';
import { Zap, ListChecks, Globe, Plug, BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Automatic Summaries",
    description: "Generate concise, accurate meeting minutes instantly with AI-powered summarization"
  },
  {
    icon: ListChecks,
    title: "Action Items Extraction",
    description: "Automatically detects tasks, assigns owners, and highlights deadlines"
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Understands and transcribes meetings in multiple languages including English and Arabic"
  },
  {
    icon: Plug,
    title: "Seamless Integrations",
    description: "Works directly with Zoom, Microsoft Teams, and Google Meet"
  },
  {
    icon: BarChart3,
    title: "Team Dashboard",
    description: "Manage meeting history, track insights, and monitor team productivity in one place"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with GDPR, SOC 2, and industry standards"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to transform meetings into actionable outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

