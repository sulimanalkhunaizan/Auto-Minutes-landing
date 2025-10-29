import React from 'react';
import { FAQItem } from '../ui/FAQItem';
import { faqs } from '@/lib/constants';

export function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-1">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

