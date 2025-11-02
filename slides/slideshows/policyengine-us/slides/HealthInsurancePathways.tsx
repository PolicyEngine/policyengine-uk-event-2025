import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';

export default function HealthInsurancePathways() {
  const pathways = [
    {
      name: 'ESI',
      fullName: 'Employer-Sponsored Insurance',
      color: '#2C5F8D',
      description: 'Coverage through employer'
    },
    {
      name: 'Medicare',
      fullName: 'Medicare',
      color: '#1D4044',
      description: 'Age 65+ or disability'
    },
    {
      name: 'Medicaid',
      fullName: 'Medicaid',
      color: '#319795',
      description: 'Low-income coverage'
    },
    {
      name: 'CHIP',
      fullName: 'Children\'s Health Insurance Program',
      color: '#68B0AB',
      description: 'Children in low-income families'
    },
    {
      name: 'Marketplace',
      fullName: 'ACA Marketplace',
      color: '#4A8B94',
      description: 'Individual market with subsidies'
    }
  ];

  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>US health insurance coverage pathways</SlideTitle>
        </SlideHeader>

        <div className="mt-12">
          <div className="grid grid-cols-5 gap-6">
            {pathways.map((pathway, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Pathway box */}
                <div
                  className="w-full aspect-square rounded-2xl flex flex-col items-center justify-center p-6 text-white shadow-lg"
                  style={{ backgroundColor: pathway.color }}
                >
                  <div className="text-4xl font-bold mb-3">{pathway.name}</div>
                  <div className="text-sm text-center opacity-90 font-medium">{pathway.fullName}</div>
                </div>

                {/* Description */}
                <div className="mt-4 text-center">
                  <p className="text-lg text-gray-700">{pathway.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-pe-teal/10 rounded-xl p-6 border-l-4 border-pe-teal">
            <p className="text-xl text-left text-gray-700">
              <span className="font-semibold text-pe-dark">ACA-Calc</span> models premium tax credits for Marketplace coverage,
              including interactions with Medicaid and CHIP eligibility
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
