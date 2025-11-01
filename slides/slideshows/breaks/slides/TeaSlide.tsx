import React from 'react';
import Slide from '@/components/Slide';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import CountdownTimer from '@/components/CountdownTimer';

export default function TeaSlide() {
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
            Tea Break
          </h1>
          <p className="text-2xl text-gray-600">
            Refresh and recharge!
          </p>
        </div>

        {/* Countdown timer */}
        <div className="mt-4">
          <p className="text-2xl text-gray-700 text-center mb-6">
            Programming resumes in:
          </p>
          <CountdownTimer targetTime="14:20" eventDate="2025-11-03" />
        </div>
      </div>
    </Slide>
  );
}
