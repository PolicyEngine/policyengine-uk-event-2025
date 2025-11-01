import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SpeakerHeadshot from '@/components/SpeakerHeadshot';
import { getSpeakerById } from '@/lib/speakers';

interface SectionTitleSlideProps {
  title?: string;
  sectionTitle?: string; // Deprecated, use title
  speakerId?: string;
  speakerIds?: string[];
  // Legacy props for backwards compatibility
  speakerName?: string;
  speakerTitle?: string;
  speakerOrganisation?: string;
  headshotUrl?: string;
}

export default function SectionTitleSlide({
  title,
  sectionTitle,
  speakerId,
  speakerIds,
  speakerName,
  speakerTitle: speakerTitleProp,
  speakerOrganisation,
  headshotUrl
}: SectionTitleSlideProps) {
  const slideTitle = title || sectionTitle;

  // Handle single speaker by ID
  if (speakerId) {
    const speaker = getSpeakerById(speakerId);
    if (speaker) {
      return (
        <Slide>
          <div className="max-w-7xl">
            <SlideHeader>
              <SlideTitle>{slideTitle}</SlideTitle>
            </SlideHeader>

            <div className="mt-16 flex items-center justify-between gap-12">
              <div className="flex-grow text-left space-y-3">
                <h2 className="text-4xl font-bold text-pe-dark">{speaker.name}</h2>
                <p className="text-2xl text-gray-700">{speaker.title}</p>
                <p className="text-2xl text-pe-teal">{speaker.organisation}</p>
              </div>

              <div className="flex-shrink-0">
                <SpeakerHeadshot
                  name={speaker.name}
                  imageUrl={speaker.headshotUrl}
                  size="large"
                  position="center"
                />
              </div>
            </div>
          </div>
        </Slide>
      );
    }
  }

  // Handle multiple speakers by IDs
  if (speakerIds && speakerIds.length > 0) {
    const speakers = speakerIds.map(id => getSpeakerById(id)).filter(Boolean);

    return (
      <Slide>
        <div className="max-w-7xl">
          <SlideHeader>
            <SlideTitle>{slideTitle}</SlideTitle>
          </SlideHeader>

          <div className="mt-16 flex items-center justify-between gap-12">
            <div className="flex-grow text-left space-y-6">
              {speakers.map((speaker, idx) => (
                <div key={idx} className="space-y-2">
                  <h2 className="text-4xl font-bold text-pe-dark">{speaker!.name}</h2>
                  <p className="text-2xl text-gray-700">{speaker!.title}</p>
                  <p className="text-2xl text-pe-teal">{speaker!.organisation}</p>
                </div>
              ))}
            </div>

            <div className="flex-shrink-0 flex flex-col gap-6">
              {speakers.map((speaker, idx) => (
                <SpeakerHeadshot
                  key={idx}
                  name={speaker!.name}
                  imageUrl={speaker!.headshotUrl}
                  size="large"
                  position="center"
                />
              ))}
            </div>
          </div>
        </div>
      </Slide>
    );
  }

  // Legacy backwards compatibility - direct props
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>{slideTitle}</SlideTitle>
        </SlideHeader>

        <div className="mt-16 flex items-center justify-between gap-12">
          <div className="flex-grow text-left space-y-3">
            <h2 className="text-4xl font-bold text-pe-dark">{speakerName}</h2>
            <p className="text-2xl text-gray-700">{speakerTitleProp}</p>
            <p className="text-2xl text-pe-teal">{speakerOrganisation}</p>
          </div>

          <div className="flex-shrink-0">
            <SpeakerHeadshot
              name={speakerName!}
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
