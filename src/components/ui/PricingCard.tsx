import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
  cta: string;
  featured?: boolean;
}

export function PricingCard({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  cta,
  featured = false 
}: PricingCardProps) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg relative ${featured ? 'border-2 border-blue-600 scale-105' : 'border border-gray-200'}`}>
      {featured && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
          Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{name}</h3>
        <div className="mb-3">
          <span className="text-5xl font-bold text-blue-600">{price}</span>
          {period && <span className="text-gray-600">/{period}</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
        featured 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
      }`}>
        {cta}
      </button>
    </div>
  );
}

