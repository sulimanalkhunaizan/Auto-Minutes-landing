import React from 'react';
import { Play } from 'lucide-react';

export function DemoVideoSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          See Auto Minutes in Action
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl h-96 flex flex-col items-center justify-center text-white relative overflow-hidden group cursor-pointer">
            <button className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all group-hover:scale-110 mb-4">
              <Play className="w-8 h-8 ml-1" />
            </button>
            <p className="text-lg">2-minute product tour</p>
          </div>
        </div>
      </div>
    </section>
  );
}

