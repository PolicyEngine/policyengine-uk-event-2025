import React from 'react';
import Slide from '@/components/Slide';
import SlideLayout from '@/components/SlideLayout';
import BulletList from '@/components/BulletList';

export default function IntroSlide() {
  return (
    <Slide>
      <SlideLayout title="VAT threshold reform and synthetic data">
        <BulletList
          size="sm"
          items={[
            {
              text: 'The UK requires businesses to register for VAT and charge 20% on sales once annual turnover exceeds £90,000, an increase from £85,000 in 2024–25.'
            },
            {
              text: 'There is active policy debate about whether the VAT registration threshold should be increased further.'
            },
            {
              text: 'We analyse the effects of different VAT registration thresholds and smoothed phase-ins on revenues and the number of VAT-registered firms.'
            },
            {
              text: 'We calibrate synthetic firm microdata using ONS UK Business Statistics for firm distributions and HMRC VAT Statistics for VAT-registered business profiles.'
            }
          ]}
        />
      </SlideLayout>
    </Slide>
  );
}
