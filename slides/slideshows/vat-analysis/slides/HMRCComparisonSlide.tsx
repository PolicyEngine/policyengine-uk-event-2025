import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function HMRCComparisonSlide() {
  return (
    <Slide>
      <div className="w-full">
        <SlideHeader>
          <h1 className="text-5xl font-bold text-pe-teal pb-5 border-b-4 border-pe-teal text-left">
            Comparison with HMRC projections
          </h1>
        </SlideHeader>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <ul className="space-y-8 text-2xl text-left leading-relaxed pl-4">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                We benchmark our results against HMRC's published projections for raising
                the VAT threshold from £85k to £90k.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                We apply OBR Retail Price Index growth to firm turnover and VAT liabilities,
                holding firm counts constant and assuming no behavioural responses.
              </span>
            </li>
          </ul>

          <div className="flex justify-center items-center">
            <Image
              src={assetPath("/Screenshot 2025-11-01 at 18.12.51.png")}
              alt="HMRC comparison"
              width={500}
              height={380}
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
