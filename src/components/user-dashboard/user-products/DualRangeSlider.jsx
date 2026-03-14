'use client';
import { useState, useCallback, useEffect } from 'react';

export default function DualRangeSlider({ min, max, initialMin, initialMax, onChange }) {
  const [minVal, setMinVal] = useState(initialMin);
  const [maxVal, setMaxVal] = useState(initialMax);

  const getPercent = useCallback((val) => Math.round(((val - min) / (max - min)) * 100), [min, max]);

  const minPercent = getPercent(minVal);
  const maxPercent = getPercent(maxVal);

  return (
    <div className="w-full px-1 pt-2 pb-1">
      <div className="relative h-5 flex items-center">
        {/* Track Background */}
        <div className="absolute w-full h-1.5 bg-blue-100 rounded-full" />
        
        {/* Active Fill */}
        <div
          className="absolute h-1.5 bg-blue-500 rounded-full"
          style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
        />

        {/* Visual Dots */}
        <div
          className="absolute w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md z-10 -translate-x-1/2 pointer-events-none"
          style={{ left: `${minPercent}%` }}
        />
        <div
          className="absolute w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md z-10 -translate-x-1/2 pointer-events-none"
          style={{ left: `${maxPercent}%` }}
        />

        {/* Hidden Functional Inputs */}
        <input
          type="range" min={min} max={max} value={minVal}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), maxVal - 50);
            setMinVal(val);
            onChange(val, maxVal);
          }}
          className="absolute w-full h-full opacity-0 cursor-pointer z-30"
        />
        <input
          type="range" min={min} max={max} value={maxVal}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), minVal + 50);
            setMaxVal(val);
            onChange(minVal, val);
          }}
          className="absolute w-full h-full opacity-0 cursor-pointer z-20"
        />
      </div>

      <div className="flex justify-between mt-3">
        <span className="bg-gray-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
          £{minVal}
        </span>
        <span className="bg-gray-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
          £{maxVal}
        </span>
      </div>
    </div>
  );
}