import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { MessageSquare, Sparkles, ArrowRight, Play } from 'lucide-react';

// Typewriter animation component
function TypewriterText({ words, className = "" }: { words: string[], className?: string }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2500); // Wait 2.5 seconds before deleting
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 80); // Delete speed (faster)
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 120); // Type speed
        return () => clearTimeout(timeout);
      } else {
        setIsWaiting(true);
      }
    }
  }, [currentText, currentWordIndex, isDeleting, isWaiting, words]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span className={`inline-block w-0.5 h-12 bg-current ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </span>
  );
}

export function HeroSection() {
  const typewriterWords = [
    "Action in Seconds",
    "Smart Summaries", 
    "Instant Insights",
    "Clear Decisions"
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* AI-Powered Meeting Intelligence Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-800 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              AI-Powered Meeting Intelligence
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Turn Your Meetings into</span>{" "}
              <TypewriterText 
                words={typewriterWords}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              />
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              AI that summarizes, organizes, and delivers your meeting minutes instantly. 
              Focus on execution, not documentation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="lg" className="group">
                Try AutoMinutes Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                See It in Action
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

