import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function ThreePillarsSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Our AI roadmap: three pillars</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <BulletList
            size="lg"
            items={[
              {
                text: 'Building our software',
                subtext: 'Claude Code plugin and automated rules-as-code',
              },
              {
                text: 'Improving our models',
                subtext: 'Local area modeling and synthetic panel data',
              },
              {
                text: 'Augmenting our software',
                subtext: 'Natural language interfaces in app v2',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
