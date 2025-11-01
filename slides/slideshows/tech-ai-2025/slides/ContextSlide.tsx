import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function ContextSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>AI at PolicyEngine: two uses</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-pe-teal rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl text-white font-bold">1</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-pe-dark mb-2">
                    Building internally
                  </h2>
                  <p className="text-2xl text-gray-700">
                    Dataset enhancement and faster policy modelling
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-pe-dark rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl text-white font-bold">2</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-pe-dark mb-2">
                    Communicating research
                  </h2>
                  <p className="text-2xl text-gray-700">
                    Dashboards, calculators, and presentations
                  </p>
                </div>
              </div>
            </div>

            <div>
              <svg viewBox="0 0 500 400" className="w-full h-auto">
                {/* Building/Code icon */}
                <g transform="translate(50, 50)">
                  <rect x="0" y="0" width="180" height="280" fill="#319795" opacity="0.15" rx="12"/>
                  <rect x="20" y="25" width="140" height="12" fill="#319795" opacity="0.6" rx="3"/>
                  <rect x="20" y="50" width="140" height="12" fill="#319795" opacity="0.5" rx="3"/>
                  <rect x="20" y="75" width="100" height="12" fill="#319795" opacity="0.4" rx="3"/>
                  <circle cx="90" cy="200" r="50" fill="#319795" opacity="0.9"/>
                  <path d="M 70 200 L 90 180 L 110 200 L 90 220 Z" fill="white"/>
                </g>

                {/* Dashboard icon */}
                <g transform="translate(270, 50)">
                  <rect x="0" y="0" width="180" height="280" fill="#1D4044" opacity="0.15" rx="12"/>
                  <rect x="25" y="35" width="130" height="100" fill="#1D4044" opacity="0.2" rx="6"/>
                  <rect x="35" y="50" width="35" height="70" fill="#1D4044" opacity="0.5" rx="3"/>
                  <rect x="77" y="50" width="35" height="70" fill="#1D4044" opacity="0.5" rx="3"/>
                  <rect x="119" y="50" width="35" height="70" fill="#1D4044" opacity="0.5" rx="3"/>
                  <circle cx="90" cy="200" r="50" fill="#1D4044" opacity="0.9"/>
                  <path d="M 60 200 L 75 185 L 90 195 L 105 180 L 120 190" stroke="white" strokeWidth="4" fill="none"/>
                </g>
              </svg>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
