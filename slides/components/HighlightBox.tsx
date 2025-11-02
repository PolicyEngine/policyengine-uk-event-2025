import React, { ReactNode } from 'react';

interface HighlightBoxProps {
  children: ReactNode;
  variant?: 'teal' | 'dark' | 'light' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  title?: string;
}

export default function HighlightBox({
  children,
  variant = 'teal',
  size = 'md',
  icon,
  title
}: HighlightBoxProps) {
  const variantClasses = {
    teal: 'bg-pe-teal/10 border-pe-teal text-pe-dark',
    dark: 'bg-pe-dark/10 border-pe-dark text-pe-dark',
    light: 'bg-gray-50 border-gray-300 text-gray-800',
    warning: 'bg-amber-50 border-amber-500 text-amber-900',
    info: 'bg-blue-50 border-blue-500 text-blue-900'
  };

  const sizeClasses = {
    sm: 'p-4 text-lg',
    md: 'p-6 text-xl',
    lg: 'p-8 text-2xl'
  };

  const titleSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`rounded-lg border-2 ${variantClasses[variant]} ${sizeClasses[size]} my-6`}>
      {(icon || title) && (
        <div className="flex items-center gap-4 mb-4">
          {icon && <span className="text-3xl">{icon}</span>}
          {title && (
            <h3 className={`${titleSizeClasses[size]} font-semibold`}>
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="leading-relaxed text-left">
        {children}
      </div>
    </div>
  );
}