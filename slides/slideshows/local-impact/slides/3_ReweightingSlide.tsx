import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import SlideSubtitle from '@/components/SlideSubtitle';
import BulletList from '@/components/BulletList';

export default function ReweightingSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Reweighting for accuracy</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <SlideSubtitle>
            Calibrating to administrative statistics improves model accuracy
          </SlideSubtitle>

          <BulletList
            size="lg"
            items={[
              {
                text: 'Survey data needs adjustment',
                subtext: 'Raw survey weights don\'t perfectly match known population statistics',
              },
              {
                text: 'Reweighting calibrates to administrative data',
                subtext: 'Adjusting household weights to match official statistics from HMRC, DWP, and ONS',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
