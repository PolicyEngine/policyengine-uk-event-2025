import React from 'react';
import Slide from '@/components/Slide';
import CoverSlideLayout from '@/components/CoverSlideLayout';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <CoverSlideLayout
        title="VAT analysis with synthetic firm microdata"
        presenter="Vahid Ahmadi"
        organization="Research Associate at PolicyEngine"
      />
    </Slide>
  );
}
