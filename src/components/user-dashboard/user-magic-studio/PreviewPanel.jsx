'use client';
import { CloudUpload, Sparkles, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function PreviewPanel({ generating, result, activeTab }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result?.result || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-2 border-dashed border-gray-200 rounded-2xl min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-gray-50/30 overflow-hidden relative">
      {generating ? (
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm font-bold text-blue-600 animate-pulse">Generating your assets...</p>
          <p className="text-xs text-gray-400 mt-1">This may take a few seconds</p>
        </div>
      ) : result ? (
        <div className="w-full h-full p-8 self-start animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-sm font-bold text-blue-700">Generated Result</span>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap bg-gray-50 p-4 rounded-xl border border-gray-100">
              {result.result}
            </div>
            <button 
              onClick={handleCopy}
              className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              {copied ? <Check size={14} className="text-green-500" /> : <Copy size={13} />}
              {copied ? "Copied!" : "Copy to Clipboard"}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center px-8 max-w-xs">
          <div className="flex justify-center mb-6">
            <CloudUpload size={56} className="text-gray-300" strokeWidth={1.5} />
          </div>
          <h3 className="text-base font-bold text-gray-700 mb-2">
            {activeTab === 'url' ? 'No Assets Generated Yet' : 'Ready to Create'}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {activeTab === 'url' 
              ? 'Enter your product URL on the left to generate high-quality, AI-optimized assets automatically.' 
              : 'Fill in the product details and choose your generation type to start creating magic assets.'}
          </p>
        </div>
      )}
    </div>
  );
}