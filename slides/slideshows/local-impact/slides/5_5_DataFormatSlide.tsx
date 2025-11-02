import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import SlideSubtitle from '@/components/SlideSubtitle';
import BulletList from '@/components/BulletList';

export default function DataFormatSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Data output format</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <SlideSubtitle>
            650,100k weights for UK constituencies
          </SlideSubtitle>

          <BulletList
            size="lg"
            items={[
              {
                text: 'Weight file for each constituency',
                subtext: '100k Enhanced FRS households × 650 constituencies',
              },
              {
                text: 'Flexible analysis across all areas',
                subtext: 'Same base dataset, different weights for each constituency',
              },
              {
                text: 'US: L0 optimised sampling',
                subtext: 'Smaller datasets improve efficiency and accuracy by allowing local records to represent local policy outcomes',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
