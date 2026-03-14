'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function VerifyCodePage() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const router = useRouter();

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      console.log('Verifying code:', fullCode);
      router.push('/reset-password');
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F5FA] flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[500px] bg-white rounded-[32px] shadow-2xl p-8 lg:p-12 relative z-10 border border-white/50 backdrop-blur-sm text-center">
        
        <div className="mb-8 text-left">
          <Link href="/forgot-password" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors mb-6">
            <ArrowLeft size={16} />
            Back
          </Link>
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
             <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Check your email</h1>
          <p className="text-gray-500 text-[15px]">We sent a verification code to your email. Enter it below.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-between gap-2">
            {code.map((num, idx) => (
              <input
                key={idx}
                ref={(el) => (inputs.current[idx] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={num}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="w-12 h-14 text-center text-2xl font-bold bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-900"
              />
            ))}
          </div>

          <button 
            type="submit" 
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3.5 px-4 font-semibold text-[15px] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Verify Code
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-gray-500">
          Didn't receive the code?{' '}
          <button className="text-blue-600 hover:text-blue-700 font-bold hover:underline">
            Resend
          </button>
        </p>

      </div>
    </div>
  );
}
