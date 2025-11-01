import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function ContextSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>AI at PolicyEngine: two uses</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <BulletList
            size="lg"
            items={[
              {
                text: 'Building internally',
                subtext: 'Dataset enhancement and faster policy modelling',
              },
              {
                text: 'Communicating research',
                subtext: 'Dashboards, calculators, and presentations',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
