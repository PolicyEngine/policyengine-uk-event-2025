import React, { ReactNode } from 'react';

interface SlideSubtitleProps {
  children: ReactNode;
}

export default function SlideSubtitle({ children }: SlideSubtitleProps) {
  return (
    <h2 className="text-5xl font-semibold text-pe-dark text-left mb-12">
      {children}
    </h2>
  );
}
