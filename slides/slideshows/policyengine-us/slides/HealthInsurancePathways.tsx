import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';

export default function HealthInsurancePathways() {
  // 2023 MECE enrollment data from KFF - mutually exclusive categories
  const coverageData = [
    {
      name: 'Employer-Sponsored Insurance (ESI)',
      fullName: 'Employer-Sponsored Insurance',
      enrollment: 158.4, // million - employer only
      color: '#2C5F8D',
      description: 'Employer coverage only'
    },
    {
      name: 'Medicaid/CHIP',
      fullName: 'Medicaid/CHIP',
      enrollment: 49.7, // million - Medicaid only (includes CHIP)
      color: '#319795',
      description: 'Low-income coverage only'
    },
    {
      name: 'Dual Coverage',
      fullName: 'Dual Coverage',
      enrollment: 44.5, // million - calculated to reach 326.1M total
      color: '#68B0AB',
      description: 'Multiple coverage types'
    },
    {
      name: 'Uninsured',
      fullName: 'Uninsured',
      enrollment: 25.8, // million
      color: '#D1D5DB',
      description: 'No health coverage'
    },
    {
      name: 'Medicare',
      fullName: 'Medicare',
      enrollment: 23.0, // million - Medicare only
      color: '#1D4044',
      description: 'Age 65+ or disability only'
    },
    {
      name: 'Marketplace',
      fullName: 'Non-Group/Marketplace',
      enrollment: 20.4, // million - non-group only
      color: '#4A8B94',
      description: 'Individual market only'
    },
    {
      name: 'Military/VA',
      fullName: 'Military/VA',
      enrollment: 4.3, // million
      color: '#2C6975',
      description: 'Military & veterans coverage'
    }
  ].sort((a, b) => b.enrollment - a.enrollment); // Sort by size

  const totalEnrollment = coverageData.reduce((sum, d) => sum + d.enrollment, 0);

  // Simple treemap layout using squarified algorithm
  const width = 800;
  const height = 500;
  const padding = 3;

  // Calculate rectangles for treemap
  interface TreemapRect {
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
    fullName: string;
    enrollment: number;
    color: string;
    description: string;
  }

  const calculateTreemap = (): TreemapRect[] => {
    const rects: TreemapRect[] = [];

    // ESI (largest) - takes top portion
    const esiHeight = (coverageData[0].enrollment / totalEnrollment) * height;
    rects.push({
      x: padding,
      y: padding,
      width: width - 2 * padding,
      height: esiHeight - 2 * padding,
      ...coverageData[0]
    });

    // Remaining items split into two rows
    const remainingY = esiHeight;
    const remainingHeight = height - esiHeight;
    const remainingItems = coverageData.slice(1);
    const remainingTotal = remainingItems.reduce((sum, d) => sum + d.enrollment, 0);

    // Row 2: Medicaid, Dual Coverage (2 items)
    const row2Items = remainingItems.slice(0, 2);
    const row2Total = row2Items.reduce((sum, d) => sum + d.enrollment, 0);
    const row2Height = (row2Total / remainingTotal) * remainingHeight;

    let currentX = 0;
    row2Items.forEach((item) => {
      const itemWidth = (item.enrollment / row2Total) * width;
      rects.push({
        x: currentX + padding,
        y: remainingY + padding,
        width: itemWidth - 2 * padding,
        height: row2Height - 2 * padding,
        ...item
      });
      currentX += itemWidth;
    });

    // Row 3: Uninsured, Medicare, Marketplace, Military (4 items)
    const row3Y = remainingY + row2Height;
    const row3Items = remainingItems.slice(2);
    const row3Total = row3Items.reduce((sum, d) => sum + d.enrollment, 0);
    const row3Height = height - row3Y;

    currentX = 0;
    row3Items.forEach((item) => {
      const itemWidth = (item.enrollment / row3Total) * width;
      rects.push({
        x: currentX + padding,
        y: row3Y + padding,
        width: itemWidth - 2 * padding,
        height: row3Height - 2 * padding,
        ...item
      });
      currentX += itemWidth;
    });

    return rects;
  };

  const rects = calculateTreemap();

  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Americans have diverse health insurance coverage</SlideTitle>
        </SlideHeader>

        <div className="mt-12 flex flex-col items-center">
          {/* Treemap */}
          <svg width={width + 200} height={height}>
            {/* Main treemap area */}
            <rect x="0" y="0" width={width} height={height} fill="none" />

            {rects.map((rect, idx) => {
              const isSmall = rect.enrollment < 10;
              const isMedium = rect.enrollment >= 10 && rect.enrollment < 25;
              const isLarge = rect.enrollment >= 25;
              const isTiny = rect.width < 80; // Too small for text

              return (
                <g key={idx}>
                  <rect
                    x={rect.x}
                    y={rect.y}
                    width={rect.width}
                    height={rect.height}
                    fill={rect.color}
                    opacity="0.9"
                    stroke="white"
                    strokeWidth="3"
                  />

                  {/* Labels for boxes with enough space */}
                  {!isTiny && rect.height > 50 && (
                    <>
                      <text
                        x={rect.x + rect.width / 2}
                        y={rect.y + rect.height / 2 - 20}
                        textAnchor="middle"
                        fill="white"
                        fontSize={isLarge ? "28" : isMedium ? "22" : "18"}
                        fontWeight="700"
                      >
                        {rect.name}
                      </text>
                      <text
                        x={rect.x + rect.width / 2}
                        y={rect.y + rect.height / 2 + 8}
                        textAnchor="middle"
                        fill="white"
                        fontSize={isLarge ? "22" : isMedium ? "18" : "16"}
                        fontWeight="600"
                        opacity="0.95"
                      >
                        {rect.enrollment.toFixed(1)}M
                      </text>
                      {rect.height > 80 && (
                        <text
                          x={rect.x + rect.width / 2}
                          y={rect.y + rect.height / 2 + 35}
                          textAnchor="middle"
                          fill="white"
                          fontSize={isLarge ? "16" : "14"}
                          opacity="0.85"
                        >
                          {rect.description}
                        </text>
                      )}
                    </>
                  )}

                  {/* Compact label for medium boxes */}
                  {!isTiny && rect.height <= 50 && (
                    <text
                      x={rect.x + rect.width / 2}
                      y={rect.y + rect.height / 2 + 5}
                      textAnchor="middle"
                      fill="white"
                      fontSize="16"
                      fontWeight="700"
                    >
                      {rect.name}: {rect.enrollment.toFixed(1)}M
                    </text>
                  )}

                  {/* Arrow and label for tiny boxes */}
                  {isTiny && (
                    <>
                      {/* Arrow line */}
                      <line
                        x1={width + 20}
                        y1={rect.y + rect.height / 2}
                        x2={rect.x + rect.width}
                        y2={rect.y + rect.height / 2}
                        stroke="#666"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                      />
                      {/* Label to the right */}
                      <text
                        x={width + 30}
                        y={rect.y + rect.height / 2 - 10}
                        textAnchor="start"
                        fill="#333"
                        fontSize="18"
                        fontWeight="700"
                      >
                        {rect.name}
                      </text>
                      <text
                        x={width + 30}
                        y={rect.y + rect.height / 2 + 12}
                        textAnchor="start"
                        fill="#666"
                        fontSize="16"
                        fontWeight="600"
                      >
                        {rect.enrollment.toFixed(1)}M
                      </text>
                    </>
                  )}
                </g>
              );
            })}

            {/* Arrow marker definition */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#666" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </Slide>
  );
}
