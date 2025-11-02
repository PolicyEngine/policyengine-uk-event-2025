import React, { ReactNode } from 'react';

interface MathFormulaProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  display?: 'inline' | 'block';
  align?: 'left' | 'center' | 'right';
  highlighted?: boolean;
}

export default function MathFormula({
  children,
  size = 'md',
  display = 'block',
  align = 'center',
  highlighted = false
}: MathFormulaProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const baseClasses = `font-serif ${sizeClasses[size]} ${
    highlighted ? 'bg-pe-teal/10 px-4 py-2 rounded-lg' : ''
  }`;

  if (display === 'inline') {
    return (
      <span className={`${baseClasses} inline-block`}>
        {children}
      </span>
    );
  }

  return (
    <div className={`${alignClasses[align]} my-6`}>
      <div className={`${baseClasses} inline-block`}>
        {children}
      </div>
    </div>
  );
}

// Helper components for common math elements

export const Subscript: React.FC<{ children: ReactNode }> = ({ children }) => (
  <sub className="text-base align-baseline relative top-1">
    {children}
  </sub>
);

export const Superscript: React.FC<{ children: ReactNode }> = ({ children }) => (
  <sup className="text-base align-baseline relative -top-1">
    {children}
  </sup>
);

export const Fraction: React.FC<{
  numerator: ReactNode;
  denominator: ReactNode;
}> = ({ numerator, denominator }) => (
  <span className="inline-flex flex-col items-center mx-1">
    <span className="border-b-2 border-current pb-1">{numerator}</span>
    <span className="pt-1">{denominator}</span>
  </span>
);

export const Matrix: React.FC<{
  rows: ReactNode[][];
}> = ({ rows }) => (
  <span className="inline-flex items-center">
    <span className="text-4xl font-light">[</span>
    <span className="inline-grid gap-x-4 gap-y-2 mx-2" style={{
      gridTemplateColumns: `repeat(${rows[0]?.length || 1}, auto)`
    }}>
      {rows.flat().map((cell, index) => (
        <span key={index} className="text-center">
          {cell}
        </span>
      ))}
    </span>
    <span className="text-4xl font-light">]</span>
  </span>
);

export const Variable: React.FC<{
  children: ReactNode;
  italic?: boolean;
}> = ({ children, italic = true }) => (
  <span className={italic ? 'italic' : ''}>
    {children}
  </span>
);

export const Operator: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="mx-2">
    {children}
  </span>
);