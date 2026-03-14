'use client'
import { Copy, Check } from 'lucide-react';

export default function ReferralLinkCard({ referralLink, copied, onCopy }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <h3 className="text-base font-bold text-gray-900">Your Referral Link</h3>
      <p className="text-sm text-gray-400 mt-0.5 mb-5">Share this link to start earning commissions</p>
      
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
          <p className="text-sm text-gray-600 truncate font-medium">
            {referralLink?.link || 'Loading link...'}
          </p>
        </div>
        
        <button
          onClick={onCopy}
          className={`bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-3 text-sm font-semibold flex items-center gap-2 transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-blue-100 ${copied ? 'bg-green-600 hover:bg-green-700' : ''}`}
        >
          {copied ? (
            <>
              <Check size={15} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={15} />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}