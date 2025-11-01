import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function AIUsesSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>AI at PolicyEngine: two uses</SlideTitle>
        </SlideHeader>

        <p className="text-xl mb-6">We use AI in two main ways:</p>

        <SlideContent size="lg">
          <BulletList
            size="lg"
            items={[
              {
                text: 'Building internally',
                subtext: 'LLM coding agents for faster policy modelling and data work',
              },
              {
                text: 'Communicating externally',
                subtext: 'Dashboards, calculators, and presentations',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
