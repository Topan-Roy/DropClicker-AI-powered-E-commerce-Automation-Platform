"use client";

import React from 'react';
import { Check } from 'lucide-react';

const StepIndicator = ({ currentStep }) => {
  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
    "Create an ad"
  ];

  return (
    <div className="w-full flex items-center justify-between px-4 mb-10">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;
        
        return (
          <React.Fragment key={index}>
            <div className="flex items-center gap-3 relative z-10">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                  ${isCompleted ? 'bg-green-500 text-white shadow-sm' : 
                    isCurrent ? 'bg-blue-600 text-white shadow-lg ring-4 ring-blue-100' : 
                    'bg-gray-100 text-gray-400 border border-gray-200'}
                `}
              >
                {isCompleted ? <Check size={16} strokeWidth={3} /> : stepNumber}
              </div>
              <span className={`text-xs font-semibold whitespace-nowrap transition-colors duration-300
                ${isCurrent ? 'text-gray-900' : 'text-gray-400'}
              `}>
                {stepNumber}. {step}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4 h-[1px] bg-gray-200">
                <div 
                  className={`h-full bg-blue-500 transition-all duration-500 ${isCompleted ? 'w-full' : 'w-0'}`}
                ></div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
