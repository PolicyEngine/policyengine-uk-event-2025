import React from 'react';
import Slide from '@/components/Slide';
import SpeakerHeadshot from '@/components/SpeakerHeadshot';

interface SpeakerIntroSlideProps {
  name: string;
  title: string;
  organisation: string;
  headshotUrl?: string;
  presentationTitle?: string;
}

export default function SpeakerIntroSlide({
  name,
  title,
  organisation,
  headshotUrl,
  presentationTitle
}: SpeakerIntroSlideProps) {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center space-y-8">
          <SpeakerHeadshot
            name={name}
            imageUrl={headshotUrl}
            size="large"
            position="center"
          />

          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-pe-dark">{name}</h2>
            <p className="text-2xl text-gray-700">{title}</p>
            <p className="text-2xl text-pe-teal">{organisation}</p>
          </div>

          {presentationTitle && (
            <div className="mt-8 pt-8 border-t-2 border-gray-200">
              <p className="text-xl text-gray-600 italic">Next:</p>
              <p className="text-2xl font-semibold text-pe-dark mt-2">{presentationTitle}</p>
            </div>
          )}
        </div>
      </div>
    </Slide>
  );
}