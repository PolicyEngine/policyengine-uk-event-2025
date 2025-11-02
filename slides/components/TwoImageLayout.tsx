import React from 'react';
import Image from 'next/image';
import SlideLayout from './SlideLayout';

interface TwoImageLayoutProps {
  title: string;
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export default function TwoImageLayout({ title, images }: TwoImageLayoutProps) {
  if (images.length !== 2) {
    throw new Error('TwoImageLayout requires exactly 2 images');
  }

  return (
    <SlideLayout title={title}>
      <div className="grid grid-cols-2 gap-8 px-8">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full" style={{ maxWidth: '550px' }}>
              <Image
                src={image.src}
                alt={image.alt}
                width={550}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            {image.caption && (
              <p className="mt-2 text-sm text-gray-600 text-center">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}