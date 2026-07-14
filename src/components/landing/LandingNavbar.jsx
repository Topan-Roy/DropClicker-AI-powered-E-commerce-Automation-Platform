"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, LayoutDashboard, User } from 'lucide-react';
import { useSelector } from 'react-redux';

const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);

  const navLinks = [
    { name: "How it Works", href: "#how-it-works", id: "how-it-works" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Categories", href: "#explore-categories", id: "explore-categories" },
    { name: "Trending", href: "#trending-marketplace", id: "trending-marketplace" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "FAQ", href: "#faq", id: "faq" },
  ];

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  let dashboardLinks = [];
  if (isAuthenticated && user) {
    if (user.role === 'admin' || user.role === 'super_admin') {
      dashboardLinks = [{ name: "Admin Dashboard", href: "/dashboard", icon: LayoutDashboard }];
    } else {
      dashboardLinks = [{ name: "User Dashboard", href: "/user/dashboard", icon: User }];
    }
  }

  // Track navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking using IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    observerRef.current = observers;
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div
        className={`backdrop-blur-md border rounded-full px-6 py-3 flex items-center justify-between relative transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 border-gray-200 shadow-md'
            : 'bg-white/80 border-gray-100 shadow-sm'
        }`}
      >
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

        {/* Nav Links — Center */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 group ${
                  isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {link.name}
                {/* Active underline indicator */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right Side: Dashboard links + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {dashboardLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100"
              >
                <Icon size={13} />
                {link.name}
              </Link>
            );
          })}

          <div className="h-5 w-px bg-gray-200 mx-1" />

          {!isAuthenticated ? (
            <>
              <Link href="/login" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Log In
              </Link>
              <Link
                href="/signup"
                className="flex items-center justify-center bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
              >
                Sign Up
              </Link>
            </>
          ) : null}
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
        <div className="md:hidden absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-3xl p-6 flex flex-col gap-4">
          {/* Nav links */}
          <div className="flex flex-col gap-1 pb-4 border-b border-gray-100">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Dashboard links */}
          <div className="flex flex-col gap-1 pb-4 border-b border-gray-100">
            {dashboardLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all"
                >
                  <Icon size={15} />
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Auth CTAs */}
          {!isAuthenticated && (
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
          )}
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;