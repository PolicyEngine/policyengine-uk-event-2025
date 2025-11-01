import React from 'react';
import Slide from '@/components/Slide';
import SpeakerHeadshot from '@/components/SpeakerHeadshot';

interface Speaker {
  name: string;
  title: string;
  organisation: string;
  headshotUrl?: string;
}

interface MultiSpeakerIntroSlideProps {
  speakers: Speaker[];
  presentationTitle?: string;
}

export default function MultiSpeakerIntroSlide({
  speakers,
  presentationTitle
}: MultiSpeakerIntroSlideProps) {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex gap-12 items-start">
            {speakers.map((speaker, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <SpeakerHeadshot
                  name={speaker.name}
                  imageUrl={speaker.headshotUrl}
                  size="medium"
                  position="center"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-pe-dark">{speaker.name}</h3>
                  <p className="text-lg text-gray-700">{speaker.title}</p>
                  <p className="text-lg text-pe-teal">{speaker.organisation}</p>
                </div>
              </div>
            ))}
          </div>

          {presentationTitle && (
            <div className="mt-8 pt-8 border-t-2 border-gray-200 w-full max-w-3xl">
              <p className="text-xl text-gray-600 italic text-center">Next:</p>
              <p className="text-2xl font-semibold text-pe-dark mt-2 text-center">
                {presentationTitle}
              </p>
            </div>
          )}
        </div>
      </div>
    </Slide>
  );
}