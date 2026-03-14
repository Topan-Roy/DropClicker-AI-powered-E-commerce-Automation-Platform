'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

/**
 * TrendingMarketplace Component
 * * Pixel-perfect implementation of the product grid section.
 * To use real API data: Replace the DEMO_PRODUCTS array with your 
 * fetched data (ensure it follows the same object structure).
 */

// 1. DEMO DATA ARRAY — EASY TO REPLACE WITH API LATER
const DEMO_PRODUCTS = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  image: "/landingpagecard.png",
  category: "Furniture",
  rating: 4.4,
  reviews: "22k",
  name: "2 Seater Sofa with USB Ports & Cup Holders",
  price: 99.00,
  profitPerUnit: 19.00,
}));

const INITIAL_COUNT = 4;

// 2. PRODUCT CARD COMPONENT — INLINE FOR PIXEL-PERFECT CONTROL
function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col transition-shadow hover:shadow-md">
      {/* IMAGE AREA */}
      <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
          // Fallback mechanism to ensure the grid never looks broken
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80';
          }}
        />

        {/* CATEGORY BADGE — Bottom-left overlay exactly as seen in screenshot */}
        <div className="absolute bottom-3 left-3 bg-[#BAE6FD] text-[#0369A1] text-[10px] font-bold px-3 py-1 rounded-lg">
          {product.category}
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="p-4 flex flex-col gap-1.5">

        {/* RATING ROW */}
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-xs">★</span>
          <span className="text-xs font-bold text-gray-800">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        {/* PRODUCT NAME — Limited to 2 lines to maintain grid alignment */}
        <h3 className="text-[13px] font-semibold text-gray-900 leading-snug line-clamp-2 min-h-[36px]">
          {product.name}
        </h3>

        {/* PRICE & PROFIT BADGE ROW */}
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="text-base font-bold text-gray-900">
            £{product.price.toFixed(2)}
          </span>

          {/* PROFIT BADGE — Green with trending icon */}
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-lg">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
            £{product.profitPerUnit.toFixed(2)}
            <span className="text-emerald-400 font-medium ml-0.5">Per unit</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// 3. MAIN SECTION COMPONENT
export default function TrendingMarketplace() {
  const visibleProducts = DEMO_PRODUCTS.slice(0, INITIAL_COUNT);

  return (
    <section className="relative w-full bg-white overflow-hidden py-12 border-t border-gray-50">

      {/* FAINT CSS GRID BACKGROUND */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)`,
          backgroundSize: '110px 110px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight mb-3">
            Trending Marketplace
          </h2>
          <p className="text-sm text-gray-500 font-medium max-w-[240px] mx-auto leading-relaxed">
            Browse products ready to import.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/login"
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm hover:shadow-md group"
          >
            See More <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}