'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Instagram, BarChart2, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D1B2A] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Brand */}
        <div className="flex flex-col">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image
              src="/logo.png"
              alt="DropClicker"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-xl font-bold tracking-tight">
              DropClicker
            </span>
          </Link>
          <p className="text-gray-400 text-sm max-w-[220px] mb-6 leading-relaxed">
            The all-in-one automation tool for UK dropshipping success. Fast shipping, high margins, zero hassle.
          </p>

          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-xl border border-gray-700 bg-transparent flex items-center justify-center text-gray-400 hover:border-gray-500 hover:text-white transition-colors cursor-pointer">
              <Twitter size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-xl border border-gray-700 bg-transparent flex items-center justify-center text-gray-400 hover:border-gray-500 hover:text-white transition-colors cursor-pointer">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-xl border border-gray-700 bg-transparent flex items-center justify-center text-gray-400 hover:border-gray-500 hover:text-white transition-colors cursor-pointer">
              <BarChart2 size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-xl border border-gray-700 bg-transparent flex items-center justify-center text-gray-400 hover:border-gray-500 hover:text-white transition-colors cursor-pointer">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Platform */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Platform</h3>
          <Link href="#" className="text-gray-400 text-sm block mb-3 hover:text-white transition-colors">How It Works</Link>
          <Link href="#" className="text-gray-400 text-sm block mb-3 hover:text-white transition-colors">UK Products</Link>
          <Link href="#" className="text-gray-400 text-sm block mb-3 hover:text-white transition-colors">Pricing</Link>
          <Link href="#" className="text-gray-400 text-sm block mb-3 hover:text-white transition-colors">Integrations</Link>
        </div>

        {/* Column 3: Resources */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Resources</h3>
          <Link href="#" className="text-gray-400 text-sm block mb-3 hover:text-white transition-colors">Help Center</Link>
          <Link href="#" className="text-gray-400 text-sm block mb-3 hover:text-white transition-colors">Blog</Link>
          <Link href="#" className="text-gray-400 text-sm block mb-3 hover:text-white transition-colors">Case Studies</Link>
          <Link href="#" className="text-gray-400 text-sm block mb-3 hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Column 4: Legal */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Legal</h3>
          <Link href="#" className="text-gray-400 text-sm block mb-3 hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-gray-400 text-sm block mb-3 hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="text-gray-400 text-sm block mb-3 hover:text-white transition-colors">UK VAT Info</Link>
          <Link href="#" className="text-gray-400 text-sm block mb-3 hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-800" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © 2025 DropClicker. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}