'use client';

import React, { useState, useEffect } from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';

export default function GrowingAdoption() {
  const [visibleLogos, setVisibleLogos] = useState(0);

  const organizations = [
    { name: 'Green Party', description: 'Political party' },
    { name: 'Centre for Policy Studies', description: 'Think tank' },
    { name: 'NIESR', description: 'Research institute' },
    { name: 'Institute of Economic Affairs', description: 'Think tank' },
    { name: 'Social Market Foundation', description: 'Think tank' },
    { name: 'Liberal Democrats', description: 'Political party' },
    { name: 'UBI Lab Network', description: 'Research network' },
    { name: 'UK in a Changing Europe', description: 'Research initiative' },
    { name: 'UN Digital Public Good', description: 'Recognition', isUN: true },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogos((prev) => {
        if (prev < organizations.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 600); // Show new logo every 0.6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>2023-2024: Growing adoption</SlideTitle>
        </SlideHeader>

        <div className="mt-12">
          <div className="grid grid-cols-3 gap-8">
            {organizations.map((org, idx) => (
              <div
                key={idx}
                className={`
                  rounded-xl p-8 border-2 transition-all duration-500
                  ${idx < visibleLogos
                    ? 'opacity-100 scale-100 border-pe-teal bg-white shadow-lg'
                    : 'opacity-0 scale-95 border-transparent'
                  }
                  ${org.isUN ? 'col-span-3 bg-gradient-to-r from-blue-50 to-purple-50' : ''}
                `}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                  minHeight: org.isUN ? '120px' : '140px'
                }}
              >
                <div className="flex flex-col items-center justify-center h-full text-center gap-3">
                  <h3 className={`font-bold text-pe-dark ${org.isUN ? 'text-3xl' : 'text-2xl'}`}>
                    {org.name}
                  </h3>
                  <p className={`text-gray-600 ${org.isUN ? 'text-lg' : 'text-base'}`}>
                    {org.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-600">
              {visibleLogos}/{organizations.length} organizations
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
