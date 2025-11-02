import React from 'react';
import Slide from '@/components/Slide';
import SlideLayout from '@/components/SlideLayout';
import BulletList from '@/components/BulletList';
import MathFormula, { Subscript, Superscript, Variable } from '@/components/MathFormula';

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
                text: <>Firms maximise profits by choosing output: <MathFormula display="inline" size="sm">
                  max<Subscript><Variable>y</Variable><Subscript>i</Subscript></Subscript>{' '}
                  (1 − <Variable>τ</Variable>(<Variable>y</Variable><Subscript>i</Subscript>))<Variable>y</Variable><Subscript>i</Subscript> − <Variable>c</Variable><Subscript>i</Subscript>(<Variable>y</Variable><Subscript>i</Subscript>)
                </MathFormula></>
              },
              {
                text: 'Firms choose output where marginal revenue net of VAT equals marginal cost.'
              },
              {
                text: <>We assume a Cobb–Douglas production technology: <MathFormula display="inline" size="sm">
                  <Variable>y</Variable><Subscript>i</Subscript> = <Variable>A</Variable><Subscript>i</Subscript><Variable>x</Variable><Subscript>i</Subscript><Superscript>α</Superscript>
                </MathFormula></>
              },
              {
                text: 'This lets us back out firm-specific marginal costs from observed input and output data, capturing heterogeneity in productivity across firms.'
              },
              {
                text: <>We model VAT using a smooth sigmoid tax schedule: <MathFormula display="inline" size="sm">
                  <Variable>τ</Variable>(<Variable>y</Variable><Subscript>i</Subscript>) = <Variable>τ</Variable><Subscript>max</Subscript> · (1 + <Variable>e</Variable><Superscript>−<Variable>k</Variable>(<Variable>y</Variable><Subscript>i</Subscript>−<Variable>T</Variable>*)</Superscript>)<Superscript>−1</Superscript>
                </MathFormula></>
              }
            ]}
        />
      </SlideLayout>
    </Slide>
  );
}
