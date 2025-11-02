import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function ContextSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Technology at PolicyEngine</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <BulletList
            size="lg"
            items={[
              {
                text: 'Effective use of the SOTA is core to PolicyEngine\'s value-add',
              },
              {
                text: 'We think using a modern tech stack is critical to being agile',
              },
              {
                text: 'And we think being agile is critical to maximising accuracy and impact',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
