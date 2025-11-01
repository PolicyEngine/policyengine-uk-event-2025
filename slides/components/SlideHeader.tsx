import React, { ReactNode } from 'react';
import Image from 'next/image';

interface SlideHeaderProps {
  children: ReactNode;
  showLogo?: boolean;
}

export default function SlideHeader({ children, showLogo = true }: SlideHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-8 mb-10">
      <div className="flex-1">
        {children}
      </div>
      {showLogo && (
        <div className="flex-shrink-0 pt-2">
          <Image
            src="/logos/profile_teal_bg.png"
            alt="PolicyEngine"
            width={60}
            height={60}
            className="opacity-90"
          />
        </div>
      )}
    </div>
  );
}
