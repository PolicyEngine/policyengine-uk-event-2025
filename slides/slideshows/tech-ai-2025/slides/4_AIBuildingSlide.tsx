import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import SlideSubtitle from '@/components/SlideSubtitle';
import BulletList from '@/components/BulletList';

export default function AIBuildingSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Building internally</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <SlideSubtitle>
            LLM coding agents for policy modelling
          </SlideSubtitle>

          <BulletList
            size="lg"
            items={[
              {
                text: 'Structural tax-benefit reforms',
                subtext: 'Rapid implementation of Budget changes and policy proposals',
              },
              {
                text: 'Custom data imputation',
                subtext: 'Imputing data from new surveys (LFS, EHS) at a fast pace',
              },
              {
                text: 'Time from announcement to model: hours instead of weeks',
                subtext: 'Example: Autumn Budget 2024 NICs changes modelled same day',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
