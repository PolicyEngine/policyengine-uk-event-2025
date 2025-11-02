import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import SlideSubtitle from '@/components/SlideSubtitle';
import BulletList from '@/components/BulletList';

export default function CalibrationSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What we calibrate to</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <SlideSubtitle>
            Using the best available administrative data
          </SlideSubtitle>

          <BulletList
            size="lg"
            items={[
              {
                text: 'ONS age breakdowns',
                subtext: 'Population demographics by age group',
              },
              {
                text: 'HMRC income statistics',
                subtext: 'Income distribution from tax records',
              },
              {
                text: 'UC claimant counts',
                subtext: 'Universal credit recipient numbers from DWP',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
