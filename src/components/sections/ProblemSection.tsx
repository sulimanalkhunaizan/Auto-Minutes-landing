import React from 'react';
import { Clock, Search, RotateCcw } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: 'Time-Consuming Notes',
      description: 'Spend more time documenting than participating in discussions',
    },
    {
      icon: Search,
      title: 'Lost Context',
      description: 'Critical decisions and action items get buried in notes',
    },
    {
      icon: RotateCcw,
      title: 'No Follow-Through',
      description: 'Action items forgotten without proper tracking and reminders',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Meetings Should Move Work Forward, Not Hold It Back
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div key={problem.title} className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

