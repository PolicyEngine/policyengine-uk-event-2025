import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col justify-center space-y-16">
        <SlideTitle isCover>
          Localising policy impact:<br />
          Parliamentary constituencies and local authorities
        </SlideTitle>

        <div className="text-3xl text-white space-y-3 text-left">
          <p className="font-medium">Nikhil Woodruff and Ben Ogorek</p>
          <p>PolicyEngine</p>
        </div>
      </div>
    </Slide>
  );
}
