import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function FirmDistributionSlide() {
  return (
    <Slide>
      <div className="w-full">
        <SlideHeader>
          <h1 className="text-5xl font-bold text-pe-teal pb-5 border-b-4 border-pe-teal text-left">
            ONS and HMRC provide firms by coarse turnover band
          </h1>
        </SlideHeader>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col">
            <Image
              src={assetPath("/Screenshot 2025-11-01 at 17.43.00.png")}
              alt="Figure 1: Distribution of UK firms by turnover band, 2024 (ONS)"
              width={600}
              height={450}
              className="h-auto"
            />
          </div>
          <div className="flex flex-col">
            <Image
              src={assetPath("/Screenshot 2025-11-01 at 17.43.11.png")}
              alt="Figure 2: Distribution of VAT-registered firms by turnover band, 2024-25 (HMRC)"
              width={600}
              height={450}
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
