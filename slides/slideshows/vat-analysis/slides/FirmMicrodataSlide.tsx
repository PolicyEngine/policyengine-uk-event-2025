import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function FirmMicrodataSlide() {
  return (
    <Slide>
      <div className="w-full">
        <SlideHeader>
          <h1 className="text-5xl font-bold text-pe-teal pb-5 border-b-4 border-pe-teal text-left">
            We use ML to synthesize detailed firm microdata
          </h1>
        </SlideHeader>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <ul className="space-y-8 text-2xl text-left leading-relaxed pl-4">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                We construct synthetic firm microdata using weight optimisation and multi-objective
                calibration to match ONS firm structures and HMRC VAT profiles
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                We capture turnover, sector, employment size, and VAT liability with
                over <span className="font-bold">200</span> calibration targets
              </span>
            </li>
          </ul>

          <div className="flex justify-center items-center">
            <Image
              src={assetPath("/Screenshot 2025-11-01 at 17.47.25.png")}
              alt="Firm-level microdata"
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
