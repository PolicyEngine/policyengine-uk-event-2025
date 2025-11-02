import React, { ReactNode } from 'react';
import SlideHeader from './SlideHeader';
import SlideTitle from './SlideTitle';

interface SlideLayoutProps {
  title: string;
  children: ReactNode;
  centered?: boolean;
}

export default function SlideLayout({ title, children, centered = true }: SlideLayoutProps) {
  return (
    <div className="w-full h-full flex flex-col">
      <SlideHeader>
        <SlideTitle>{title}</SlideTitle>
      </SlideHeader>

      {centered ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full">
            {children}
          </div>
        </div>
      ) : (
        <div className="flex-1">
          {children}
        </div>
      )}
    </div>
  );
}