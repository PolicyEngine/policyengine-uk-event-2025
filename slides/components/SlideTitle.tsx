import React, { ReactNode } from 'react';

interface SlideTitleProps {
  children: ReactNode;
  isCover?: boolean;
  isEnd?: boolean;
}

export default function SlideTitle({ children, isCover = false, isEnd = false }: SlideTitleProps) {
  if (isCover || isEnd) {
    return (
      <h1 className="text-7xl font-bold text-white mb-10 leading-tight text-left">
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
