import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import SlideSubtitle from '@/components/SlideSubtitle';
import BulletList from '@/components/BulletList';

export default function AIImprovingSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Machine learning enhances data quality</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">

          <BulletList
            size="lg"
            items={[
              {
                text: 'Quantile random forests (QRF)',
                subtext: 'Impute missing variables in survey microdata',
              },
              {
                text: 'Gradient descent optimisation',
                subtext: 'Calibrate survey weights to population targets',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
