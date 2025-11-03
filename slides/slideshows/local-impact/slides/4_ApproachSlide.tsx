import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import SlideSubtitle from '@/components/SlideSubtitle';
import BulletList from '@/components/BulletList';

export default function ApproachSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>We apply this to any geographic level</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <BulletList
            size="lg"
            items={[
              {
                text: 'From national to local',
                subtext: 'The same reweighting methodology works at any geographic level',
              },
              {
                text: 'Including constituencies and local authorities',
                subtext: 'We can calibrate to administrative data for specific local areas',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
