import React from 'react';
import Slide from '@/components/Slide';
import FullscreenButton from './FullscreenButton';

export default function GoogleSlidesEmbed() {
  return (
    <Slide>
      <div className="absolute inset-0 pt-8 pb-24 px-12 flex flex-col">
        <iframe
          id="carbon-dividend-iframe"
          src="https://docs.google.com/presentation/d/19yRatNQKqzKwT5v1HlCtpHjksXRBGddb/embed?start=false&loop=false&delayms=3000"
          className="w-full flex-1 rounded-lg shadow-2xl mb-3"
          frameBorder="0"
          allowFullScreen={true}
          tabIndex={0}
        />
        <div className="flex justify-center">
          <FullscreenButton iframeId="carbon-dividend-iframe" />
        </div>
      </div>
    </Slide>
  );
}
