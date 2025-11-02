import React from 'react';
import Slide from '@/components/Slide';
import SlideLayout from '@/components/SlideLayout';
import BulletList from '@/components/BulletList';
import MathFormula, { Subscript, Superscript, Variable } from '@/components/MathFormula';

export default function BehaviouralExtensionSlide() {
  return (
    <Slide>
      <SlideLayout title="Behavioural extension and elasticity">
        <BulletList
          size="sm"
          items={[
            {
              text: <>Extension: We incorporate asymmetric uncertainty around the threshold to capture realistic firm variation:</>
            }
          ]}
        />

        <MathFormula size="md">
          <Variable>y</Variable><Subscript>uncertainty</Subscript> = <Variable>y</Variable>*<Subscript>FOC</Subscript> × (1 + <Variable>ε</Variable><Subscript>i</Subscript>)
        </MathFormula>

        <MathFormula size="md">
          <Variable>ε</Variable><Subscript>i</Subscript> = {`{`}
          <span style={{display: 'inline-flex', flexDirection: 'column', marginLeft: '1rem', gap: '0.5rem'}}>
            <span>
              <Variable>N</Variable>(<Variable>μ</Variable><Subscript>skew</Subscript>, <Variable>σ</Variable><Superscript>2</Superscript>)
              {' '}if 0 &lt; <Variable>y</Variable>*<Subscript>FOC</Subscript> − <Variable>T</Variable>* &lt; 10000
            </span>
            <span>
              <Variable>N</Variable>(0, <Variable>σ</Variable><Superscript>2</Superscript>)
              {' '}otherwise
            </span>
          </span>
        </MathFormula>

        <BulletList
          size="sm"
          items={[
            {
              text: <>No-notch: We follow the bunching literature (Saez, 2010; Chetty et al., 2011; Kleven & Waseem, 2013; Liu & Lockwood, 2015) by fitting a smooth polynomial to the turnover distribution.</>
            },
            {
              text: <>Elasticity estimation: We find the mapping from each firm's real-world turnover to its turnover under the counterfactual scenario (here, the no-notch distribution), and then estimate elasticities.</>
            }
          ]}
        />
      </SlideLayout>
    </Slide>
  );
}
