import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SpeakerHeadshot from '@/components/SpeakerHeadshot';

interface SectionTitleSlideProps {
  sectionTitle: string;
  speakerName: string;
  speakerTitle: string;
  speakerOrganisation: string;
  headshotUrl?: string;
}

export default function SectionTitleSlide({
  sectionTitle,
  speakerName,
  speakerTitle,
  speakerOrganisation,
  headshotUrl
}: SectionTitleSlideProps) {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>{sectionTitle}</SlideTitle>
        </SlideHeader>

        <div className="mt-16 flex items-center justify-between gap-12">
          <div className="flex-grow text-left space-y-3">
            <h2 className="text-4xl font-bold text-pe-dark">{speakerName}</h2>
            <p className="text-2xl text-gray-700">{speakerTitle}</p>
            <p className="text-2xl text-pe-teal">{speakerOrganisation}</p>
          </div>

          <div className="flex-shrink-0">
            <SpeakerHeadshot
              name={speakerName}
              imageUrl={headshotUrl}
              size="large"
              position="center"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}