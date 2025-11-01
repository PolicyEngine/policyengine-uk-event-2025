import React from 'react';
import Slide from '@/components/Slide';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import CountdownTimer from '@/components/CountdownTimer';

export default function LunchSlide() {
  return (
    <Slide showFooter={false}>
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {/* Logo at top */}
        <div>
          <Image
            src={assetPath("/logos/teal.svg")}
            alt="PolicyEngine"
            width={350}
            height={105}
            priority
          />
        </div>

        {/* Main message */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-bold text-pe-dark">
            Lunch Break
          </h1>
          <p className="text-2xl text-gray-600">
            Enjoy your meal and networking!
          </p>
        </div>

        {/* Countdown timer */}
        <div className="mt-4">
          <p className="text-2xl text-gray-700 text-center mb-6">
            Programming starts in:
          </p>
          <CountdownTimer targetTime="12:30" eventDate="2025-11-03" />
        </div>
      </div>
    </Slide>
  );
}
