import React from 'react';
import { Building2, Zap, Globe, Lightbulb } from 'lucide-react';

// Company data with proper names and logos
const companies = [
  {
    name: 'TechCorp',
    fullName: 'TechCorp Solutions',
    icon: Building2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'StartupInc',
    fullName: 'StartupInc Ventures',
    icon: Zap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'GlobalBiz',
    fullName: 'GlobalBiz International',
    icon: Globe,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    name: 'InnovateLabs',
    fullName: 'InnovateLabs Research',
    icon: Lightbulb,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

export function SocialProofSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Company Logos - Animated Scrolling */}
        <div className="mb-16">
          <h3 className="text-center text-gray-500 text-sm font-medium mb-8 uppercase tracking-wide">
            Trusted by leading companies
          </h3>
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex animate-scroll hover:pause-animation">
              {/* First set of logos */}
              {companies.map((company, index) => {
                const Icon = company.icon;
                return (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-20 group"
                  >
                    <div className={`${company.bgColor} rounded-xl p-4 flex items-center gap-3 group-hover:scale-105 transition-all duration-300 shadow-sm group-hover:shadow-md`}>
                      <Icon className={`w-8 h-8 ${company.color}`} />
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{company.name}</p>
                        <p className="text-xs text-gray-500">{company.fullName}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => {
                const Icon = company.icon;
                return (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-20 group"
                  >
                    <div className={`${company.bgColor} rounded-xl p-4 flex items-center gap-3 group-hover:scale-105 transition-all duration-300 shadow-sm group-hover:shadow-md`}>
                      <Icon className={`w-8 h-8 ${company.color}`} />
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{company.name}</p>
                        <p className="text-xs text-gray-500">{company.fullName}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

