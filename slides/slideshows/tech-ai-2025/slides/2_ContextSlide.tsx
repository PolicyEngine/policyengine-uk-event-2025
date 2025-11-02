import React from 'react';
import Slide from '@/components/Slide';
import SlideLayout from '@/components/SlideLayout';
import BulletList from '@/components/BulletList';

export default function ContextSlide() {
  return (
    <Slide>
      <SlideLayout title="Technology at PolicyEngine">
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
      </SlideLayout>
    </Slide>
  );
}
