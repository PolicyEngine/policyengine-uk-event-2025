import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function ContextSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Technology at PolicyEngine</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <BulletList
            size="lg"
            items={[
              {
                text: 'Tech is pretty core to what we do',
              },
              {
                text: 'Using a modern tech stack is critical to being agile',
              },
              {
                text: 'Being agile is critical to providing timely and accurate research that incorporates the best available modelling',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
