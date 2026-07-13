'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import api from '@/services/api';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'sent' | 'error'
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setStatus('loading');

    try {
      await api.post('/auth/forgot-password', { email });
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F5FA] flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[500px] bg-white rounded-[32px] shadow-2xl overflow-hidden relative z-10 border border-white/50">

        <div className="p-8 lg:p-12">
          {/* Logo */}
          <Link href="/" className="inline-block mb-10">
            <Image
              src="/Dropclicker.png"
              alt="DropClicker Logo"
              width={160}
              height={40}
              className="object-contain h-9 w-auto"
            />
          </Link>

          {status === 'sent' ? (
            /* Success State */
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <CheckCircle2 size={32} className="text-green-500" />
              </div>
              <h2 className="text-[26px] font-bold text-gray-900 mb-3">Check your email!</h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                We&apos;ve sent a password reset link to{' '}
                <strong className="text-gray-700">{email}</strong>.
                Please check your inbox and spam folder.
              </p>
              <p className="text-gray-400 text-sm mb-8">
                The link expires in <strong>10 minutes</strong>.
              </p>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-[15px]"
              >
                <ArrowLeft size={18} />
                Back to Login
              </Link>
            </div>
          ) : (
            /* Form State */
            <>
              <div className="mb-8">
                <Link href="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-blue-600 transition-colors mb-6">
                  <ArrowLeft size={16} />
                  Back to Login
                </Link>
                <h1 className="text-[28px] font-bold text-gray-900 mb-2">Forgot password?</h1>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  No worries! Enter your email and we&apos;ll send you a reset link.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {error && (
                  <div className="bg-red-50 text-red-500 p-3 rounded-xl text-sm font-medium border border-red-100">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      id="forgot-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-[15px] font-medium text-gray-900 placeholder-gray-400"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3.5 px-4 font-semibold text-[15px] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Reset Link'}
                    <ArrowRight size={18} />
                  </button>
                </div>

              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
