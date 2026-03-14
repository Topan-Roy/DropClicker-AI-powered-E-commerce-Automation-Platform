'use client';
import { CloudUpload, Sparkles, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function BlogPreviewPanel({ generating, result }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    if (!result?.content) return;
    await navigator.clipboard.writeText(result.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-2 border-dashed border-gray-200 rounded-2xl min-h-[500px] flex items-center justify-center p-8 bg-gray-50/30">
      {!generating && !result && (
        <div className="text-center max-w-xs animate-in fade-in duration-500">
          <div className="flex justify-center mb-5">
            <CloudUpload size={56} className="text-gray-300" strokeWidth={1.5} />
          </div>
          <h3 className="text-[17px] font-bold text-gray-800 mb-2">No Blog Post Generated Yet</h3>
          <p className="text-[13px] text-gray-400 leading-relaxed text-center">
            Enter your target keyword and website URL on the left to generate a high-quality, SEO-optimized blog post with AI.
          </p>
        </div>
      )}

      {generating && (
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm font-bold text-blue-600 animate-pulse">Generating your blog post...</p>
          <p className="text-[11px] text-gray-400 mt-2">Scanning your site and writing content...</p>
        </div>
      )}

      {!generating && result && (
        <div className="w-full animate-in slide-in-from-bottom-2 duration-500">
          <div className="flex items-center justify-between mb-5 px-1">
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
              <Sparkles size={14} className="text-blue-600" />
              <span className="text-xs font-bold text-blue-700 uppercase tracking-tight">Blog Post Generated</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-blue-600 transition-colors border border-gray-200 rounded-lg px-4 py-2 bg-white hover:border-blue-200 shadow-sm"
            >
              {copied ? <><Check size={14} className="text-green-500" /> Copied!</> : <><Copy size={13} /> Copy Content</>}
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-50 pb-4">{result.title}</h2>
            <div className="text-sm text-gray-600 leading-[1.7] whitespace-pre-line prose prose-blue">
              {result.content}
            </div>
          </div>
          
          <div className="flex gap-4 mt-4 px-2">
            <div className="text-[11px] text-gray-400">Tone: <span className="font-bold text-gray-500">{result.tone}</span></div>
            <div className="text-[11px] text-gray-400">Length: <span className="font-bold text-gray-500">{result.length}</span></div>
          </div>
        </div>
      )}
    </div>
  );
}