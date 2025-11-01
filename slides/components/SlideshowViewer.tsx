'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getSlideshowById } from '@/lib/slideshows';

interface SlideshowViewerProps {
  slideshowId: string;
}

export default function SlideshowViewer({ slideshowId }: SlideshowViewerProps) {
  const slideshow = getSlideshowById(slideshowId);

  if (!slideshow) {
    return null;
  }

  const slideCount = slideshow.slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, slideCount - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slideCount - 1);
      } else if (e.key === 'f' || e.key === 'F11') {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideCount]);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slideCount - 1;

  const SlideComponent = slideshow.slides[currentSlide];

  return (
    <main className="relative">
      {mounted && <SlideComponent />}

      {/* Navigation controls inside footer */}
      <div className="fixed bottom-0 left-0 right-0 h-20 z-[100] flex items-center justify-between px-8 pointer-events-none">
        {/* Left side - Menu button */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <Link
            href="/"
            className="text-white hover:text-white/80 transition-colors text-sm font-medium flex items-center gap-2"
          >
            ← Menu
          </Link>
          <span className="text-white/60 text-xs">
            Arrow keys • F for fullscreen
          </span>
        </div>

        {/* Right side - Navigation controls */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
            className="text-white hover:text-white/80 transition-colors disabled:opacity-30 text-2xl w-10 h-10 flex items-center justify-center"
            disabled={isFirstSlide}
            aria-label="Previous slide"
          >
            ←
          </button>

          <span className="text-base font-medium text-white min-w-[4rem] text-center">
            {currentSlide + 1} / {slideCount}
          </span>

          <button
            onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slideCount - 1))}
            className="text-white hover:text-white/80 transition-colors disabled:opacity-30 text-2xl w-10 h-10 flex items-center justify-center"
            disabled={isLastSlide}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </main>
  );
}
