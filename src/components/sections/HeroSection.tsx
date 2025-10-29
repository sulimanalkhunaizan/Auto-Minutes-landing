import React from 'react';
import { Button } from '../ui/Button';
import { MessageSquare, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meeting Minutes on Auto-Pilot
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI-powered transcription and summaries that save you 5+ hours per week. 
              Never manually take notes again.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">
                Start Free Trial
              </Button>
              <Button variant="secondary">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div>
            {/* UI Mockup */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gray-800 px-5 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 flex-1">
                    <p className="text-sm text-gray-700">Let&apos;s discuss Q3 goals...</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-blue-600 text-white rounded-lg p-3 flex-1">
                    <p className="text-sm"><strong>Action Item:</strong> Review Q3 goals document by Friday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

