'use client';

import React from 'react';
import Image from 'next/image';

interface SpeakerHeadshotProps {
  name: string;
  imageUrl?: string;
  title?: string;
  organisation?: string;
  size?: 'small' | 'medium' | 'large';
  position?: 'left' | 'right' | 'center';
}

export default function SpeakerHeadshot({
  name,
  imageUrl,
  title,
  organisation,
  size = 'medium',
  position = 'right'
}: SpeakerHeadshotProps) {
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-48 h-48'
  };

  const positionClasses = {
    left: 'float-left mr-8',
    right: 'float-right ml-8',
    center: 'mx-auto'
  };

  // Create initials fallback if no image
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Check if the image exists (simple check for now)
  const [imageExists, setImageExists] = React.useState(false);

  React.useEffect(() => {
    if (imageUrl) {
      const img = new window.Image();
      img.onload = () => setImageExists(true);
      img.onerror = () => setImageExists(false);
      img.src = imageUrl;
    }
  }, [imageUrl]);

  return (
    <div className={`${positionClasses[position]} ${position === 'center' ? 'text-center' : ''}`}>
      <div className={`${sizeClasses[size]} relative overflow-hidden rounded-full bg-pe-teal/20 border-2 border-pe-teal`}>
        {imageUrl && imageExists ? (
          <Image
            src={imageUrl}
            alt={`${name} headshot`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pe-teal/30 to-pe-teal/10">
            <span className="text-3xl font-bold text-pe-dark">{initials}</span>
          </div>
        )}
      </div>
      {(title || organisation) && (
        <div className={`mt-2 ${position === 'center' ? 'text-center' : ''}`}>
          <p className="text-sm font-semibold text-pe-dark">{name}</p>
          {title && <p className="text-xs text-gray-600">{title}</p>}
          {organisation && <p className="text-xs text-gray-600">{organisation}</p>}
        </div>
      )}
    </div>
  );
}