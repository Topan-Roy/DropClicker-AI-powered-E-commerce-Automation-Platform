"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Product", href: "#product" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
    { name: "Admin Dashboard", href: "/dashboard" },
    { name: "User Dashboard", href: "/user" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm rounded-full px-6 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/Dropclicker.png"
              alt="Dropclicker Logo"
              width={140}
              height={40}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

        </div>

        {/* Links */}
        {/* <div className="hidden md:flex items-center gap-8">
          {['How it Works', 'Product', 'Pricing', 'Contact', 'Admin Dashboard', 'User Dashboard'].map((link) => (
            <a key={link} href="#" className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
              {link}
            </a>
          ))}
        </div> */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/login" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            Log In
          </Link>
          <Link href="/signup" className="flex items-center justify-center bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-3xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-2 pb-4 border-b border-gray-50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="/login"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-3 text-sm font-semibold text-blue-600 border border-blue-100 rounded-2xl hover:bg-blue-50 transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center bg-blue-600 text-white py-3 rounded-2xl text-sm font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
          >
            Sign Up
          </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;