import React from 'react';
import Slide from '@/components/Slide';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import CountdownTimer from '@/components/CountdownTimer';

export default function TeaSlide() {
  return (
    <Slide showFooter={false}>
      <div className="flex flex-col items-center justify-center h-full space-y-12">
        {/* Logo at top */}
        <div className="mb-8">
          <Image
            src={assetPath("/logos/teal.svg")}
            alt="PolicyEngine"
            width={400}
            height={120}
            priority
          />
        </div>

        {/* Main message */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-pe-dark">
            Tea Break
          </h1>
          <p className="text-4xl text-gray-600">
            Refresh and recharge!
          </p>
        </div>

        {/* Countdown timer */}
        <div className="mt-12">
          <p className="text-3xl text-gray-700 text-center mb-8">
            Programming resumes in:
          </p>
          <CountdownTimer targetTime="14:20" eventDate="2025-11-03" />
        </div>

        {/* Decorative element */}
        <div className="mt-12 text-7xl">
          ☕
        </div>
      </div>
    </Slide>
  );
}
