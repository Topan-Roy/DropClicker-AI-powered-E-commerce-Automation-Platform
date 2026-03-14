

'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MessageSquare, Star, ArrowLeft, ArrowRight } from 'lucide-react';

// TESTIMONIALS — replace with API fetch later
const DEMO_TESTIMONIALS = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    location: "Dhaka, Bangladesh",
    avatar: "/images/avatar1.jpg",
    avatarFallback: "https://i.ibb.co.com/fcvHpMX/fe8ad9381a90feda4e2706b8094200c59bd0c130.jpg",
    rating: 4.8,
    review: "I was incredibly impressed with the home nursing services from Shebok. After my surgery, I needed professional care and support at home. The nurse was compassionate, skilled, and made my recovery process so much easier.\n\nI felt safe and well-cared for throughout the entire experience. Thank you, Shebok!"
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    location: "London, UK",
    avatar: "/images/avatar2.jpg",
    avatarFallback: "https://i.pravatar.cc/150?img=5",
    rating: 5.0,
    review: "DropClicker has completely transformed my dropshipping business. The automation tools save me hours every week and the UK supplier network is fantastic.\n\nHighly recommend to anyone serious about scaling their store!"
  },
  {
    id: 3,
    name: "James Carter",
    location: "Manchester, UK",
    avatar: "/images/avatar3.jpg",
    avatarFallback: "https://i.pravatar.cc/150?img=8",
    rating: 4.9,
    review: "The real-time inventory sync alone is worth the subscription. No more overselling or angry customers.\n\nThe support team is also incredibly responsive. Best tool I've used for UK dropshipping."
  }
];

// FAQ — replace with API fetch or CMS later
const DEMO_FAQ = [
  {
    id: 1,
    question: "Are all suppliers really based in the UK?",
    answer: "Yes, every supplier in our network is UK-based and vetted for quality, reliability, and fast dispatch. We verify stock availability and delivery times before listing."
  },
  {
    id: 2,
    question: "How does VAT work with DropClicker?",
    answer: "DropClicker automatically calculates VAT where applicable and generates compliant invoices for your accounting."
  },
  {
    id: 3,
    question: "Average shipping time?",
    answer: "Most orders are processed within 24 hours and delivered within 1-2 business days across the UK mainland."
  },
  {
    id: 4,
    question: "Can I use this with my existing store?",
    answer: "Absolutely. DropClicker integrates seamlessly with Shopify, WooCommerce, and other major platforms."
  }
];


export default function TestimonialsAndFAQ() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const testimonials = DEMO_TESTIMONIALS;
  const faqItems = DEMO_FAQ;
  const current = testimonials[activeTestimonial];

  const handlePrev = () => setActiveTestimonial(i => (i - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setActiveTestimonial(i => (i + 1) % testimonials.length);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/Screenshot%202026-03-12%20040943.png')` }}
        />
      </div>

      {/* FIX 1 — SVG BACKGROUND: VISIBLE & CORRECT */}
      <div className="hidden absolute inset-0 z-0 pointer-events-none overflow-hidden">

      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-20 pb-16 w-full">

        {/* TESTIMONIALS SECTION */}
        <div className="w-full max-w-lg mx-auto mb-24">
          {/* HEADER */}
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
              Rated 4.9/5 by UK Sellers
            </h2>
            <p className="text-base text-gray-500 max-w-sm mx-auto leading-relaxed">
              Join over 5,000+ entrepreneurs scaling their brands with DropClicker.
            </p>
          </div>

          {/* CARD GROUP */}
          <div className="relative">
            {/* ORANGE + DECORATORS — top-left */}
            <div className="absolute -top-6 -left-2 pointer-events-none select-none z-20">
              <span className="absolute text-[#FB923C] font-black text-2xl" style={{ top: 0, left: 0 }}>+</span>
              <span className="absolute text-[#FB923C] font-black text-base" style={{ top: '20px', left: '22px' }}>+</span>
            </div>

            {/* REVIEWER HEADER CARD */}
            <div className="bg-white rounded-2xl px-6 py-5 shadow-sm border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 flex-shrink-0 bg-gray-50"
                  onError={(e) => { e.currentTarget.src = current.avatarFallback; }}
                />
                <div className="flex flex-col">
                  <p className="font-bold text-gray-900 text-base leading-none">{current.name}</p>
                  <p className="text-sm text-gray-400 mt-1.5">{current.location}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-black text-gray-900 leading-none">{current.rating}</span>
                  <span className="text-base text-gray-400 font-semibold">/5</span>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* REVIEW TEXT CARD */}
            <div className="relative bg-white rounded-2xl p-6 sm:p-7 mt-3 shadow-md border border-gray-100">
              {/* Blue icon top-right */}
              <div className="absolute -top-4 -right-3 w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center shadow-md border-2 border-white z-10">
                <MessageSquare size={20} className="text-white fill-white/20" />
              </div>

              {current.review.split('\n\n').map((para, i) => (
                <p key={i} className={`text-sm sm:text-base text-gray-600 leading-relaxed italic ${i > 0 ? 'mt-4' : ''}`}>
                  {i === 0 ? `"${para}` : para}{i === current.review.split('\n\n').length - 1 ? '"' : ''}
                </p>
              ))}
            </div>

            {/* NAVIGATION ARROWS */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-200 transition-all shadow-sm active:scale-95"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-200 transition-all shadow-sm active:scale-95"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="w-full max-w-lg mx-auto flex flex-col items-center pb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10 text-center leading-tight tracking-tight">
            Frequently Ask Questions
          </h2>

          <div className="w-full flex flex-col gap-4">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.id}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className={`w-full rounded-2xl px-6 py-5 cursor-pointer transition-all duration-300 border ${isOpen
                    ? 'bg-white shadow-md border-gray-100'
                    : 'bg-white/70 border-white/50 hover:bg-white hover:shadow-sm'
                    }`}
                >
                  <div className="flex items-center justify-between gap-4 w-full">
                    <h3 className={`text-base sm:text-lg font-semibold leading-snug transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}>
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-sm animate-in fade-in zoom-in duration-300">
                        <ChevronRight size={16} className="text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-gray-400">
                        <ChevronDown size={20} />
                      </div>
                    )}
                  </div>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-gray-50 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>


        </div>
      </div>
    </section>
  );
}