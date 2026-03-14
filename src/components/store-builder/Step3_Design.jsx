"use client";

import React, { useState } from 'react';
import { Layout, Check, Sparkles, Image as ImageIcon } from 'lucide-react';

const Step3_Design = ({ onContinue, onBack }) => {
  const [layout, setLayout] = useState('Hero Banner');
  const [features, setFeatures] = useState([]);

  const layouts = [
    { name: "Hero Banner", thumb: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&q=80" },
    { name: "50/50 Split", thumb: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=100&q=80" },
    { name: "Product-first Grid", thumb: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80" }
  ];

  const conversionFeatures = [
    "Announcement bar", "Trust badges", "Featured collections", 
    "Product rows", "Promo banner", "FAQs", "Reviews section"
  ];

  const toggleFeature = (name) => {
    if (features.includes(name)) {
      setFeatures(features.filter(f => f !== name));
    } else {
      setFeatures([...features, name]);
    }
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Homepage Layout */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-gray-900">Homepage Layout</label>
        <p className="text-xs text-gray-400">Choose your preferred homepage design</p>
        <div className="grid grid-cols-3 gap-3 mt-2">
          {layouts.map((l) => (
            <button
              key={l.name}
              onClick={() => setLayout(l.name)}
              className={`flex flex-col gap-2 p-1 rounded-2xl border-2 transition-all group
                ${layout === l.name ? 'border-blue-500 bg-blue-50/30' : 'border-gray-100 bg-white hover:border-gray-200'}
              `}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <img src={l.thumb} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all" alt={l.name} />
                {layout === l.name && (
                  <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                  </div>
                )}
              </div>
              <span className={`text-[10px] font-bold text-center pb-2 ${layout === l.name ? 'text-blue-600' : 'text-gray-500'}`}>
                {l.name}
              </span>
            </button>
          ))}
        </div>
        <p className="text-[10px] text-gray-400 italic mt-1">
          AI will generate collection banners and use product images automatically
        </p>
      </div>

      {/* Conversion Features */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-gray-900">Conversion Features</label>
        <p className="text-xs text-gray-400">Select features to include on your site (select)</p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-2">
          {conversionFeatures.map((feature) => (
            <label key={feature} className="flex items-center gap-3 cursor-pointer group">
              <div 
                onClick={() => toggleFeature(feature)}
                className={`w-5 h-5 rounded flex items-center justify-center transition-all border-2
                  ${features.includes(feature) ? 'bg-blue-600 border-blue-600' : 'border-gray-200 bg-white group-hover:border-blue-400'}
                `}
              >
                {features.includes(feature) && <Check size={14} className="text-white" strokeWidth={3} />}
              </div>
              <span className={`text-sm font-medium ${features.includes(feature) ? 'text-gray-900 font-bold' : 'text-gray-500'}`}>
                {feature}
              </span>
            </label>
          ))}
        </div>
        <button className="text-blue-600 text-[10px] font-bold mt-2 hover:underline text-left">
          No features selected – AI will choose the best conversion elements for your store
        </button>
      </div>

      {/* AI Image Generation */}
      <div className="flex flex-col gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm mt-2 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
            <Sparkles size={20} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Hero Banner</p>
            <p className="text-[10px] text-gray-400">Generate main banner for your homepage</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <textarea 
            placeholder="E.g., Modern minimalist furniture showroom with neutral tones"
            rows={3}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
          ></textarea>
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
            <Sparkles size={14} />
            Generate Banner
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="flex-1 px-4 py-4 border border-gray-200 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-all"
        >
          ← Back
        </button>
        <button 
          onClick={onContinue}
          className="flex-[2] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
        >
          Create My Store
        </button>
      </div>
    </div>
  );
};

export default Step3_Design;
