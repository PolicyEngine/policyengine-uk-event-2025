import React from 'react';
import Image from 'next/image';
import SlideLayout from './SlideLayout';

interface SingleImageLayoutProps {
  title: string;
  src: string;
  alt: string;
  caption?: string;
  maxWidth?: number;
}

export default function SingleImageLayout({
  title,
  src,
  alt,
  caption,
  maxWidth = 900
}: SingleImageLayoutProps) {
  return (
    <SlideLayout title={title}>
      <div className="flex flex-col items-center">
        <div className="relative" style={{ maxWidth: `${maxWidth}px` }}>
          <Image
            src={src}
            alt={alt}
            width={maxWidth}
            height={Math.floor(maxWidth * 0.75)}
            className="w-full h-auto object-contain"
          />
        </div>
        {caption && (
          <p className="mt-4 text-base text-gray-600 text-center">
            {caption}
          </p>
        )}
      </div>
    </SlideLayout>
  );
}