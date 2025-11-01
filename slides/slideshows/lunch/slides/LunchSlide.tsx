import React from 'react';
import Slide from '@/components/Slide';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import CountdownTimer from '@/components/CountdownTimer';

export default function LunchSlide() {
  return (
    <Slide className="!bg-transparent gradient-bg" showFooter={false}>
      <div className="flex flex-col justify-between h-full py-24">
        <div className="flex justify-center">
          <Image
            src={assetPath("/logos/white.svg")}
            alt="PolicyEngine"
            width={400}
            height={120}
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <p className="text-3xl text-white/80">Programming begins in</p>
          <CountdownTimer targetTime="12:30" eventDate="2025-11-03" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-xl text-white/60">Supported by</p>
          <Image
            src={assetPath("/logos/nuffield-white.png")}
            alt="Nuffield Foundation"
            width={180}
            height={60}
            className="opacity-70"
          />
        </div>
      </div>
    </Slide>
  );
}
