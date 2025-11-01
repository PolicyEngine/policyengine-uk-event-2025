import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SpeakerHeadshot from '@/components/SpeakerHeadshot';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
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
        <Slide className="!bg-transparent gradient-bg" showFooter={false}>
          <div className="max-w-7xl">
            {/* Custom header with white logo */}
            <div className="flex items-start justify-between gap-8 mb-10">
              <div className="flex-1">
                <SlideTitle className="text-white border-white">{slideTitle}</SlideTitle>
              </div>
              <div className="flex-shrink-0 pt-2">
                <Image
                  src={assetPath("/logos/profile_white.svg")}
                  alt="PolicyEngine"
                  width={60}
                  height={60}
                  className="opacity-90"
                />
              </div>
            </div>

            <div className="mt-16 flex items-center justify-between gap-12">
              <div className="flex-grow text-left space-y-3">
                <h2 className="text-4xl font-bold text-white">{speaker.name}</h2>
                <p className="text-2xl text-white/90">{speaker.title}</p>
                <p className="text-2xl text-white/80">{speaker.organisation}</p>
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
      <Slide className="!bg-transparent gradient-bg" showFooter={false}>
        <div className="max-w-7xl">
          {/* Custom header with white logo */}
          <div className="flex items-start justify-between gap-8 mb-10">
            <div className="flex-1">
              <SlideTitle className="text-white border-white">{slideTitle}</SlideTitle>
            </div>
            <div className="flex-shrink-0 pt-2">
              <Image
                src={assetPath("/logos/profile_white.svg")}
                alt="PolicyEngine"
                width={60}
                height={60}
                className="opacity-90"
              />
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between gap-12">
            <div className="flex-grow text-left space-y-6">
              {speakers.map((speaker, idx) => (
                <div key={idx} className="space-y-2">
                  <h2 className="text-4xl font-bold text-white">{speaker!.name}</h2>
                  <p className="text-2xl text-white/90">{speaker!.title}</p>
                  <p className="text-2xl text-white/80">{speaker!.organisation}</p>
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
    <Slide className="!bg-transparent gradient-bg" showFooter={false}>
      <div className="max-w-7xl">
        {/* Custom header with white logo */}
        <div className="flex items-start justify-between gap-8 mb-10">
          <div className="flex-1">
            <SlideTitle className="text-white border-white">{slideTitle}</SlideTitle>
          </div>
          <div className="flex-shrink-0 pt-2">
            <Image
              src={assetPath("/logos/profile_white.svg")}
              alt="PolicyEngine"
              width={60}
              height={60}
              className="opacity-90"
            />
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between gap-12">
          <div className="flex-grow text-left space-y-3">
            <h2 className="text-4xl font-bold text-white">{speakerName}</h2>
            <p className="text-2xl text-white/90">{speakerTitleProp}</p>
            <p className="text-2xl text-white/80">{speakerOrganisation}</p>
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
