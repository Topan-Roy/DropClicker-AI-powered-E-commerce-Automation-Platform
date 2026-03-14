"use client";

import React from 'react';
import { RotateCw, Search, Heart, ShoppingCart, Star, ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

const LivePreview = () => {
  return (
    <div className="w-[340px] flex-shrink-0 sticky top-6 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-fit">
      {/* Panel Header */}
      <div className="p-4 border-b border-gray-50 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-gray-900 text-sm">Live Preview</h3>
          <p className="text-[10px] text-gray-400">Real-time store preview</p>
        </div>
        <button className="p-1.5 hover:bg-gray-50 rounded-lg text-gray-400 transition-colors">
          <RotateCw size={14} />
        </button>
      </div>

      {/* Mock Store Container */}
      <div className="p-3 bg-gray-50 overflow-y-auto max-h-[700px]">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 flex flex-col text-[10px]">
          
          {/* Mock Nav */}
          <div className="p-2 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-black text-xs tracking-tight">STORE</span>
              <div className="flex gap-2">
                <Search size={12} className="text-gray-400" />
                <Heart size={12} className="text-gray-400" />
                <ShoppingCart size={12} className="text-gray-400" />
              </div>
            </div>
            <div className="flex gap-0 border border-gray-100 rounded overflow-hidden">
              <input type="text" placeholder="Search entire store here..." className="flex-1 px-2 py-1 bg-gray-50 text-[8px] focus:outline-none" />
              <button className="bg-orange-500 text-white px-2 py-1 text-[8px] font-bold">Search</button>
            </div>
          </div>

          {/* Mock Hero */}
          <div className="relative h-40 bg-gray-900 flex flex-col items-center justify-center text-center p-4">
            <img 
              src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&q=80" 
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              alt="Hero background"
            />
            <div className="relative z-10">
              <p className="text-white text-[6px] tracking-widest mb-1 uppercase font-bold">THIS NEW YEAR PRODUCT</p>
              <h4 className="text-white text-sm font-black mb-2 leading-tight">MASSIVE SAVINGS<br/>UP TO 80%</h4>
              <button className="bg-white text-gray-900 px-3 py-1 rounded-full font-bold text-[8px]">Shop Now</button>
            </div>
          </div>

          {/* Feature Row */}
          <div className="flex gap-2 p-2 bg-gray-50">
            <div className="flex-1 bg-white p-2 rounded flex flex-col items-center text-center shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center mb-1">
                <Truck size={10} className="text-orange-500" />
              </div>
              <p className="font-bold leading-tight">Free Shipping</p>
              <p className="text-gray-400 text-[6px]">Delivered</p>
            </div>
            <div className="flex-1 bg-white p-2 rounded flex flex-col items-center text-center shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center mb-1">
                <Truck size={10} className="text-orange-500" />
              </div>
              <p className="font-bold leading-tight">Delivers in 2-4 days</p>
              <p className="text-gray-400 text-[6px]">Express</p>
            </div>
            <div className="flex-1 bg-white p-2 rounded flex flex-col items-center text-center shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mb-1">
                <RotateCcw size={10} className="text-blue-500" />
              </div>
              <p className="font-bold leading-tight">30-Day Returns</p>
              <p className="text-gray-400 text-[6px]">Guarantee</p>
            </div>
          </div>

          {/* Flash Sale Buttons */}
          <div className="flex gap-2 px-2 py-3">
            <button className="flex-1 bg-orange-500 text-white py-2 rounded font-black tracking-wider shadow-md hover:bg-orange-600 transition-colors">FLASH SALE</button>
            <button className="flex-1 bg-orange-400 text-white py-2 rounded font-black tracking-wider shadow-md hover:bg-orange-500 transition-colors">CLEARANCE</button>
          </div>

          {/* Reviews */}
          <div className="p-2 border-t border-gray-50 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic">"Your customer's review here! Wonderful product! This definitely changed my life. Great value!"</p>
              <p className="font-bold">Michael Chen</p>
            </div>
            <div className="flex flex-col gap-1 border-t border-gray-50 pt-3">
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic">"Love everything about this store. The attention to detail is incredible."</p>
              <p className="font-bold">Emma Williams</p>
            </div>
          </div>

          {/* Trust Grid */}
          <div className="grid grid-cols-2 gap-2 p-2 bg-gray-50">
            <div className="bg-white p-2 rounded flex flex-col items-center text-center shadow-sm">
              <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center mb-1">
                <Truck size={10} className="text-orange-500" />
              </div>
              <p className="font-bold">Free Shipping</p>
              <p className="text-gray-400 text-[6px]">On orders over £50</p>
            </div>
            <div className="bg-white p-2 rounded flex flex-col items-center text-center shadow-sm">
              <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mb-1">
                <ShieldCheck size={10} className="text-blue-500" />
              </div>
              <p className="font-bold">Secure Payment</p>
              <p className="text-gray-400 text-[6px]">100% protected</p>
            </div>
            <div className="bg-white p-2 rounded flex flex-col items-center text-center shadow-sm">
              <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mb-1">
                <RotateCcw size={10} className="text-green-500" />
              </div>
              <p className="font-bold">Fast Returns</p>
              <p className="text-gray-400 text-[6px]">30-day guarantee</p>
            </div>
            <div className="bg-white p-2 rounded flex flex-col items-center text-center shadow-sm">
              <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mb-1">
                <Headphones size={10} className="text-purple-500" />
              </div>
              <p className="font-bold">24/7 Support</p>
              <p className="text-gray-400 text-[6px]">Always here to help</p>
            </div>
          </div>

          {/* Subscribe Footer */}
          <div className="bg-[#1a1f2c] p-3 text-center flex flex-col gap-2">
            <p className="text-white text-[8px]">Subscribe now for £100 off</p>
            <p className="text-white text-base font-black">£100 off</p>
            <p className="text-gray-400 text-[6px] mb-1">Your first order! £500 minimum</p>
            <button className="bg-orange-600 text-white py-2 rounded font-bold text-[8px] uppercase tracking-wider">SUBSCRIBE</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LivePreview;
