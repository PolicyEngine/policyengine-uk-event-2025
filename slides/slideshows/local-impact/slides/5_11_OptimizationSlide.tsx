import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function OptimisationSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Solving for sparse household weights</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          {/* The fundamental equation */}
          <div className="bg-pe-teal rounded-lg p-8 mb-6 border-4 border-pe-dark">
            <div className="flex items-end justify-center space-x-10 mb-5">
              <div className="text-center">
                <div className="text-7xl font-bold text-white mb-2">t</div>
                <div className="text-2xl text-white font-semibold">targets</div>
              </div>

              <div className="text-7xl font-bold text-white mb-8">=</div>

              <div className="text-center">
                <div className="text-7xl font-bold text-white mb-2">Xw</div>
                <div className="text-2xl text-white font-semibold">matrix · weights</div>
              </div>
            </div>

            <p className="text-xl text-center text-white font-medium">
              Each household appears multiple times with different weights across geographies
            </p>
          </div>

          {/* Two types of sparsity */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Sparse X */}
            <div className="bg-white border-2 border-pe-teal rounded-lg p-6">
              <h3 className="text-2xl font-bold text-pe-dark mb-4 text-left">
                Sparse X
              </h3>
              <div className="text-sm text-gray-600 mb-3 text-left italic">By design</div>
              <div className="bg-gray-100 rounded p-4 mb-4 flex justify-center">
                <div className="font-mono text-xl leading-relaxed">
                  <div className="flex space-x-2 justify-center mb-1">
                    <span className="text-pe-teal font-bold w-6 text-center">X</span>
                    <span className="text-pe-teal font-bold w-6 text-center">X</span>
                    <span className="text-pe-teal font-bold w-6 text-center">X</span>
                    <span className="text-gray-400 w-6 text-center">0</span>
                    <span className="text-gray-400 w-6 text-center">0</span>
                    <span className="text-gray-400 w-6 text-center">0</span>
                  </div>
                  <div className="flex space-x-2 justify-center mb-1">
                    <span className="text-pe-teal font-bold w-6 text-center">X</span>
                    <span className="text-pe-teal font-bold w-6 text-center">X</span>
                    <span className="text-pe-teal font-bold w-6 text-center">X</span>
                    <span className="text-gray-400 w-6 text-center">0</span>
                    <span className="text-gray-400 w-6 text-center">0</span>
                    <span className="text-gray-400 w-6 text-center">0</span>
                  </div>
                  <div className="flex space-x-2 justify-center">
                    <span className="text-gray-400 w-6 text-center">0</span>
                    <span className="text-gray-400 w-6 text-center">0</span>
                    <span className="text-gray-400 w-6 text-center">0</span>
                    <span className="text-pe-teal font-bold w-6 text-center">X</span>
                    <span className="text-pe-teal font-bold w-6 text-center">X</span>
                    <span className="text-pe-teal font-bold w-6 text-center">X</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 text-left">
                99% sparse from geographic constraints
              </p>
            </div>

            {/* Sparse w */}
            <div className="bg-white border-2 border-pe-teal rounded-lg p-6">
              <h3 className="text-2xl font-bold text-pe-dark mb-4 text-left">
                Sparse w
              </h3>
              <div className="text-sm text-gray-600 mb-3 text-left italic">Engineered via L0 regularisation</div>
              <div className="bg-gray-100 rounded p-4 mb-4">
                <div className="font-mono text-lg space-y-1">
                  <div className="flex items-center">
                    <span className="text-gray-400 w-8">w₁</span>
                    <span className="text-gray-400 w-6 text-center">=</span>
                    <span className="text-gray-400 text-right flex-1">0.0</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-8">w₂</span>
                    <span className="text-gray-400 w-6 text-center">=</span>
                    <span className="text-gray-400 text-right flex-1">0.0</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-pe-teal font-bold w-8">w₃</span>
                    <span className="text-pe-teal font-bold w-6 text-center">=</span>
                    <span className="text-pe-teal font-bold text-right flex-1">156.7</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-8">w₄</span>
                    <span className="text-gray-400 w-6 text-center">=</span>
                    <span className="text-gray-400 text-right flex-1">0.0</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-pe-teal font-bold w-8">w₅</span>
                    <span className="text-pe-teal font-bold w-6 text-center">=</span>
                    <span className="text-pe-teal font-bold text-right flex-1">89.3</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-8">w₆</span>
                    <span className="text-gray-400 w-6 text-center">=</span>
                    <span className="text-gray-400 text-right flex-1">0.0</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 text-left">
                Adjustable percent of weights driven to exactly zero
              </p>
            </div>
          </div>

          {/* Key considerations */}
          <div className="bg-gray-100 rounded-lg p-6 border-2 border-pe-dark">
            <h3 className="text-2xl font-bold mb-5 text-left text-pe-dark">
              Key considerations
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white border-2 border-pe-teal rounded-lg p-5">
                <div className="text-pe-teal text-3xl font-bold mb-3 text-center">1</div>
                <div className="text-xl font-bold mb-2 text-center text-pe-dark">Sparse matrix</div>
                <div className="text-lg text-gray-700 text-center">Use sparse representation for X</div>
              </div>
              <div className="bg-white border-2 border-pe-teal rounded-lg p-5">
                <div className="text-pe-teal text-3xl font-bold mb-3 text-center">2</div>
                <div className="text-xl font-bold mb-2 text-center text-pe-dark">Non-negative</div>
                <div className="text-lg text-gray-700 text-center">Keep weights non-negative</div>
              </div>
              <div className="bg-white border-2 border-pe-teal rounded-lg p-5">
                <div className="text-pe-teal text-3xl font-bold mb-3 text-center">3</div>
                <div className="text-xl font-bold mb-2 text-center text-pe-dark">True L0</div>
                <div className="text-lg text-gray-700 text-center">L0 regularisation with selective L2 shrinkage</div>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t-2 border-gray-300">
              <p className="text-lg text-gray-700 text-left">
                <span className="font-bold">Method:</span> Stochastic gates for L0 regularisation (Louizos et al. 2017)
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
