import React from 'react';
import Slide from '@/components/Slide';
import TwoImageLayout from '@/components/TwoImageLayout';

export default function FirmDistributionSlide() {
  return (
    <Slide>
      <TwoImageLayout
        title="Firm turnover distribution (ONS and HMRC)"
        images={[
          {
            src: "/Screenshot 2025-11-01 at 17.43.00.png",
            alt: "Distribution of UK firms by turnover band, 2024 (ONS)",
            caption: "Figure 1: Distribution of UK firms by turnover band, 2024 (ONS)"
          },
          {
            src: "/Screenshot 2025-11-01 at 17.43.11.png",
            alt: "Distribution of VAT-registered firms by turnover band, 2024-25 (HMRC)",
            caption: "Figure 2: Distribution of VAT-registered firms by turnover band, 2024-25 (HMRC)"
          }
        ]}
      />
    </Slide>
  );
}
