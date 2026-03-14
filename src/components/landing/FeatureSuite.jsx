'use client';

import React from 'react';
import { RefreshCw, Truck, FileText, Bell } from 'lucide-react';

/**
 * FeatureSuite Component
 * Final refinements applied to heading, subtitle, and feature title sizes 
 * to achieve exact match with the provided screenshot.
 */
export default function FeatureSuite() {
  const features = [
    {
      Icon: RefreshCw,
      title: "Real-time Inventory Sync",
      desc: "Suppliers update stock or prices anytime. Your store syncs automatically in real time."
    },
    {
      Icon: Truck,
      title: "Next-Day UK Fulfillment",
      desc: "Orders are instantly forwarded to suppliers. Fast dispatch with automatic tracking sync."
    },
    {
      Icon: FileText,
      title: "Integrated VAT Invoicing",
      desc: "Automatic VAT calculation on every order. Invoices ready for accounting and reports."
    },
    {
      Icon: Bell,
      title: "Instant Stock Alerts",
      desc: "Immediate alerts for low stock and restocks. Never miss a product update again."
    }
  ];

  return (
    <section className="relative w-full bg-white py-12 overflow-hidden" id="features">
      {/* GRID BACKGROUND — FULL OPACITY CSS VERSION */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)`,
          backgroundSize: '110px 110px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* SECTION HEADER — REFINED SIZES */}
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs text-gray-500 bg-white mb-5">
            Feature Suite
          </span>
          {/* FIX 1 — HEADING SIZE: text-4xl */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Full Automation Suite
          </h2>
          {/* FIX 2 — SUBTITLE SIZE: text-sm */}
          <p className="text-sm text-gray-500 max-w-sm mx-auto text-center">
            Scale your operations without increasing your workload.
          </p>
        </div>

        {/* CENTERED CONTAINER */}
        <div className="relative max-w-[520px] mx-auto px-8">

          {/* VERTICAL DASHED LINE */}
          <div
            className="absolute z-0 pointer-events-none"
            style={{
              left: '56px',
              top: '44px',
              bottom: '44px',
              width: '1px',
              borderLeft: '1.5px dashed #BFDBFE'
            }}
          />

          <div className="flex flex-col">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`relative z-10 flex flex-row items-start gap-6 ${idx < features.length - 1 ? 'mb-16' : ''}`}
              >
                {/* ICON BOX — SQUIRCLE SHAPE */}
                <div
                  className="w-12 h-12 rounded-2xl border border-blue-100 flex items-center justify-center flex-shrink-0 z-10 relative"
                  style={{ backgroundColor: '#EFF6FF' }}
                >
                  <feature.Icon size={22} color="#3B82F6" strokeWidth={1.5} />
                </div>

                {/* TEXT CONTENT */}
                <div className="flex flex-col pt-1">
                  {/* FIX 3 — FEATURE TITLE SIZE: text-lg font-semibold */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[320px]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}