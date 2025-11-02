import React from 'react';
import Slide from '@/components/Slide';
import EndSlideLayout from '@/components/EndSlideLayout';

export default function EndSlide() {
  return (
    <Slide isEnd showFooter={false}>
      <EndSlideLayout title="Thanks for your attention!" subtitle="" />
    </Slide>
  );
}
