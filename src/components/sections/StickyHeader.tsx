'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface StickyHeaderProps {
  isVisible: boolean;
}

export function StickyHeader({ isVisible }: StickyHeaderProps) {
  return (
    <div className={`fixed top-0 left-0 right-0 bg-white shadow-lg py-4 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <span className="text-gray-700 font-medium">Ready to transform your meetings?</span>
        <Button variant="primary" className="px-6 py-2">
          Start Free Trial
        </Button>
      </div>
    </div>
  );
}

