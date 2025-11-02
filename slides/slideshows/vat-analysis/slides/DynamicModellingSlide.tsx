import React from 'react';
import Slide from '@/components/Slide';
import SlideLayout from '@/components/SlideLayout';
import BulletList from '@/components/BulletList';

export default function DynamicModellingSlide() {
  return (
    <Slide>
      <SlideLayout title="Firm VAT dynamic modelling">
        <BulletList
          size="sm"
          items={[
              {
                text: 'Firms respond to tax incentives! We extend the model to capture behavioural responses.'
              },
              {
                text: <>Firms maximise profits by choosing output: <span className="inline-block" style={{fontFamily: 'Georgia, serif'}}>
                  max<sub className="text-base italic">y<sub className="text-sm">i</sub></sub>{' '}
                  (1 − <i>τ</i>(<i>y</i><sub className="text-base">i</sub>))<i>y</i><sub className="text-base">i</sub> − <i>c</i><sub className="text-base">i</sub>(<i>y</i><sub className="text-base">i</sub>)
                </span></>
              },
              {
                text: 'Firms choose output where marginal revenue net of VAT equals marginal cost.'
              },
              {
                text: <>We assume a Cobb–Douglas production technology: <span style={{fontFamily: 'Georgia, serif'}}>
                  <i>y</i><sub className="text-base">i</sub> = <i>A</i><sub className="text-base">i</sub><i>x</i><sub className="text-base">i</sub><sup className="text-base">α</sup>
                </span></>
              },
              {
                text: 'This lets us back out firm-specific marginal costs from observed input and output data, capturing heterogeneity in productivity across firms.'
              },
              {
                text: <>We model VAT using a smooth sigmoid tax schedule: <span style={{fontFamily: 'Georgia, serif'}}>
                  <i>τ</i>(<i>y</i><sub className="text-base">i</sub>) = <i>τ</i><sub className="text-base">max</sub> · (1 + <i>e</i><sup className="text-base">−<i>k</i>(<i>y</i><sub className="text-sm">i</sub>−<i>T</i>*)</sup>)<sup className="text-base">−1</sup>
                </span></>
              }
            ]}
        />
      </SlideLayout>
    </Slide>
  );
}
