import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import { agenda } from '@/lib/agenda';
import { getSpeakerById } from '@/lib/speakers';

export default function AgendaSlide() {
  // Filter to main talks/demos/panels (exclude networking/breaks)
  const mainItems = agenda.filter(
    item => item.type === 'talk' || item.type === 'demo' || item.type === 'panel'
  );

  // Split into two columns
  const midpoint = Math.ceil(mainItems.length / 2);
  const leftColumn = mainItems.slice(0, midpoint);
  const rightColumn = mainItems.slice(midpoint);

  const renderAgendaItem = (item: typeof agenda[0]) => {
    return (
      <div key={item.time} className="mb-3">
        <div className="text-pe-teal font-semibold text-xs">{item.time}</div>
        <div className="font-bold text-sm leading-tight mt-1">{item.title}</div>
        {item.speakerIds && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
            {item.speakerIds.map(speakerId => {
              const speaker = getSpeakerById(speakerId);
              if (!speaker) return null;
              return (
                <div key={speakerId} className="flex items-center gap-1">
                  <img
                    src={speaker.headshotUrl}
                    alt={speaker.name}
                    className="w-5 h-5 rounded-full object-cover border border-pe-teal flex-shrink-0"
                  />
                  <span className="text-xs italic text-gray-600">
                    {speaker.name}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Event agenda</SlideTitle>
        </SlideHeader>

        <div className="mt-6 grid grid-cols-2 gap-8 text-left">
          <div>
            {leftColumn.map(renderAgendaItem)}
          </div>
          <div>
            {rightColumn.map(renderAgendaItem)}
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          3 November 2025 • Central Hall Westminster, London
        </div>
      </div>
    </Slide>
  );
}
