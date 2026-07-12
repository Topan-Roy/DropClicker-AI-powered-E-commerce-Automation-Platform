

'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const cards = [
  {
    title: "Furniture",
    desc: "Home Nursing services provide various medical help and support",
    image: "/image/35348757cae46117920ebf568d94426ad6e70148.png",
  },
  {
    title: "Outdoor & Garden",
    desc: "Physical therapy sessions at home for rehabilitation.",
    image: "/image/b6fbbebf47948751d56da3bf87674f505e5eccd5.jpg",
  },
  {
    title: "Sports & Fitness",
    desc: "Physical therapy sessions at home for rehabilitation.",
    image: "/image/b6fbbebf47948751d56da3bf87674f505e5eccd5 (1).jpg",
  },
  {
    title: "Home & Kitchen",
    desc: "Physical therapy sessions at home for rehabilitation.",
    image: "/image/b6fbbebf47948751d56da3bf87674f505e5eccd5 (2).jpg",
  },
  {
    title: "Electronics",
    desc: "Physical therapy sessions at home for rehabilitation.",
    image: "/image/b6fbbebf47948751d56da3bf87674f505e5eccd5 (1).jpg",
  },
  {
    title: "Beauty & Health",
    desc: "Physical therapy sessions at home for rehabilitation.",
    image: "/image/35348757cae46117920ebf568d94426ad6e70148.png",
  },
];

// Combine the array multiple times for an infinite looping effect
const EXTENDED_CARDS = Array(30).fill(cards).flat();

// The sliding math relies on non-featured cards having a constant width
// Normal Card = 260px, Gap = 24px (gap-6) => Each shift is exactly 284px
const NORMAL_CARD_WIDTH = 260;
const GAP = 24;
const OFFSET_PER_SLIDE = NORMAL_CARD_WIDTH + GAP;

export default function ExploreCategories() {
  const START_IDX = cards.length * 10; // Start in the middle to allow scrolling left
  const [featuredIdx, setFeaturedIdx] = useState(START_IDX);
  const timerRef = useRef(null);

  // Auto-scroll logic
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setFeaturedIdx((prev) => prev + 1);
    }, 3000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleManualNav = (direction) => {
    if (direction === 'prev') {
      setFeaturedIdx((prev) => prev - 1);
    } else {
      setFeaturedIdx((prev) => prev + 1);
    }
    startTimer(); // Reset auto-scroll interval on manual interaction
  };

  const handleDotClick = (idx) => {
    // Jump to the closest identical item in the array to minimize huge swing animations
    const currentBaseIdx = featuredIdx % cards.length;
    let diff = idx - currentBaseIdx;

    // Take the shortest path
    if (diff > cards.length / 2) diff -= cards.length;
    if (diff < -cards.length / 2) diff += cards.length;

    setFeaturedIdx((prev) => prev + diff);
    startTimer();
  };

  const activeDotIdx = featuredIdx % cards.length;

  return (
    <section className="relative w-full bg-white py-8 overflow-hidden" id="explore-categories">
      {/* CSS Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)`,
          backgroundSize: '110px 110px',
        }}
      />

      {/* Mountain Shapes Background from Image */}
      <div
        className="absolute inset-x-0 bottom-0 top-1/4 z-0 pointer-events-none opacity-60 bg-no-repeat bg-cover bg-bottom mix-blend-multiply"
        style={{ backgroundImage: `url('/Frame%202147238494.png')` }}
      />

      <div className="relative z-10 w-full overflow-hidden">
        {/* Header Section */}
        <div className="text-center mb-5 px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Explore UK Categories</h2>
          <p className="text-base text-gray-500 max-w-[280px] mx-auto text-center leading-snug">
            High-margin categories ready for your store.
          </p>
        </div>

        {/* Card Container Layout */}
        <div className="w-full max-w-[1240px] mx-auto relative px-6 xl:px-0">

          {/* Floating Orange Decorators */}
          <div className="absolute z-20 pointer-events-none" style={{ top: '8%', right: '15%' }}>
            <span style={{ color: '#FB923C', fontWeight: 'bold', fontSize: '22px', position: 'absolute', top: 0, left: 0 }}>+</span>
            <span style={{ color: '#FB923C', fontWeight: 'bold', fontSize: '15px', position: 'absolute', top: '16px', left: '16px' }}>+</span>
          </div>

          <div className="overflow-hidden pb-12 w-full min-h-[420px] lg:min-h-[460px]">
            {/* Sliding Track */}
            <div
              className="flex flex-row items-end pt-[20px]"
              style={{
                width: 'max-content',
                gap: `${GAP}px`,
                transform: `translateX(-${featuredIdx * OFFSET_PER_SLIDE}px)`,
                transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {EXTENDED_CARDS.map((card, idx) => {
                const isFeatured = idx === featuredIdx;

                return (
                  <div
                    key={`${idx}-${card.title}`}
                    className={`
                      bg-white rounded-[20px] border border-gray-100 flex flex-col overflow-hidden text-left
                      shadow-sm hover:shadow-md cursor-pointer flex-shrink-0
                      ${isFeatured
                        ? 'w-[290px] lg:w-[350px] h-[360px] lg:h-[380px] shadow-lg mb-0'
                        : 'w-[260px] h-[350px] lg:h-[360px]'
                      }
                    `}
                    style={{ transition: 'all 0.7s cubic-bezier(0.25, 1, 0.5, 1)' }}
                  >
                    {/* Image Area */}
                    <div className={`relative w-full bg-gray-50 overflow-hidden ${isFeatured ? 'h-48 lg:h-52' : 'h-44'}`} style={{ transition: 'all 0.7s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className={`font-bold text-gray-900 mb-2 ${isFeatured ? 'text-[19px]' : 'text-[16px]'}`} style={{ transition: 'all 0.7s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                        {card.title}
                      </h3>
                      <p className={`text-gray-500 leading-relaxed max-w-[280px] ${isFeatured ? 'text-[14px] mb-6 line-clamp-3' : 'text-[13px] mb-4 line-clamp-2'}`}>
                        {card.desc}
                      </p>
                      <div className="mt-auto">
                        <span className="text-[#2D6FFC] text-[13px] font-semibold flex items-center gap-1 group">
                          Show Now <span className="text-[#2D6FFC] text-lg font-light leading-none group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center mt-2">
          {/* Dots */}
          <div className="flex items-center gap-2 mb-6">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`rounded-full transition-all duration-300 ${activeDotIdx === idx
                  ? 'w-6 h-2 bg-[#2D6FFC]'
                  : 'w-2 h-2 bg-gray-300'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Manual Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => handleManualNav('prev')}
              className="w-10 h-10 rounded-full border border-[1.5px] border-gray-100 bg-white flex items-center justify-center text-blue-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
            >
              <ArrowLeft size={18} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => handleManualNav('next')}
              className="w-10 h-10 rounded-full border border-[1.5px] border-gray-100 bg-white flex items-center justify-center text-blue-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
            >
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}