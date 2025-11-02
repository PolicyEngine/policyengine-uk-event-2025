import React from 'react';
import Slide from '@/components/Slide';
import SlideLayout from '@/components/SlideLayout';
import BulletList from '@/components/BulletList';
import SlideSubtitle from '@/components/SlideSubtitle';

export default function AIUsesSlide() {
  return (
    <Slide>
      <SlideLayout title="AI at PolicyEngine: two uses">
        <div>
          <SlideSubtitle>
            We use AI in two main ways:
          </SlideSubtitle>
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
        </div>
      </SlideLayout>
    </Slide>
  );
}
