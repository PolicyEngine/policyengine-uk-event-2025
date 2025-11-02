import React from 'react';
import Slide from '@/components/Slide';
import TextImageLayout from '@/components/TextImageLayout';
import BulletList from '@/components/BulletList';

export default function HMRCComparisonSlide() {
  return (
    <Slide>
      <TextImageLayout
        title="Comparison with HMRC projections"
        image={{
          src: "/Screenshot 2025-11-01 at 18.12.51.png",
          alt: "HMRC comparison"
        }}
      >
        <BulletList
          size="sm"
          items={[
            {
              text: 'We benchmark our results against HMRC\'s published projections for raising the VAT threshold from £85k to £90k.'
            },
            {
              text: 'We apply OBR Retail Price Index growth to firm turnover and VAT liabilities, holding firm counts constant and assuming no behavioural responses.'
            }
          ]}
        />
      </TextImageLayout>
    </Slide>
  );
}
