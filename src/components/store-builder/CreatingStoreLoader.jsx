"use client";

import React, { useState, useEffect } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

const CreatingStoreLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "Creating hero banner",
    "Setting up products",
    "Applying brand style",
    "Finalising store"
  ];

  useEffect(() => {
    const duration = 8000; // 8 seconds
    const interval = 50; // update every 50ms
    const step = (100 / (duration / interval));

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const sIndex = Math.min(Math.floor((progress / 100) * statuses.length), statuses.length - 1);
    setStatusIndex(sIndex);
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Animated Icon */}
        <div className="relative w-24 h-24 mb-10">
          <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-20"></div>
          <div className="relative w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/20">
            <Sparkles size={40} className="text-white animate-pulse" />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Creating Your Store</h2>
        <p className="text-sm text-gray-400 mb-10 text-center">AI is building a professional store for you</p>

        {/* Progress Bar Container */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-600">
              <Loader2 size={16} className="animate-spin" />
              <span className="text-sm font-bold tracking-tight">{statuses[statusIndex]}</span>
            </div>
            <span className="text-sm font-black text-blue-600">{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden p-0.5 border border-gray-50">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_rgba(37,99,235,0.4)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <p className="text-[10px] text-gray-400 mt-8 font-medium">
          This usually takes 30-60 seconds. Don't close this window.
        </p>
      </div>
    </div>
  );
};

export default CreatingStoreLoader;
