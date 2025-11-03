import React from 'react';
import Slide from '@/components/Slide';
import FullscreenButton from './FullscreenButton';

export default function GoogleSlidesEmbed() {
  return (
    <Slide>
      <div className="absolute inset-0 pt-8 pb-24 px-12 flex flex-col">
        <iframe
          id="niesr-review-iframe"
          src="https://docs.google.com/presentation/d/1a9LmIomRpgWeihhyB75eH7fEs2cY1RkSbmrSKSFt7j8/embed?start=false&loop=false&delayms=3000"
          className="w-full flex-1 rounded-lg shadow-2xl mb-3"
          frameBorder="0"
          allowFullScreen={true}
          tabIndex={0}
        />
        <div className="flex justify-center">
          <FullscreenButton iframeId="niesr-review-iframe" />
        </div>
      </div>
    </Slide>
  );
}
