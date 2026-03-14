'use client'
import { Mail } from 'lucide-react';

export default function NeedMoreHelpBanner({ onContactClick }) {
  return (
    <div className="bg-[#F0F7FF] rounded-3xl border border-blue-100 px-8 py-14 text-center">
      <h2 className="text-[32px] font-bold text-gray-900 mb-3">Need more help?</h2>
      <p className="text-[15px] text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
        Our support team is available 24/7 to assist you with any questions or issues you might have.
      </p>
      <button
        onClick={onContactClick}
        className="bg-[#1D7DFF] hover:bg-blue-700 text-white rounded-2xl px-10 py-4 text-[15px] font-bold flex items-center gap-2 mx-auto transition-all active:scale-95 shadow-lg shadow-blue-200"
      >
        <Mail size={18} />
        Contact Support
      </button>
    </div>
  );
}