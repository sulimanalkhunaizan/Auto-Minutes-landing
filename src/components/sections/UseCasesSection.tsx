import React from 'react';
import { UseCaseCard } from '../ui/UseCaseCard';
import { useCases } from '@/lib/constants';

export function UseCasesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Trusted by Teams Across Industries
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase) => (
            <UseCaseCard
              key={useCase.role}
              role={useCase.role}
              description={useCase.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

