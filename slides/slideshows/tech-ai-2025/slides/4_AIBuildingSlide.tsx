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
            LLM coding agents help us model the household sector
          </SlideSubtitle>

          <BulletList
            size="lg"
            items={[
              {
                text: 'Encoding tax-benefit reforms',
                subtext: 'Going from a policy description to Python implementation',
              },
              {
                text: 'Custom data imputation',
                subtext: 'Imputing data from new surveys (LFS, EHS) at a faster pace. Lots of time is spent reading codebooks!',
              },
              {
                text: 'Pulling out the outputs',
                subtext: 'Scripts to transform household-level results into the metrics people actually care about',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
