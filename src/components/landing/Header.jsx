

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to check if a link is active
  const isActive = (path) => pathname === path || (path === '/' && pathname === '/');

  // Shared classes for nav links to ensure consistency
  const navLinkStyles = "relative flex h-[72px] items-center text-[16px] font-medium transition-colors duration-200 group";
  const activeUnderline = "absolute bottom-0 left-0 h-[2.5px] w-full bg-[#1A73E8] rounded-t-md";
  const hoverUnderline = "absolute bottom-0 left-0 h-[2.5px] w-0 bg-[#1A73E8] rounded-t-md transition-all duration-300 group-hover:w-full";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Logo */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={48} 
                height={48} 
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex md:items-center md:gap-x-10">
          <Link href="/" className={`${navLinkStyles} ${isActive('/') ? 'text-[#1A73E8]' : 'text-[#333333] hover:text-[#1A73E8]'}`}>
            Home
            {isActive('/') ? <span className={activeUnderline} /> : <span className={hoverUnderline} />}
          </Link>
          
          <button className={`${navLinkStyles} text-[#333333] hover:text-[#1A73E8]`}>
            <span>Explore Services</span>
            <ChevronDown size={18} className="ml-1 mt-0.5" />
            <span className={hoverUnderline} />
          </button>
          
          <Link href="/become-a-pro" className={`${navLinkStyles} ${isActive('/become-a-pro') ? 'text-[#1A73E8]' : 'text-[#333333] hover:text-[#1A73E8]'}`}>
            Become a Pro
            {isActive('/become-a-pro') ? <span className={activeUnderline} /> : <span className={hoverUnderline} />}
          </Link>
          <Link href="/dashboard" className={`${navLinkStyles} ${isActive('/dashboard') ? 'text-[#1A73E8]' : 'text-[#333333] hover:text-[#1A73E8]'}`}>
            Dashboard
            {isActive('/dashboard') ? <span className={activeUnderline} /> : <span className={hoverUnderline} />}
          </Link>
          <Link href="/user" className={`${navLinkStyles} ${isActive('/user') ? 'text-[#1A73E8]' : 'text-[#333333] hover:text-[#1A73E8]'}`}>
            User-Dashboard
            {isActive('/user') ? <span className={activeUnderline} /> : <span className={hoverUnderline} />}
          </Link>
        </nav>

        {/* Right Side: Auth Buttons (Desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          <Link 
            href="/signin" 
            className="rounded-[10px] border border-[#1A73E8] px-6 py-[10px] text-[15px] font-semibold text-[#1A73E8] transition-all hover:bg-blue-50"
          >
            Sign In
          </Link>
          <Link 
            href="/signup" 
            className="rounded-[10px] bg-[#2E86C1] px-6 py-[10px] text-[15px] font-semibold text-white transition-all hover:bg-[#2874A6]"
          >
            Create Account
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#333333] transition-colors hover:text-[#1A73E8]"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-[72px] w-full border-b border-gray-100 bg-white p-6 shadow-lg md:hidden">
          <div className="flex flex-col space-y-5">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-[#1A73E8]">Home</Link>
            <Link href="/explore" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-[#333333]">Explore Services</Link>
            <Link href="/become-a-pro" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-[#333333]">Become a Pro</Link>
            <Link href="/dashboard" className={`${navLinkStyles} ${isActive('/dashboard') ? 'text-[#1A73E8]' : 'text-[#333333] hover:text-[#1A73E8]'}`}>
            Dashboard
            {isActive('/dashboard') ? <span className={activeUnderline} /> : <span className={hoverUnderline} />}
          </Link>
          <Link href="/user" className={`${navLinkStyles} ${isActive('/user') ? 'text-[#1A73E8]' : 'text-[#333333] hover:text-[#1A73E8]'}`}>
            User-Dashboard
            {isActive('/user') ? <span className={activeUnderline} /> : <span className={hoverUnderline} />}
          </Link>
            <div className="flex flex-col gap-3 pt-4">
              <Link href="/signin" className="w-full rounded-[10px] border border-[#1A73E8] py-3 text-center font-semibold text-[#1A73E8]">
                Sign In
              </Link>
              <Link href="/signup" className="w-full rounded-[10px] bg-[#2E86C1] py-3 text-center font-semibold text-white">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;