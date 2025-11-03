import React from 'react';
import Slide from '@/components/Slide';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import CountdownTimer from '@/components/CountdownTimer';

export default function LunchSlide() {
  return (
    <Slide className="!bg-transparent gradient-bg" showFooter={true}>
      <div className="flex flex-col justify-center items-center h-full gap-32">
        <div className="flex flex-col items-center gap-6">
          <p className="text-3xl text-white/80">Programming begins in</p>
          <CountdownTimer targetTime="12:30" eventDate="2025-11-03" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-xl text-white/60">Supported by</p>
          <Image
            src={assetPath("/logos/nuffield-white.png")}
            alt="Nuffield Foundation"
            width={140}
            height={47}
            className="opacity-70"
          />
        </div>
      </div>
    </Slide>
  );
}
