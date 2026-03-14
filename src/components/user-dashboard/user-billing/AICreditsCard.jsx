'use client';
import { useState } from 'react';

export default function AICreditsCard({ packages, onBuy }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
      <div className="mb-4">
        <h3 className="font-bold text-gray-900 text-lg">Need More AI Credits?</h3>
        <p className="text-sm text-gray-400">Top up your credits anytime</p>
      </div>

      <div className="space-y-3 mb-6">
        {packages.map((pkg) => (
          <div 
            key={pkg.id}
            onClick={() => setSelectedId(pkg.id)}
            className={`flex items-center justify-between border rounded-2xl px-5 py-3 cursor-pointer transition-all ${
              selectedId === pkg.id ? 'border-blue-500 bg-blue-50/50' : 'border-gray-100 hover:border-blue-200'
            }`}
          >
            <div>
              <p className="font-bold text-gray-900">{pkg.credits}</p>
              <p className="text-[10px] text-gray-400 uppercase font-bold">Credits</p>
            </div>
            <span className="text-blue-600 font-black text-lg">£{pkg.price}</span>
          </div>
        ))}
      </div>

      <button 
        disabled={!selectedId}
        onClick={onBuy}
        className="mt-auto w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-100"
      >
        Buy Credits
      </button>
    </div>
  );
}