import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function ClaudeCodeSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Building software: Claude Code plugin</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-8 text-left">
            <div className="bg-pe-teal/10 rounded-xl p-8 border-l-4 border-pe-teal">
              <p className="text-2xl font-semibold text-pe-dark mb-3">
                Beta launch: github.com/policyengine/policyengine-claude
              </p>
              <p className="text-xl text-gray-700">
                Specialized tools for PolicyEngine development
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-pe-teal mb-3">Custom commands</h3>
                <p className="text-lg text-gray-700">
                  Slash commands for common PolicyEngine workflows
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-pe-teal mb-3">Specialized agents</h3>
                <p className="text-lg text-gray-700">
                  Agents trained on PolicyEngine patterns and standards
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-pe-teal mb-3">Domain skills</h3>
                <p className="text-lg text-gray-700">
                  Knowledge bases for tax, benefits, and microsimulation
                </p>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
