import React, { ReactNode } from 'react';
import Image from 'next/image';
import SlideLayout from './SlideLayout';
import SlideContent from './SlideContent';

interface TextImageLayoutProps {
  title: string;
  children: ReactNode;
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
  imagePosition?: 'left' | 'right';
}

export default function TextImageLayout({
  title,
  children,
  image,
  imagePosition = 'right'
}: TextImageLayoutProps) {
  const textContent = (
    <div className="flex-1">
      {children}
    </div>
  );

  const imageContent = (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="relative" style={{ maxWidth: '500px' }}>
        <Image
          src={image.src}
          alt={image.alt}
          width={500}
          height={375}
          className="w-full h-auto object-contain"
        />
      </div>
      {image.caption && (
        <p className="mt-2 text-sm text-gray-600 text-center">
          {image.caption}
        </p>
      )}
    </div>
  );

  return (
    <SlideLayout title={title}>
      <SlideContent columns={2}>
        {imagePosition === 'left' ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </SlideContent>
    </SlideLayout>
  );
}