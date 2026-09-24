import React from 'react';
import Slide from '@/components/Slide';
import { colors } from '@policyengine/design-system/tokens';

export default function UKBenefitsIframe() {
  return (
    <Slide>
      <div className="absolute inset-0 pt-8 pb-24 px-12 flex flex-col">
        <iframe
          src="https://policyengine.org/uk/research/uk-benefits-post"
          className="w-full flex-1 rounded-lg shadow-2xl"
          style={{ border: `2px solid ${colors.border.medium}` }}
        />
      </div>
    </Slide>
  );
}
