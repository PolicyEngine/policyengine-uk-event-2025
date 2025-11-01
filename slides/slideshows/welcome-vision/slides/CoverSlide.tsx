import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SpeakerHeadshot from '@/components/SpeakerHeadshot';
import { speakers } from '@/lib/speakers';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col items-center justify-center space-y-12">
        <SlideTitle isCover>
          Welcome and vision
        </SlideTitle>
        <SpeakerHeadshot
          name={speakers.maxGhenis.name}
          imageUrl={speakers.maxGhenis.headshotUrl}
          size="large"
          position="center"
        />
        <div className="text-3xl text-white space-y-3 text-center">
          <p className="font-medium">Max Ghenis</p>
          <p>Founder & CEO, PolicyEngine</p>
        </div>
      </div>
    </Slide>
  );
}