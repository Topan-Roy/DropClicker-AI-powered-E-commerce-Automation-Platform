'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "For new dropshippers testing the UK market.",
      priceMonthly: 19,
      priceAnnually: 15,
      features: [
        "Up to 50 active products",
        "Unlimited orders",
        "Verified UK suppliers",
        "Standard order processing",
        "24-48h delivery estimation",
        "Email support",
      ],
      popular: false,
      ctaText: "Start Starter Trial",
      href: "/signup?plan=starter",
    },
    {
      name: "Growth",
      description: "For scaling stores looking for fast automation.",
      priceMonthly: 39,
      priceAnnually: 31,
      features: [
        "Up to 250 active products",
        "Unlimited orders",
        "Vetted UK premium suppliers",
        "Automated 1-click fulfillment",
        "Real-time inventory sync",
        "Custom invoices & packaging slips",
        "Priority email & chat support",
      ],
      popular: true,
      ctaText: "Start Growth Trial",
      href: "/signup?plan=growth",
    },
    {
      name: "Pro",
      description: "For volume sellers and brands needing custom solutions.",
      priceMonthly: 79,
      priceAnnually: 63,
      features: [
        "Unlimited active products",
        "Unlimited orders",
        "All verified & VIP UK suppliers",
        "Instant automated fulfillment",
        "Real-time inventory & price sync",
        "Custom branding & insert cards",
        "Dedicated account manager",
        "24/7 VIP support",
      ],
      popular: false,
      ctaText: "Start Pro Trial",
      href: "/signup?plan=pro",
    },
  ];

  return (
    <section className="relative w-full bg-slate-50 py-24 overflow-hidden" id="pricing">
      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)`,
          backgroundSize: '110px 110px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-100/80 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Simple, Transparent Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Plans built to scale your business
          </h2>
          <p className="text-lg text-gray-500">
            Start risk-free with our 14-day trial. No credit card required. Cancel anytime.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-blue-600 rounded-full p-1 transition-colors duration-300 focus:outline-none cursor-pointer"
              aria-label="Toggle annual billing"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-sm font-semibold transition-colors ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
                Annually
              </span>
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Save ~20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = isAnnual ? plan.priceAnnually : plan.priceMonthly;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col bg-white rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-blue-600 shadow-[0_20px_50px_rgba(45,111,252,0.15)] ring-2 ring-blue-500/20'
                    : 'border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]'
                }`}
              >
                {/* Popular Tag */}
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-400 min-h-[40px] leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">£{price}</span>
                  <span className="text-sm font-medium text-gray-500">/mo</span>
                  {isAnnual && (
                    <span className="text-xs text-gray-400 block ml-2">
                      billed annually (£{price * 12}/yr)
                    </span>
                  )}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-2" />

                {/* Features list */}
                <ul className="space-y-4 my-6 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`p-0.5 rounded-full flex-shrink-0 mt-0.5 ${plan.popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                        <Check size={14} className="stroke-[3]" />
                      </span>
                      <span className="text-sm text-gray-600 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={plan.href}
                  className={`w-full text-center py-4 rounded-2xl text-sm font-bold transition-all ${
                    plan.popular
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700'
                      : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200/60'
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pricing FAQs or support prompt */}
        <div className="mt-16 text-center text-sm text-gray-400">
          <span>Need custom high-volume enterprise limits? </span>
          <a href="#contact" className="text-blue-600 font-semibold hover:underline">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
