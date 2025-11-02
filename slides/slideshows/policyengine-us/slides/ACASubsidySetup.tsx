import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';

export default function ACASubsidySetup() {
  // Same data as HealthInsurancePathways but with grayed out colors
  const coverageData = [
    {
      name: 'Employer-Sponsored Insurance (ESI)',
      enrollment: 158.4,
      color: '#E5E7EB', // Grayed out
      description: 'Employer coverage only'
    },
    {
      name: 'Medicaid/CHIP',
      enrollment: 49.7,
      color: '#E5E7EB', // Grayed out
      description: 'Low-income coverage only'
    },
    {
      name: 'Dual Coverage',
      enrollment: 44.5,
      color: '#E5E7EB', // Grayed out
      description: 'Multiple coverage types'
    },
    {
      name: 'Uninsured',
      enrollment: 25.8,
      color: '#E5E7EB', // Grayed out
      description: 'No health coverage'
    },
    {
      name: 'Medicare',
      enrollment: 23.0,
      color: '#E5E7EB', // Grayed out
      description: 'Age 65+ or disability only'
    },
    {
      name: 'Marketplace',
      enrollment: 20.4,
      color: '#4A8B94', // HIGHLIGHTED
      description: 'Individual market only'
    },
    {
      name: 'Military/VA',
      enrollment: 4.3,
      color: '#E5E7EB', // Grayed out
      description: 'Military & veterans coverage'
    }
  ].sort((a, b) => b.enrollment - a.enrollment);

  const totalEnrollment = coverageData.reduce((sum, d) => sum + d.enrollment, 0);
  const width = 500;
  const height = 350;
  const padding = 3;

  // Simplified treemap calculation (same as original)
  interface TreemapRect {
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
    enrollment: number;
    color: string;
    description: string;
  }

  const calculateTreemap = (): TreemapRect[] => {
    const rects: TreemapRect[] = [];
    const esiHeight = (coverageData[0].enrollment / totalEnrollment) * height;
    rects.push({
      x: padding,
      y: padding,
      width: width - 2 * padding,
      height: esiHeight - 2 * padding,
      ...coverageData[0]
    });

    const remainingY = esiHeight;
    const remainingHeight = height - esiHeight;
    const remainingItems = coverageData.slice(1);
    const remainingTotal = remainingItems.reduce((sum, d) => sum + d.enrollment, 0);

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
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Premium tax credit calculation</SlideTitle>
        </SlideHeader>

        <div className="mt-8 flex items-start gap-12">
          {/* Treemap on left */}
          <div className="flex-shrink-0">
            <svg width={width + 150} height={height}>
              {rects.map((rect, idx) => {
                const isMarketplace = rect.name === 'Marketplace';
                const isTiny = rect.width < 60;

                return (
                  <g key={idx}>
                    <rect
                      x={rect.x}
                      y={rect.y}
                      width={rect.width}
                      height={rect.height}
                      fill={rect.color}
                      opacity={isMarketplace ? "0.9" : "0.4"}
                      stroke="white"
                      strokeWidth="2"
                    />

                    {/* Labels */}
                    {!isTiny && rect.height > 40 && (
                      <>
                        <text
                          x={rect.x + rect.width / 2}
                          y={rect.y + rect.height / 2 - 10}
                          textAnchor="middle"
                          fill={isMarketplace ? "white" : "#666"}
                          fontSize={rect.enrollment > 100 ? "20" : "16"}
                          fontWeight="700"
                        >
                          {rect.name}
                        </text>
                        <text
                          x={rect.x + rect.width / 2}
                          y={rect.y + rect.height / 2 + 15}
                          textAnchor="middle"
                          fill={isMarketplace ? "white" : "#666"}
                          fontSize="14"
                          fontWeight="600"
                        >
                          {rect.enrollment.toFixed(1)}M
                        </text>
                      </>
                    )}

                    {/* Tiny box labels */}
                    {isTiny && (
                      <>
                        <line
                          x1={width + 20}
                          y1={rect.y + rect.height / 2}
                          x2={rect.x + rect.width}
                          y2={rect.y + rect.height / 2}
                          stroke="#999"
                          strokeWidth="1"
                          markerEnd="url(#arrowhead-gray)"
                        />
                        <text
                          x={width + 30}
                          y={rect.y + rect.height / 2 + 5}
                          textAnchor="start"
                          fill="#666"
                          fontSize="14"
                          fontWeight="600"
                        >
                          {rect.name}: {rect.enrollment.toFixed(1)}M
                        </text>
                      </>
                    )}
                  </g>
                );
              })}

              <defs>
                <marker
                  id="arrowhead-gray"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="#999" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Calculation steps on right */}
          <div className="flex-1 space-y-8 text-left">
            <div>
              <div className="bg-gray-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="text-xl font-bold">1. Eligibility check</h3>
              </div>
              <div className="bg-gray-100 px-4 py-3 rounded-b-lg text-base space-y-1">
                <p>• Income ≥ 100% of poverty line</p>
                <p>• Ineligible for ESI, Medicare, Medicaid, or CHIP</p>
                <p>• Valid SSN or ITIN</p>
              </div>
            </div>

            <div>
              <div className="bg-pe-teal text-white px-4 py-3 rounded-t-lg">
                <h3 className="text-xl font-bold">2. Benchmark premium</h3>
              </div>
              <div className="bg-pe-teal/10 px-4 py-3 rounded-b-lg text-base">
                <p>Second lowest cost silver plan by age, family composition, and locale</p>
              </div>
            </div>

            <div>
              <div className="bg-pe-dark text-white px-4 py-3 rounded-t-lg">
                <h3 className="text-xl font-bold">3. Expected contribution</h3>
              </div>
              <div className="bg-pe-dark/10 px-4 py-3 rounded-b-lg text-base">
                <p>Increasing fraction of household income</p>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 px-4 py-3 rounded-lg border-l-4 border-gray-400">
              <p className="text-lg font-semibold text-gray-800">
                Premium tax credit = Benchmark premium - Expected contribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
