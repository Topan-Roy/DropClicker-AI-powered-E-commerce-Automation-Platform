"use client";

import React, { useState } from 'react';
import { Upload, Sparkles } from 'lucide-react';

const Step1_StoreSettings = ({ onContinue }) => {
  const [niche, setNiche] = useState('General');
  const [brandStyle, setBrandStyle] = useState('Bold & Modern');

  const niches = ["General", "Home & Living", "Fitness", "Electronics", "Pets", "Kids & Family"];
  
  const styles = [
    { name: "Clean & Minimal", classes: "bg-gray-50 border border-gray-100" },
    { name: "Bold & Modern", classes: "bg-gradient-to-br from-blue-500 to-purple-600" },
    { name: "Premium", classes: "bg-[#1a1f2c]" },
    { name: "Fidelity", classes: "bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center", dot: true }
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Store Name */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-gray-900">Store Name *</label>
        <input 
          type="text" 
          placeholder="My Amazing Store" 
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
        />
      </div>

      {/* Logo */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-gray-900">Logo</label>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center bg-gray-50 text-gray-400 group hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer">
            <Upload size={20} className="mb-1" />
            <span className="text-[10px] font-bold">Upload</span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <button className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
              Upload from computer
            </button>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <Sparkles size={14} />
              Generate logo for me
            </button>
          </div>
        </div>
      </div>

      {/* Niche */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-gray-900">Niche *</label>
        <div className="grid grid-cols-2 gap-3">
          {niches.map((item) => (
            <button
              key={item}
              onClick={() => setNiche(item)}
              className={`px-4 py-3 rounded-xl text-sm font-bold transition-all border-2
                ${niche === item 
                  ? 'border-purple-500 bg-purple-50 text-purple-600 shadow-sm' 
                  : 'border-gray-100 bg-white text-gray-600 hover:border-gray-200'}
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Brand Style */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-gray-900">Brand Style *</label>
        <div className="grid grid-cols-4 gap-3">
          {styles.map((style) => (
            <div key={style.name} className="flex flex-col gap-2 items-center">
              <button
                onClick={() => setBrandStyle(style.name)}
                className={`w-full h-20 rounded-2xl transition-all relative overflow-hidden
                  ${style.classes}
                  ${brandStyle === style.name ? 'ring-4 ring-blue-500/20 border-blue-500 border-2' : 'border-transparent border-0'}
                `}
              >
                {style.dot && <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]"></div>}
              </button>
              <span className={`text-[10px] font-bold ${brandStyle === style.name ? 'text-blue-600' : 'text-gray-400'}`}>
                {style.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6">
        <button 
          onClick={onContinue}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
        >
          Continue to Products
        </button>
      </div>
    </div>
  );
};

export default Step1_StoreSettings;
