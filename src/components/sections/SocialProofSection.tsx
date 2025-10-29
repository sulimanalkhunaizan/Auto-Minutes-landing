import React from 'react';
import { MetricCard } from '../ui/MetricCard';
import { companies, testimonial, metrics } from '@/lib/constants';
import { Quote } from 'lucide-react';

export function SocialProofSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {companies.map((company) => (
            <div key={company} className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-600">{company}</p>
            </div>
          ))}
        </div>
        
        {/* Testimonial */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-xl p-10 shadow-lg text-center relative">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6">
              <Quote className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-xl text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            <div>
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

