import React from 'react';
import { Upload, Sparkles, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "Upload or Connect",
    description: "Upload your meeting recording or connect directly with Zoom, Teams, or Google Meet",
    step: "01"
  },
  {
    icon: Sparkles,
    title: "AI Analysis",
    description: "AutoMinutes uses advanced AI to transcribe and analyze your meeting content",
    step: "02"
  },
  {
    icon: FileCheck,
    title: "Get Organized Minutes",
    description: "Receive a clean, structured summary with decisions, topics, and action items",
    step: "03"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to transform your meetings into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gray-200 z-0">
                    <div className="h-full bg-blue-600 w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                )}

                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

