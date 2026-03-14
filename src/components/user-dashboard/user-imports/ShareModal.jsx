'use client';
import { useState, useEffect, useRef } from 'react';
import { X, Star, Leaf, Check, Copy } from 'lucide-react';

export default function ShareModal({ product, onClose }) {
  const [copied, setCopied] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(product.shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div ref={modalRef} className="bg-white rounded-2xl w-full max-w-[340px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Dark Header */}
        <div className="bg-[#1E293B] px-5 py-3 flex items-center justify-between">
          <span className="text-gray-400 text-xs font-medium">Share Modal</span>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="p-5">
          {/* Summary Box */}
          <div className="bg-blue-50 rounded-xl p-4 mb-5">
            <h3 className="text-gray-900 font-bold text-sm mb-2.5">Summary</h3>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <Star size={13} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                <span className="text-xs text-gray-400">({product.reviews >= 1000 ? '22k' : product.reviews})</span>
              </div>
              <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                Furniture
              </span>
            </div>
            <p className="text-xs font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</p>
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-gray-900">£{product.price.toFixed(2)}</span>
              <div className="flex items-center gap-1 text-[11px] font-bold text-green-600">
                <Leaf size={12} className="text-green-500" />
                <span>£19.00</span>
                <span className="text-[10px] text-gray-400 font-medium ml-1 lowercase">Per unit</span>
              </div>
            </div>
          </div>

          <h4 className="text-center font-bold text-sm text-gray-900 mb-4">Share with your social friends</h4>

          {/* Social Icons Row */}
          <div className="flex justify-center gap-3 mb-6">
            {[
              { label: '✈', color: '#0088CC' }, // Telegram
              { label: 'W', color: '#25D366' }, // WhatsApp
              { label: 'D', color: '#5865F2' }, // Discord
              { label: 'M', color: '#0084FF' }, // Messenger
              { label: '✕', color: '#000000' }, // X
              { label: 'f', color: '#1877F2' }, // Facebook
              { label: 'in', color: '#0077B5' } // LinkedIn
            ].map((social, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold hover:scale-110 transition-transform"
                style={{ backgroundColor: social.color }}
              >
                {social.label}
              </button>
            ))}
          </div>

          {/* Copy Link */}
          <p className="text-xs text-gray-400 mb-1.5">or copy link</p>
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
            <span className="flex-1 px-3 py-2.5 text-xs text-gray-400 truncate">{product.shareUrl}</span>
            <button
              onClick={handleCopy}
              className="px-3 py-2.5 text-[10px] font-black text-blue-600 border-l border-gray-200 hover:bg-blue-50 transition-colors bg-white"
            >
              {copied ? 'COPIED' : 'COPY'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}