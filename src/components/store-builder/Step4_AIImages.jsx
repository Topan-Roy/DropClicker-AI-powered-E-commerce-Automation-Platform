"use client";

import React, { useState } from 'react';
import { Sparkles, Trash2, Box, ChevronRight } from 'lucide-react';

const Step4_AIImages = ({ onContinue, onBack }) => {
  const [collectionBanners, setCollectionBanners] = useState([
    { id: 1, name: 'Appliances > Laundry Appliances > Washing Machines', prompt: '' },
    { id: 2, name: '', prompt: '' }
  ]);

  const addBanner = () => {
    setCollectionBanners([...collectionBanners, { id: Date.now(), name: '', prompt: '' }]);
  };

  const removeBanner = (id) => {
    setCollectionBanners(collectionBanners.filter(b => b.id !== id));
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Banner Section */}
      <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex items-center justify-center text-white shadow-lg">
            <Box size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Hero Banner</h3>
            <p className="text-sm text-gray-400">Create a banner for your store homepage</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <label className="text-xs font-bold text-gray-700">AI Prompt</label>
          <textarea 
            placeholder="E.g., Modern minimalist furniture showroom with neutral tones and natural lighting"
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
          ></textarea>
        </div>

        <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
          <Sparkles size={18} />
          Generate Hero Banner
        </button>
      </div>

      {/* Collection Banners Section */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Collection Banners</h3>
              <p className="text-xs text-gray-400">Custom banners for each collection</p>
            </div>
          </div>
          <button 
            onClick={addBanner}
            className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:underline"
          >
            + Add
          </button>
        </div>

        {collectionBanners.map((banner, index) => (
          <div key={banner.id} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900">Banner {index + 1}</span>
              <button 
                onClick={() => removeBanner(banner.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-700">Collection Name</label>
              <input 
                type="text" 
                defaultValue={banner.name}
                placeholder="Select a collection..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-700">AI Prompt</label>
              <textarea 
                placeholder="Describe the image you want for this collection"
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full border-2 border-blue-500 text-blue-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition-all">
              <Sparkles size={16} />
              Generate Banner
            </button>
          </div>
        ))}
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
          className="flex-[2] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
        >
          Continue to Design <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Step4_AIImages;
