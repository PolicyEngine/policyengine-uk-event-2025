import React from 'react';
import Slide from '@/components/Slide';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function ReceptionSlide() {
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

        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl font-bold text-white">
            Thank you for joining us!
          </h1>
          <p className="text-2xl text-white/80">
            hello@policyengine.org
          </p>
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
