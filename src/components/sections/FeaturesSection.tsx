import React from 'react';
import { Mic, Sparkles, CheckCircle, Link2, Search } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';

export function FeaturesSection() {
  const features = [
    {
      icon: Mic,
      title: 'Real-time Transcription',
      description: 'Crystal-clear transcription as people speak with speaker identification',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Summaries',
      description: 'Intelligent summaries highlighting key decisions and discussion points',
    },
    {
      icon: CheckCircle,
      title: 'Action Item Tracking',
      description: 'Automatically detect and assign action items with due dates',
    },
    {
      icon: Link2,
      title: 'Seamless Integrations',
      description: 'Connect with Slack, Notion, Asana, and your favorite tools',
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find anything across all your meetings with semantic search',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Powerful Features for Better Meetings
        </h2>
        <div className="space-y-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

