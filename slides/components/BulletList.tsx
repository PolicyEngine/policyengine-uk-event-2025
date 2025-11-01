import React from 'react';

export interface BulletItem {
  text: string;
  subtext?: string;
}

interface BulletListProps {
  items: BulletItem[];
  size?: 'sm' | 'md' | 'lg';
}

export default function BulletList({ items, size = 'md' }: BulletListProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subtextSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <div className="space-y-5 text-left">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-2">
            <div className="w-3 h-3 bg-pe-teal rounded-full"></div>
          </div>
          <div className="flex-1">
            <p className={`${sizeClasses[size]} text-gray-800 leading-relaxed`}>
              {item.text}
            </p>
            {item.subtext && (
              <p className={`${subtextSizeClasses[size]} text-gray-600 mt-2 leading-relaxed`}>
                {item.subtext}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
