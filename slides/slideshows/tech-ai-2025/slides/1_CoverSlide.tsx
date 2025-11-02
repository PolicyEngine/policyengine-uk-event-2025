import React from 'react';
import Slide from '@/components/Slide';
import CoverSlideLayout from '@/components/CoverSlideLayout';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <CoverSlideLayout
        title="Technology and AI at PolicyEngine"
        presenter="Nikhil Woodruff"
        organization="PolicyEngine"
      />
    </Slide>
  );
}
