"use client";

import React, { useState } from 'react';
import { Search, Plus, Box, Check, MousePointer2, AlertCircle } from 'lucide-react';

const Step2_Products = ({ onContinue, onBack }) => {
  const [method, setMethod] = useState('browse');
  const [selectedCollections, setSelectedCollections] = useState(['Appliances', 'Pets']);
  const [autoCreateMenu, setAutoCreateMenu] = useState(true);

  const collections = [
    "Appliances", "Baby & Kids", "Bath + Floor", "Electronics", "Fitness", 
    "Home & Living", "Pets", "Kids & Family", "Garden", "Kitchen", "Beauty"
  ];

  const toggleCollection = (name) => {
    if (selectedCollections.includes(name)) {
      setSelectedCollections(selectedCollections.filter(c => c !== name));
    } else {
      setSelectedCollections([...selectedCollections, name]);
    }
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Auto-save badge */}
      <div className="flex">
        <div className="bg-green-50 text-green-600 border border-green-200 rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1.5">
          <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
          Draft auto-saved
        </div>
      </div>

      {/* Product Selection Method */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-gray-900">Product Selection Method *</label>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setMethod('browse')}
            className={`p-5 rounded-2xl border-2 text-left transition-all
              ${method === 'browse' ? 'border-blue-500 bg-blue-50 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}
            `}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${method === 'browse' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
              <Box size={20} />
            </div>
            <p className="font-bold text-gray-900 text-sm mb-1">Browse 100+ million Products</p>
            <p className="text-xs text-gray-400">Import all products from categories</p>
          </button>

          <button
            onClick={() => setMethod('pick')}
            className={`p-5 rounded-2xl border-2 text-left transition-all
              ${method === 'pick' ? 'border-blue-500 bg-blue-50 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200'}
            `}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${method === 'pick' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
              <Plus size={20} />
            </div>
            <p className="font-bold text-gray-900 text-sm mb-1">Pick individual Products</p>
            <p className="text-xs text-gray-400">Choose specific products manually</p>
          </button>
        </div>
      </div>

      {method === 'browse' && (
        <div className="flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-300">
          {/* Choose collections */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-gray-900">Choose collections to sell *</label>
            <div className="relative mb-3">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search collections..." 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-100 rounded-xl text-sm focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {collections.map(name => (
                <button
                  key={name}
                  onClick={() => toggleCollection(name)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border
                    ${selectedCollections.includes(name) 
                      ? 'bg-blue-600 border-blue-600 text-white flex items-center gap-1' 
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'}
                  `}
                >
                  {selectedCollections.includes(name) && <Check size={12} strokeWidth={3} />}
                  {name}
                </button>
              ))}
            </div>
            <p className="text-xs text-blue-600 font-bold">{selectedCollections.length} collections selected</p>
          </div>

          {/* Collection Images */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-gray-900">Collection Images</label>
              <button className="text-blue-600 text-xs font-bold">+ Add</button>
            </div>
            <div className="w-full h-32 border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50 flex flex-col items-center justify-center text-gray-400">
              <Box size={24} className="mb-2" />
              <p className="text-xs font-medium">No collection images yet. Add 3-5 to showcase</p>
            </div>
          </div>

          {/* Selected Products */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-gray-900">Selected Products *</label>
            <div className="w-full h-32 border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50 flex flex-col items-center justify-center text-gray-400 gap-3">
              <p className="text-xs font-medium">No products selected yet</p>
              <button className="px-5 py-2 border-2 border-blue-500 rounded-xl text-blue-600 text-xs font-bold hover:bg-blue-50 transition-all">
                + Select Products
              </button>
            </div>
          </div>

          {/* Store Menu */}
          <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div 
                onClick={() => setAutoCreateMenu(!autoCreateMenu)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all
                  ${autoCreateMenu ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white group-hover:border-blue-400'}
                `}
              >
                {autoCreateMenu && <Check size={14} className="text-white" strokeWidth={3} />}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900">Auto-create menu structure</span>
                <span className="text-xs text-gray-500">AI will organise navigation automatically</span>
              </div>
            </label>
          </div>
        </div>
      )}

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
          Continue to Design →
        </button>
      </div>
    </div>
  );
};

export default Step2_Products;
