import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';

export default function IntroSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <h1 className="text-5xl font-bold text-pe-teal pb-5 border-b-4 border-pe-teal text-left">
            VAT threshold reform and synthetic data
          </h1>
        </SlideHeader>

        <ul className="space-y-8 text-2xl text-left leading-relaxed pl-4 mt-8" style={{maxWidth: '1250px'}}>
          <li className="flex items-start gap-4">
            <span className="flex-shrink-0 mt-1.5">•</span>
            <span className="leading-normal">
              The UK requires businesses to register for VAT and charge <span className="font-bold">20%</span> on sales once annual turnover exceeds <span className="font-bold">£90,000</span>, an increase from <span className="font-bold">£85,000</span> in 2024–25.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex-shrink-0 mt-1.5">•</span>
            <span className="leading-normal">
              There is active policy debate about whether the VAT registration threshold should be increased further.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex-shrink-0 mt-1.5">•</span>
            <span className="leading-normal">
              We analyse the effects of different VAT registration thresholds and <span className="font-bold">smoothed phase-ins</span> on revenues and the number of VAT-registered firms.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex-shrink-0 mt-1.5">•</span>
            <span className="leading-normal">
              We calibrate synthetic firm microdata using <span className="font-bold">ONS UK Business Statistics</span> for firm distributions and <span className="font-bold">HMRC VAT Statistics</span> for VAT-registered business profiles.
            </span>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
