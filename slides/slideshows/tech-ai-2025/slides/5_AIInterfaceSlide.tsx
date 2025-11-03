import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function AIAugmentingSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>AI explains calculations and answers questions</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="grid grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
                <Image
                  src={assetPath("/images/posts/gpt-analysis.png")}
                  alt="GPT-4 powered policy analysis"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pe-teal mb-2">AI-powered explanations (March 2024)</h3>
                <p className="text-lg text-gray-700">
                  GPT-4 translates complex calculations into plain English
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  policyengine.org/us/research/gpt-analysis
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
                <Image
                  src={assetPath("/images/posts/us-household-ai.png")}
                  alt="Conversational household AI interface"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pe-teal mb-2">Conversational interface (October 2024)</h3>
                <p className="text-lg text-gray-700">
                  Natural language queries about household impacts
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  policyengine.org/us/research/us-household-ai
                </p>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
