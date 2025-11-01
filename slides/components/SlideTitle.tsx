import React, { ReactNode } from 'react';

interface SlideTitleProps {
  children: ReactNode;
  isCover?: boolean;
  isEnd?: boolean;
  className?: string;
}

export default function SlideTitle({ children, isCover = false, isEnd = false, className = '' }: SlideTitleProps) {
  if (isCover || isEnd) {
    return (
      <h1 className={`text-7xl font-bold text-white mb-10 leading-tight text-left ${className}`}>
        {children}
      </h1>
    );
  }

  // Allow className override for custom styles
  if (className) {
    return (
      <h1 className={`text-6xl font-bold pb-5 border-b-4 text-left ${className}`}>
        {children}
      </h1>
    );
  }

  return (
    <h1 className="text-6xl font-bold text-pe-teal pb-5 border-b-4 border-pe-teal text-left">
      {children}
    </h1>
  );
}
