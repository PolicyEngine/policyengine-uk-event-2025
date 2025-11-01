import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function AIDataSlide() {
  return (
    <Slide>
      <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
        <SlideHeader>
          <SlideTitle>Building internally: data</SlideTitle>
        </SlideHeader>

        <div className="mt-16">
          <h2 className="text-4xl font-semibold text-pe-dark text-left mb-12">
            Dataset enhancement with machine learning
          </h2>

          <BulletList
            size="lg"
            items={[
              {
                text: 'Neural network reweighting to match administrative targets',
                subtext: 'Calibrating survey data to DWP, HMRC statistics',
              },
              {
                text: 'Imputation models for missing variables',
                subtext: 'Income, assets, programme participation',
              },
              {
                text: 'Privacy-preserving synthetic data generation',
              },
            ]}
          />
        </div>
      </div>
    </Slide>
  );
}
