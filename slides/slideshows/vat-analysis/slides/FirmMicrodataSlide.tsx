import React from 'react';
import Slide from '@/components/Slide';
import TextImageLayout from '@/components/TextImageLayout';
import BulletList from '@/components/BulletList';

export default function FirmMicrodataSlide() {
  return (
    <Slide>
      <TextImageLayout
        title="Firm-level microdata"
        image={{
          src: "/Screenshot 2025-11-01 at 17.47.25.png",
          alt: "Firm-level microdata"
        }}
      >
        <BulletList
          size="sm"
          items={[
            {
              text: 'We construct synthetic firm microdata using weight optimisation and multi-objective calibration to match ONS firm structures and HMRC VAT profiles.'
            },
            {
              text: 'We capture turnover, sector, employment size, and VAT liability with over 200 calibration targets.'
            }
          ]}
        />
      </TextImageLayout>
    </Slide>
  );
}
