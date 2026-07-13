'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowRight, Chrome, Eye, EyeOff } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '@/redux/slices/authSlice';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError());
    
    const resultAction = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(resultAction)) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F5FA] flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">

      {/* Background blobs for organic feel */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[1000px] bg-white rounded-[32px] shadow-2xl flex flex-col lg:flex-row overflow-hidden relative z-10 border border-white/50 backdrop-blur-sm">

        {/* Left Side: Branding / Marketing */}
        <div className="w-full lg:w-5/12 bg-blue-600 p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle overlay pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

          <div className="relative z-10">
            <Link href="/" className="inline-block mb-12">
              <Image
                src="/Dropclicker.png"
                alt="DropClicker Logo"
                width={160}
                height={40}
                className="brightness-0 invert object-contain h-10 w-auto"
              />
            </Link>

            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Welcome back to <br /> DropClicker.
            </h1>
            <p className="text-blue-100 text-[15px] leading-relaxed mb-8">
              Log in to manage your dropshipping store, discover new winning products, and track your orders in real-time.
            </p>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className="flex -space-x-3 mb-4">
              <img className="w-10 h-10 rounded-full border-2 border-blue-600" src="https://i.pravatar.cc/100?img=1" alt="User" />
              <img className="w-10 h-10 rounded-full border-2 border-blue-600" src="https://i.pravatar.cc/100?img=2" alt="User" />
              <img className="w-10 h-10 rounded-full border-2 border-blue-600" src="https://i.pravatar.cc/100?img=3" alt="User" />
              <div className="w-10 h-10 rounded-full border-2 border-blue-600 bg-blue-500 flex items-center justify-center text-xs font-bold text-white">
                5k+
              </div>
            </div>
            <p className="text-sm font-medium text-blue-100">
              Join 5,000+ sellers scaling to 7 figures.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-7/12 p-8 lg:p-14">
          <div className="max-w-[400px] mx-auto w-full">

            <div className="mb-8">
              <h2 className="text-[28px] font-bold text-gray-900 mb-2">Log in to your account</h2>
              <p className="text-gray-500 text-[15px]">Enter your credentials to access your dashboard.</p>
            </div>

            {/* Social Logins */}
            <div className="mb-8">
              <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 px-4 hover:bg-gray-50 hover:border-gray-300 transition-all text-[15px] font-semibold text-gray-700">
                <Chrome size={20} className="text-blue-500" />
                Continue with Google
              </button>
            </div>

            <div className="relative flex items-center mb-8">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">Or continue with email</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {error && (
                <div className="bg-red-50 text-red-500 p-3 rounded-xl text-sm font-medium border border-red-100">
                  {error}
                </div>
              )}

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

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-700">Password</label>
                  <Link href="/forgot-password" size={18} className="text-sm font-semibold text-blue-600 hover:text-blue-700">Forgot password?</Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-[15px] font-medium text-gray-900 placeholder-gray-400"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3.5 px-4 font-semibold text-[15px] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === 'loading' ? 'Logging In...' : 'Log In'}
                  <ArrowRight size={18} />
                </button>
              </div>

            </form>

            <p className="mt-8 text-center text-sm font-medium text-gray-500">
              Don't have an account?{' '}
              <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-bold hover:underline">
                Sign up for free
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}


