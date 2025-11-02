import React from 'react';
import SlideTitle from './SlideTitle';

interface CoverSlideLayoutProps {
  title: string;
  presenter?: string;
  organization?: string;
  date?: string;
  location?: string;
}

export default function CoverSlideLayout({ title, presenter, organization, date, location }: CoverSlideLayoutProps) {
  return (
    <div className="flex flex-col justify-center space-y-16">
      <SlideTitle isCover>
        {title}
      </SlideTitle>
      <div className="text-3xl text-white space-y-3">
        {presenter && <p className="font-medium">{presenter}</p>}
        {organization && <p>{organization}</p>}
        {date && <p className="font-medium">{date}</p>}
        {location && <p>{location}</p>}
      </div>
    </div>
  );
}