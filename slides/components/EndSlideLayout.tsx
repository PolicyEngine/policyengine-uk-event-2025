import React from 'react';
import SlideTitle from './SlideTitle';

interface EndSlideLayoutProps {
  title?: string;
  subtitle?: string;
  email?: string;
}

export default function EndSlideLayout({ title = 'Thank you', subtitle = 'Questions?', email }: EndSlideLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <SlideTitle isEnd>{title}</SlideTitle>
      <div className="text-2xl text-white space-y-6 text-center">
        {subtitle && <p className="text-3xl font-medium">{subtitle}</p>}
        {email && <p className="opacity-90">{email}</p>}
      </div>
    </div>
  );
}