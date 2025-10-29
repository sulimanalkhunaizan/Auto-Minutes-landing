import React from 'react';

interface UseCaseCardProps {
  role: string;
  description: string;
}

export function UseCaseCard({ role, description }: UseCaseCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{role}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

