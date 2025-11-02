import React from 'react';
import Image from 'next/image';

export interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

interface ImageGridProps {
  images: ImageItem[];
  columns?: 1 | 2 | 3;
  gap?: 'sm' | 'md' | 'lg';
  captionSize?: 'sm' | 'md';
}

export default function ImageGrid({
  images,
  columns = 2,
  gap = 'md',
  captionSize = 'sm'
}: ImageGridProps) {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-8',
    lg: 'gap-12',
  };

  const captionSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
  };

  const gridColsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
  };

  return (
    <div className={`grid ${gridColsClasses[columns]} ${gapClasses[gap]} mt-8 w-full`}>
      {images.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative w-full" style={{ maxWidth: columns === 1 ? '900px' : '550px' }}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || (columns === 1 ? 900 : 550)}
              height={image.height || (columns === 1 ? 675 : 400)}
              className="w-full h-auto object-contain"
            />
          </div>
          {image.caption && (
            <p className={`mt-2 text-gray-600 text-center ${captionSizeClasses[captionSize]}`}>
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}