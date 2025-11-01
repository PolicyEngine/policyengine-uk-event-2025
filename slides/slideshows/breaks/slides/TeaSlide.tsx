import React from 'react';
import Slide from '@/components/Slide';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import CountdownTimer from '@/components/CountdownTimer';

export default function TeaSlide() {
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
          <p className="text-3xl text-white/80">Programming resumes in</p>
          <CountdownTimer targetTime="14:20" eventDate="2025-11-03" />
        </div>

        <div className="flex justify-center">
          <p className="text-2xl text-white/70">
            Supported by the Nuffield Foundation
          </p>
        </div>
      </div>
    </Slide>
  );
}
