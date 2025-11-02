import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'teal' | 'dark' | 'gray';
}

export default function StatCard({
  value,
  label,
  unit,
  trend,
  trendValue,
  size = 'md',
  color = 'teal'
}: StatCardProps) {
  const sizeClasses = {
    sm: {
      value: 'text-3xl',
      label: 'text-base',
      trend: 'text-sm'
    },
    md: {
      value: 'text-5xl',
      label: 'text-lg',
      trend: 'text-base'
    },
    lg: {
      value: 'text-6xl',
      label: 'text-xl',
      trend: 'text-lg'
    }
  };

  const colorClasses = {
    teal: 'text-pe-teal',
    dark: 'text-pe-dark',
    gray: 'text-gray-600'
  };

  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-500'
  };

  const trendSymbols = {
    up: '↑',
    down: '↓',
    neutral: '→'
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline gap-2">
          <span className={`${sizeClasses[size].value} font-bold ${colorClasses[color]}`}>
            {value}
          </span>
          {unit && (
            <span className={`${sizeClasses[size].label} text-gray-600`}>
              {unit}
            </span>
          )}
        </div>
        <p className={`${sizeClasses[size].label} text-gray-700 font-medium`}>
          {label}
        </p>
        {trend && trendValue && (
          <div className={`flex items-center gap-2 ${sizeClasses[size].trend} ${trendColors[trend]}`}>
            <span>{trendSymbols[trend]}</span>
            <span>{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  );
}