import React from 'react';
import { Users, UserCog, Building2 } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const useCases = [
  {
    icon: Users,
    title: "For Teams",
    description: "Keep everyone aligned with automatic meeting summaries and clear action items. Never miss a task or decision.",
    benefits: [
      "Track tasks and decisions effortlessly",
      "Ensure nothing falls through the cracks",
      "Improve team accountability"
    ]
  },
  {
    icon: UserCog,
    title: "For Managers",
    description: "Get instant insights from all your meetings. Monitor team progress and make data-driven decisions faster.",
    benefits: [
      "Real-time meeting analytics",
      "Track team productivity trends",
      "Identify bottlenecks quickly"
    ]
  },
  {
    icon: Building2,
    title: "For Enterprise",
    description: "Standardize documentation across the organization with compliant, secure, and consistent meeting records.",
    benefits: [
      "Enterprise-grade security and compliance",
      "Standardized documentation process",
      "Custom integrations and support"
    ]
  }
];

export function UseCasesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Built for Every Team Size
          </h2>
          <p className="text-xl text-gray-800 font-medium">
            From startups to enterprises, AutoMinutes scales with your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card 
                key={index}
                className="group border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">{useCase.title}</h3>
                    <p className="text-gray-800 leading-relaxed font-medium">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-3">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg 
                          className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-base text-gray-800 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

