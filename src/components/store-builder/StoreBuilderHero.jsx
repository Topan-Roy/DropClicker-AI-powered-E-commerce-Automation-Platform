"use client";

import React from 'react';
import { Sparkles, Layout, Palette, Zap, Rocket } from 'lucide-react';

const StoreBuilderHero = ({ onCreateNew }) => {
  return (
    <div className="w-full bg-[#2D1B69] rounded-2xl p-10 flex flex-col items-center text-center">
      <div className="bg-[#3D2B79] text-white text-xs px-4 py-1.5 rounded-full flex items-center gap-2 mb-6">
        <Sparkles size={14} className="text-purple-300" />
        <span>Powered by Advanced AI</span>
      </div>

      <h1 className="text-4xl font-bold text-white mb-4">AI Store Builder</h1>
      <p className="text-lg text-white font-medium mb-3">Create Professional Stores in Minutes</p>

      <p className="text-sm text-gray-300 max-w-lg mx-auto mb-10 leading-relaxed">
        Transform your dropshipping vision into a high-converting Shopify store with AI-powered design,
        automated branding, and premium themes.
      </p>

      <div className="flex items-center gap-4 mb-10">
        <button
          onClick={onCreateNew}
          className="bg-white text-[#2D1B69] px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2"
        >
          <Sparkles size={16} />
          Create New Store
        </button>
        <button className="border border-white text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2">
          <Zap size={16} />
          Redesign Existing Store
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex items-center gap-2 bg-[#3D2B79]/50 px-4 py-2 rounded-full border border-white/10">
          <Layout size={14} className="text-purple-300" />
          <span className="text-white text-xs">AI-Powered Design</span>
        </div>
        <div className="flex items-center gap-2 bg-[#3D2B79]/50 px-4 py-2 rounded-full border border-white/10">
          <Palette size={14} className="text-purple-300" />
          <span className="text-white text-xs">Custom Branding</span>
        </div>
        <div className="flex items-center gap-2 bg-[#3D2B79]/50 px-4 py-2 rounded-full border border-white/10">
          <Layout size={14} className="text-purple-300" />
          <span className="text-white text-xs">Premium Themes</span>
        </div>
        <div className="flex items-center gap-2 bg-[#3D2B79]/50 px-4 py-2 rounded-full border border-white/10">
          <Rocket size={14} className="text-purple-300" />
          <span className="text-white text-xs">Ready to Launch</span>
        </div>
      </div>
    </div>
  );
};

export default StoreBuilderHero;
