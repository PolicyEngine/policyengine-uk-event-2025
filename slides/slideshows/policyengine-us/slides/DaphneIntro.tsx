import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SpeakerHeadshot from '@/components/SpeakerHeadshot';
import { getSpeakerById } from '@/lib/speakers';

export default function DaphneIntro() {
  const daphne = getSpeakerById('daphne-hansell');

  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>ACA-Calc: Affordable Care Act premium tax credits</SlideTitle>
        </SlideHeader>

        <div className="mt-12 flex items-start justify-between gap-12">
          <div className="flex-1 text-left space-y-6">
            <h2 className="text-3xl font-bold text-pe-dark">{daphne?.name}</h2>
            <p className="text-xl text-gray-700">{daphne?.title}, {daphne?.organisation}</p>

            <div className="text-2xl space-y-4 mt-8">
              <p className="font-semibold text-pe-teal">Interactive ACA premium tax credit calculator</p>
              <ul className="list-disc list-inside space-y-3 text-xl ml-4">
                <li>Enhanced vs original subsidy schedules</li>
                <li>County-level benchmark premium data</li>
                <li>Expiration analysis (enhanced credits end 2025)</li>
                <li>Household-specific impact estimates</li>
                <li>Marginal tax rate analysis</li>
                <li>Medicaid/CHIP interaction modeling</li>
              </ul>
            </div>
          </div>

          <div className="flex-shrink-0">
            <SpeakerHeadshot
              name={daphne!.name}
              imageUrl={daphne!.headshotUrl}
              size="large"
              position="center"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
