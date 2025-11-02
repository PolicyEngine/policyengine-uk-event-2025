import React, { ReactNode } from 'react';

interface SVGGraphicProps {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  caption?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SVGGraphic({
  children,
  width = '100%',
  height = 'auto',
  viewBox = '0 0 800 600',
  caption,
  align = 'center'
}: SVGGraphicProps) {
  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} my-8`}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        className="max-w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {children}
      </svg>
      {caption && (
        <p className="mt-4 text-sm text-gray-600 text-center">
          {caption}
        </p>
      )}
    </div>
  );
}

// Example usage components for common graphics

export const ArrowSVG: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  strokeWidth?: number;
  label?: string;
}> = ({ x1, y1, x2, y2, color = '#319795', strokeWidth = 2, label }) => (
  <>
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="9"
        refY="3.5"
        orient="auto"
      >
        <polygon
          points="0 0, 10 3.5, 0 7"
          fill={color}
        />
      </marker>
    </defs>
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={strokeWidth}
      markerEnd="url(#arrowhead)"
    />
    {label && (
      <text
        x={(x1 + x2) / 2}
        y={(y1 + y2) / 2 - 10}
        fill={color}
        fontSize="14"
        textAnchor="middle"
      >
        {label}
      </text>
    )}
  </>
);

export const BoxSVG: React.FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  rx?: number;
  label?: string;
  labelColor?: string;
}> = ({
  x,
  y,
  width,
  height,
  fill = '#319795',
  stroke = 'none',
  strokeWidth = 0,
  rx = 8,
  label,
  labelColor = 'white'
}) => (
  <>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      rx={rx}
    />
    {label && (
      <text
        x={x + width / 2}
        y={y + height / 2}
        fill={labelColor}
        fontSize="16"
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight="600"
      >
        {label}
      </text>
    )}
  </>
);

export const CircleSVG: React.FC<{
  cx: number;
  cy: number;
  r: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  label?: string;
  labelColor?: string;
}> = ({
  cx,
  cy,
  r,
  fill = '#319795',
  stroke = 'none',
  strokeWidth = 0,
  label,
  labelColor = 'white'
}) => (
  <>
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    {label && (
      <text
        x={cx}
        y={cy}
        fill={labelColor}
        fontSize="16"
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight="600"
      >
        {label}
      </text>
    )}
  </>
);