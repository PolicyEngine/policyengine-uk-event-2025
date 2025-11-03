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
      <div className="">
        <SlideHeader>
          <SlideTitle>LLM coding agents accelerate development</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">

          <BulletList
            size="lg"
            items={[
              {
                text: 'Encoding tax-benefit reforms',
                subtext: 'From policy description to Python implementation',
              },
              {
                text: 'Custom data imputation',
                subtext: 'Imputing data from new surveys (LFS, EHS). AI reads codebooks!',
              },
              {
                text: 'Analysis scripts',
                subtext: 'Transform household-level results into policy metrics',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
