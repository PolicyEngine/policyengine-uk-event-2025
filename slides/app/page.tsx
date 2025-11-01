'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllSlideshowMetadata } from '@/lib/slideshows';
import { agenda } from '@/lib/agenda';
import { getCurrentAgendaIndex, getNextAgendaIndex } from '@/lib/timeUtils';

export default function Home() {
  const slideshows = getAllSlideshowMetadata();
  const slideshowIds = new Set(slideshows.map(s => s.id));
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  useEffect(() => {
    // Update current/next on mount and every minute
    const updateTimes = () => {
      setCurrentIndex(getCurrentAgendaIndex(agenda));
      setNextIndex(getNextAgendaIndex(agenda));
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen gradient-bg flex flex-col justify-center p-16">
      <div className="max-w-6xl w-full">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/logos/white.svg"
            alt="PolicyEngine"
            width={450}
            height={120}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-4">
          Event presentations
        </h1>
        <p className="text-xl text-white/80 mb-4">
          3 November 2025 • Central Hall Westminster, London
        </p>
        <p className="text-lg text-white/60 mb-12">
          Select a presentation to view slides
        </p>

        {/* Agenda with linked presentations */}
        <div className="space-y-3">
          {agenda.map((item, index) => {
            const hasSlides = item.slideshowId && slideshowIds.has(item.slideshowId);
            const isBreakOrNetworking = item.type === 'break' || item.type === 'networking';
            const isCurrent = index === currentIndex;
            const isNext = index === nextIndex && !isCurrent;

            if (isBreakOrNetworking) {
              return (
                <div key={index} className={`rounded-lg p-6 text-white/60 italic relative ${isCurrent ? 'bg-white/20 ring-2 ring-white' : 'bg-white/10'}`}>
                  {isCurrent && (
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white text-pe-dark text-xs font-bold px-2 py-1 rounded">
                      NOW
                    </div>
                  )}
                  <p className="text-sm font-medium mb-1 text-left">{item.time}</p>
                  <p className="text-lg text-left">{item.title}</p>
                </div>
              );
            }

            const content = (
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <p className="text-sm font-medium text-pe-teal">{item.time}</p>
                    {isCurrent && (
                      <span className="text-xs px-2 py-1 bg-pe-teal text-white font-bold rounded">
                        HAPPENING NOW
                      </span>
                    )}
                    {isNext && (
                      <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 font-medium rounded">
                        Up next
                      </span>
                    )}
                    {!hasSlides && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        Slides coming soon
                      </span>
                    )}
                  </div>
                  <h2 className={`text-xl font-bold mb-2 ${hasSlides ? 'text-pe-dark group-hover:text-pe-teal' : 'text-gray-700'}`}>
                    {item.title}
                  </h2>
                  {item.speaker && (
                    <p className="text-sm text-gray-600 italic">{item.speaker}</p>
                  )}
                </div>
                {hasSlides && (
                  <div className="flex-shrink-0">
                    <Image
                      src="/logos/profile_teal_bg.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                )}
              </div>
            );

            if (hasSlides) {
              return (
                <Link
                  key={index}
                  href={`/${item.slideshowId}`}
                  className={`block bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer ${isCurrent ? 'ring-4 ring-pe-teal shadow-xl' : ''}`}
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={index}
                className={`block bg-white rounded-lg p-6 transition-all duration-300 opacity-60 ${isCurrent ? 'ring-4 ring-pe-teal opacity-100' : ''}`}
              >
                {content}
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
