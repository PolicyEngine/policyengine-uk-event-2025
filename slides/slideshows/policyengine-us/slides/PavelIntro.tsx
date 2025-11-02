import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SpeakerHeadshot from '@/components/SpeakerHeadshot';
import { getSpeakerById } from '@/lib/speakers';

export default function PavelIntro() {
  const pavel = getSpeakerById('pavel-makarchuk');

  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>OBBBA household-by-household explorer</SlideTitle>
        </SlideHeader>

        <div className="mt-12 flex items-start justify-between gap-12">
          <div className="flex-1 text-left space-y-6">
            <h2 className="text-3xl font-bold text-pe-dark">{pavel?.name}</h2>
            <p className="text-xl text-gray-700">{pavel?.title}, {pavel?.organisation}</p>

            <div className="text-2xl space-y-4 mt-8">
              <p className="font-semibold text-pe-teal">One Big Beautiful Bill Act (OBBBA) reconciliation analysis</p>
              <ul className="list-disc list-inside space-y-3 text-xl ml-4">
                <li>40,000+ representative households analyzed</li>
                <li>Enhanced Current Population Survey dataset</li>
                <li>TCJA extension provisions</li>
                <li>Child Tax Credit modifications</li>
                <li>SALT deduction cap changes</li>
                <li>Benefits impacts: SNAP, Medicaid, ACA Premium Tax Credits</li>
              </ul>
            </div>
          </div>

          <div className="flex-shrink-0">
            <SpeakerHeadshot
              name={pavel!.name}
              imageUrl={pavel!.headshotUrl}
              size="large"
              position="center"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
