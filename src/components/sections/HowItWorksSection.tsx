import React from 'react';

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Join Your Meeting',
      description: 'Connect Auto Minutes to Zoom, Teams, or Google Meet',
    },
    {
      number: 2,
      title: 'AI Does the Work',
      description: 'Real-time transcription and intelligent analysis',
    },
    {
      number: 3,
      title: 'Get Results',
      description: 'Instant summary with action items delivered',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          How Auto Minutes Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

