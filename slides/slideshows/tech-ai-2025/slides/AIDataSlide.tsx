import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function AIDataSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Building internally: data</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <h2 className="text-4xl font-semibold text-pe-dark text-left mb-8">
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
        </SlideContent>
      </div>
    </Slide>
  );
}
