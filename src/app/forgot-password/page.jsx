'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending code
    console.log('Sending reset code to:', email);
    router.push('/verify-code');
  };

  return (
    <div className="min-h-screen bg-[#F3F5FA] flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[500px] bg-white rounded-[32px] shadow-2xl p-8 lg:p-12 relative z-10 border border-white/50 backdrop-blur-sm">
        
        <div className="mb-8">
          <Link href="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors mb-6">
            <ArrowLeft size={16} />
            Back to Login
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
          <p className="text-gray-500 text-[15px]">Enter your email for a verification code.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-400" />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-[15px] font-medium text-gray-900 placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3.5 px-4 font-semibold text-[15px] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Send Code
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-gray-500">
          Remembered your password?{' '}
          <Link href="/login" className="text-blue-600 hover:text-blue-700 font-bold hover:underline">
            Login here
          </Link>
        </p>

      </div>
    </div>
  );
}
