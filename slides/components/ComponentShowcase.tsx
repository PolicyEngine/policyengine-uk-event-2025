import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';
import ImageGrid from '@/components/ImageGrid';
import StatCard from '@/components/StatCard';
import HighlightBox from '@/components/HighlightBox';
import SVGGraphic, { ArrowSVG, BoxSVG, CircleSVG } from '@/components/SVGGraphic';
import MathFormula, { Variable, Subscript, Superscript, Operator, Fraction } from '@/components/MathFormula';

/**
 * Component showcase slide demonstrating all available presentation components.
 * Use this as a reference for building your presentation slides.
 */

export default function ComponentShowcase() {
  return (
    <>
      {/* Slide 1: Basic Components */}
      <Slide>
        <div className="max-w-7xl">
          <SlideHeader>
            <SlideTitle>Component showcase: Basic elements</SlideTitle>
          </SlideHeader>

          <SlideContent size="sm">
            <h2 className="text-3xl font-semibold text-pe-dark mb-4">BulletList component</h2>
            <BulletList
              size="sm"
              items={[
                { text: 'Main point with subtext', subtext: 'Additional context or explanation' },
                { text: 'Simple bullet point' },
                { text: 'Point with emphasis on key terms' }
              ]}
            />

            <h2 className="text-3xl font-semibold text-pe-dark mt-8 mb-4">HighlightBox component</h2>
            <HighlightBox variant="teal" title="Key takeaway" icon="💡">
              Important information that needs emphasis. Use this for conclusions or critical points.
            </HighlightBox>
          </SlideContent>
        </div>
      </Slide>

      {/* Slide 2: Statistics and Data */}
      <Slide>
        <div className="max-w-7xl">
          <SlideHeader>
            <SlideTitle>Component showcase: Statistics</SlideTitle>
          </SlideHeader>

          <SlideContent>
            <h2 className="text-3xl font-semibold text-pe-dark mb-6">StatCard components</h2>
            <div className="grid grid-cols-3 gap-6">
              <StatCard
                value="£90k"
                label="VAT threshold"
                trend="up"
                trendValue="+£5k from 2024"
                size="md"
              />
              <StatCard
                value="1.2M"
                label="Registered firms"
                unit="businesses"
                trend="down"
                trendValue="-50,000"
                size="md"
              />
              <StatCard
                value="15%"
                label="Revenue impact"
                trend="neutral"
                trendValue="No change"
                size="md"
                color="dark"
              />
            </div>

            <div className="mt-8">
              <HighlightBox variant="info" size="sm">
                Use StatCard components to display key metrics and KPIs with optional trend indicators.
              </HighlightBox>
            </div>
          </SlideContent>
        </div>
      </Slide>

      {/* Slide 3: Mathematical Formulas */}
      <Slide>
        <div className="max-w-7xl">
          <SlideHeader>
            <SlideTitle>Component showcase: Mathematical formulas</SlideTitle>
          </SlideHeader>

          <SlideContent size="sm">
            <h2 className="text-3xl font-semibold text-pe-dark mb-4">MathFormula component</h2>

            <MathFormula size="lg" highlighted>
              <Variable>y</Variable>
              <Subscript>i</Subscript>
              <Operator>=</Operator>
              <Variable>A</Variable>
              <Subscript>i</Subscript>
              <Variable>x</Variable>
              <Subscript>i</Subscript>
              <Superscript>α</Superscript>
            </MathFormula>

            <p className="text-xl mt-4 mb-6">Cobb-Douglas production function</p>

            <MathFormula size="md">
              <Variable>τ</Variable>(<Variable>y</Variable>)
              <Operator>=</Operator>
              <Fraction
                numerator={<Variable>τ</Variable>}
                denominator={<span>1 + <Variable>e</Variable><Superscript>-k(y-T*)</Superscript></span>}
              />
            </MathFormula>

            <p className="text-xl mt-4">Smooth sigmoid tax schedule</p>
          </SlideContent>
        </div>
      </Slide>

      {/* Slide 4: SVG Graphics */}
      <Slide>
        <div className="max-w-7xl">
          <SlideHeader>
            <SlideTitle>Component showcase: SVG graphics</SlideTitle>
          </SlideHeader>

          <SlideContent>
            <h2 className="text-3xl font-semibold text-pe-dark mb-4">SVGGraphic component</h2>

            <SVGGraphic viewBox="0 0 800 400" height={300} caption="Example flow diagram">
              {/* Input box */}
              <BoxSVG x={50} y={150} width={150} height={80} fill="#319795" label="Input data" />

              {/* Processing circle */}
              <CircleSVG cx={400} cy={190} r={60} fill="#1D4044" label="Process" />

              {/* Output box */}
              <BoxSVG x={600} y={150} width={150} height={80} fill="#319795" label="Output" />

              {/* Arrows */}
              <ArrowSVG x1={200} y1={190} x2={340} y2={190} label="Transform" />
              <ArrowSVG x1={460} y1={190} x2={600} y2={190} label="Generate" />
            </SVGGraphic>

            <p className="text-xl mt-6">
              Use SVG components to create custom diagrams and visualisations directly in your slides.
            </p>
          </SlideContent>
        </div>
      </Slide>

      {/* Slide 5: Image Grids */}
      <Slide>
        <div className="max-w-7xl">
          <SlideHeader>
            <SlideTitle>Component showcase: Image layouts</SlideTitle>
          </SlideHeader>

          <SlideContent>
            <h2 className="text-3xl font-semibold text-pe-dark mb-4">ImageGrid component</h2>

            <p className="text-xl mb-4">
              Display multiple images with captions in a responsive grid layout:
            </p>

            {/* Note: Replace with actual images in your presentation */}
            <div className="bg-gray-100 rounded-lg p-8">
              <p className="text-center text-gray-600">
                ImageGrid component displays multiple images side by side<br />
                Perfect for comparing charts, graphs, or screenshots
              </p>
            </div>

            <div className="mt-6">
              <HighlightBox variant="light" size="sm">
                ImageGrid automatically handles responsive layouts and maintains aspect ratios.
              </HighlightBox>
            </div>
          </SlideContent>
        </div>
      </Slide>
    </>
  );
}