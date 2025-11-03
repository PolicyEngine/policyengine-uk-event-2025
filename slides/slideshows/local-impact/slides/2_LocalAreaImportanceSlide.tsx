import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function LocalAreaImportanceSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Local impacts inform constituency policy</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <BulletList
            size="lg"
            items={[
              {
                text: 'People care about their local areas',
                subtext: 'Communities, councils, and constituents want to understand how policy affects them specifically',
              },
              {
                text: 'Policymakers are directly responsible for local areas',
                subtext: 'MPs represent constituencies and need evidence on local impacts to inform their decisions',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
