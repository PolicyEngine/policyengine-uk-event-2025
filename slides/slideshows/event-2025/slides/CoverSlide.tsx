import React from 'react';
import Slide from '@/components/Slide';
import CoverSlideLayout from '@/components/CoverSlideLayout';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <CoverSlideLayout
        title="PolicyEngine 2.0 and the future of public policy analysis"
        date="3 November 2025"
        location="Central Hall Westminster, London"
      />
    </Slide>
  );
}
