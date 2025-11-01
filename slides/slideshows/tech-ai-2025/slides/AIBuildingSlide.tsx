import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function AIBuildingSlide() {
  return (
    <Slide>
      <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
        <SlideHeader>
          <SlideTitle>Building internally: coding</SlideTitle>
        </SlideHeader>

        <div className="mt-16">
          <h2 className="text-4xl font-semibold text-pe-dark text-left mb-12">
            Modelling policy in Python
          </h2>

          <BulletList
            size="lg"
            items={[
              {
                text: 'Claude Code and other LLMs accelerate policy rule implementation',
                subtext: 'Natural language descriptions guide code generation',
              },
              {
                text: 'Automated testing catches errors before deployment',
              },
              {
                text: 'Time from policy announcement to model update: hours instead of weeks',
                subtext: 'Example: Autumn Budget 2024 NICs changes modelled same day',
              },
            ]}
          />
        </div>
      </div>
    </Slide>
  );
}
