'use client';

import React from 'react';

interface OpenDashboardButtonProps {
  url: string;
}

export default function OpenDashboardButton({ url }: OpenDashboardButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="px-8 py-4 bg-pe-teal text-white rounded-lg hover:bg-pe-dark transition-colors text-xl font-semibold shadow-lg"
    >
      Open Live Interactive Dashboard
    </button>
  );
}
