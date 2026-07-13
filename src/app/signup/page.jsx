'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Lock, User, ArrowRight, Chrome, CheckCircle2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearError } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError());
    setSuccessMsg('');
    
    const resultAction = await dispatch(registerUser({ name, email, password, confirmPassword: password }));
    if (registerUser.fulfilled.match(resultAction)) {
      setSuccessMsg(resultAction.payload || 'Account created successfully. Please log in.');
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }
  };

  const perks = [
    'Access to 10,000+ UK-stocked products',
    'Automated order fulfillment',
    'Real-time profit tracking',
    'Free for the first 14 days',
  ];

  return (
    <div className="min-h-screen bg-[#F3F5FA] flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-400/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[1000px] bg-white rounded-[32px] shadow-2xl flex flex-col lg:flex-row overflow-hidden relative z-10 border border-white/50 backdrop-blur-sm">

        {/* Left Side: Form */}
        <div className="w-full lg:w-7/12 p-8 lg:p-14 order-2 lg:order-1">
          <div className="max-w-[400px] mx-auto w-full">

            <div className="mb-8">
              <Link href="/" className="inline-flex items-center mb-8">
                <Image 
                  src="/Dropclicker.png" 
                  alt="DropClicker Logo" 
                  width={140} 
                  height={35} 
                  className="object-contain h-8 w-auto" 
                />
              </Link>
              <h2 className="text-[28px] font-bold text-gray-900 mb-2">Create your account</h2>
              <p className="text-gray-500 text-[15px]">Start your 14-day free trial. No credit card required.</p>
            </div>

            {/* Google Login */}
            <div className="mb-6">
              <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 px-4 hover:bg-gray-50 hover:border-gray-300 transition-all text-[15px] font-semibold text-gray-700">
                <Chrome size={20} className="text-blue-500" />
                Sign up with Google
              </button>
            </div>

            <div className="relative flex items-center mb-6">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">Or with email</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {error && (
                <div className="bg-red-50 text-red-500 p-3 rounded-xl text-sm font-medium border border-red-100">
                  {error}
                </div>
              )}
              
              {successMsg && (
                <div className="bg-green-50 text-green-600 p-3 rounded-xl text-sm font-medium border border-green-100 flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  {successMsg}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-[15px] font-medium text-gray-900 placeholder-gray-400"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
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

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-[15px] font-medium text-gray-900 placeholder-gray-400"
                    placeholder="Create a password"
                    required
                    minLength={8}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5 pl-1">Minimum 8 characters.</p>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading' || successMsg}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3.5 px-4 font-semibold text-[15px] transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === 'loading' ? 'Creating Account...' : 'Create Account'}
                  <ArrowRight size={18} />
                </button>
              </div>

              <p className="text-xs text-center text-gray-400 pt-2">
                By signing up, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>

            </form>

            <p className="mt-6 text-center text-sm font-medium text-gray-500">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:text-blue-700 font-bold hover:underline">
                Log in
              </Link>
            </p>

          </div>
        </div>

        {/* Right Side: Branding */}
        <div className="w-full lg:w-5/12 bg-blue-600 p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden order-1 lg:order-2">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-10">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-sm font-semibold text-white">14-day free trial</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Launch your dropshipping business today.
            </h1>
            <p className="text-blue-100 text-[15px] leading-relaxed mb-10">
              Everything you need to find, import, and sell products — all in one place.
            </p>

            {/* Perks list */}
            <ul className="space-y-4">
              {perks.map((perk, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-green-300 flex-shrink-0" />
                  <span className="text-sm font-medium text-blue-50">{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 hidden lg:block mt-12">
            <div className="flex -space-x-3 mb-4">
              <img className="w-10 h-10 rounded-full border-2 border-blue-600" src="https://i.pravatar.cc/100?img=4" alt="User" />
              <img className="w-10 h-10 rounded-full border-2 border-blue-600" src="https://i.pravatar.cc/100?img=5" alt="User" />
              <img className="w-10 h-10 rounded-full border-2 border-blue-600" src="https://i.pravatar.cc/100?img=6" alt="User" />
              <div className="w-10 h-10 rounded-full border-2 border-blue-600 bg-blue-500 flex items-center justify-center text-xs font-bold text-white">
                5k+
              </div>
            </div>
            <p className="text-sm font-medium text-blue-100">
              Join 5,000+ sellers already scaling with DropClicker.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}


