"use client";

import React, { useState } from 'react';
import StoreBuilderHero from '@/components/store-builder/StoreBuilderHero';
import MyStoresList from '@/components/store-builder/MyStoresList';
import StepIndicator from '@/components/store-builder/StepIndicator';
import LivePreview from '@/components/store-builder/LivePreview';
import Step1_StoreSettings from '@/components/store-builder/Step1_StoreSettings';
import Step2_Products from '@/components/store-builder/Step2_Products';
import Step3_Design from '@/components/store-builder/Step3_Design';
import Step4_AIImages from '@/components/store-builder/Step4_AIImages';
import CreatingStoreLoader from '@/components/store-builder/CreatingStoreLoader';

const StoreBuilderPage = () => {
  const [view, setView] = useState('landing');
  const [currentStep, setCurrentStep] = useState(1);

  const startWizard = () => {
    setView('wizard');
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep === 1) setCurrentStep(2);
    else if (currentStep === 2) setCurrentStep(3); // Step 3 in spec is actually Step 4 in logic (AI Images)
    else if (currentStep === 3) setCurrentStep(4); // Final design step
    else handleCreateStore();
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleCreateStore = () => {
    setView('creating');
  };

  const handleComplete = () => {
    setView('landing');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 lg:p-8">
      <div className="max-w-8xl mx-auto">
        {view === 'landing' && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-700">
            <StoreBuilderHero onCreateNew={startWizard} />
            <MyStoresList />
          </div>
        )}

        {view === 'wizard' && (
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">AI Store Builder</h2>
            <p className="text-sm text-gray-500 mb-8 font-medium">Create a high-converting Shopify store in 3 steps</p>

            <StepIndicator currentStep={currentStep} />

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Form Panel */}
              <div className="flex-1 max-w-[580px] bg-white rounded-3xl border border-gray-100 shadow-sm p-8 max-h-[calc(100vh-280px)] overflow-y-auto no-scrollbar">
                {currentStep === 1 && (
                  <Step1_StoreSettings onContinue={nextStep} />
                )}
                {currentStep === 2 && (
                  <Step2_Products onContinue={nextStep} onBack={prevStep} />
                )}
                {currentStep === 3 && (
                  <Step4_AIImages onContinue={nextStep} onBack={prevStep} />
                )}
                {currentStep === 4 && (
                  <Step3_Design onContinue={nextStep} onBack={prevStep} />
                )}
              </div>

              {/* Preview Panel */}
              <LivePreview />
            </div>
          </div>
        )}

        {view === 'creating' && (
          <CreatingStoreLoader onComplete={handleComplete} />
        )}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default StoreBuilderPage;
