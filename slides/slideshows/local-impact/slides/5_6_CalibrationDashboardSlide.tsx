'use client';

import React, { useEffect } from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';

export default function CalibrationDashboardSlide() {
  // Prevent F key from triggering fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') {
        e.stopPropagation();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, []);

  return (
    <Slide>
      <div className="max-w-full h-full flex flex-col">
        <SlideHeader>
          <SlideTitle>Calibration performance dashboard</SlideTitle>
        </SlideHeader>

        <div className="flex-1 mt-8" onClick={(e) => e.stopPropagation()}>
          <iframe
            src="https://microcalibrate.vercel.app"
            className="w-full h-full border-0 rounded-lg"
            style={{ height: 'calc(100vh - 250px)' }}
            title="UK Calibration Performance Dashboard"
          />
        </div>
      </div>
    </Slide>
  );
}
