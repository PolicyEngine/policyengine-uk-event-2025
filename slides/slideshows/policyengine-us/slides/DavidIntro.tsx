import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SpeakerHeadshot from '@/components/SpeakerHeadshot';
import { getSpeakerById } from '@/lib/speakers';

export default function DavidIntro() {
  const david = getSpeakerById('david-trimmer');

  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>2024 Election Calculator</SlideTitle>
        </SlideHeader>

        <div className="mt-12 flex items-start justify-between gap-12">
          <div className="flex-1 text-left space-y-6">
            <h2 className="text-3xl font-bold text-pe-dark">{david?.name}</h2>
            <p className="text-xl text-gray-700">{david?.title}, {david?.organisation}</p>

            <div className="text-2xl space-y-4 mt-8">
              <p>Interactive calculator comparing Harris vs Trump 2024 policies</p>
              <ul className="list-disc list-inside space-y-3 text-xl ml-4">
                <li>Personalized household impact estimates</li>
                <li>Child Tax Credit expansion (Harris)</li>
                <li>Tax exemptions for tips, overtime, Social Security (Trump)</li>
                <li>Tariff scenarios on imports</li>
                <li>SALT deduction cap changes</li>
              </ul>
            </div>
          </div>

          <div className="flex-shrink-0">
            <SpeakerHeadshot
              name={david!.name}
              imageUrl={david!.headshotUrl}
              size="large"
              position="center"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
