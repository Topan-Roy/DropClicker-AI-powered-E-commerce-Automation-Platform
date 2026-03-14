'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Package, ShoppingBag } from 'lucide-react';

const steps = [
  {
    badge: "BEGINNING",
    title: "Connect Store",
    desc: "Link your Shopify store in seconds with our secure integration.",
    cardBg: "bg-[#F3F5FA]",
    iconBg: null,
    icon: null,
    dotColor: "bg-blue-500",
  },
  {
    badge: "PLUGIN",
    title: "Pick Products",
    desc: "Choose from thousands of UK-stocked products and import with one click.",
    cardBg: "bg-[#FDF2F4]",
    iconBg: "bg-[#F9D7DE]",
    icon: <Package size={14} className="text-[#E84E6E]" strokeWidth={2.5} />,
    dotColor: "bg-blue-500",
  },
  {
    badge: "DONE",
    title: "Start Selling",
    desc: "Orders are fulfilled automatically. Focus on growing your brand.",
    cardBg: "bg-[#F3F5FA]",
    iconBg: "bg-[#DDE5FB]",
    icon: <ShoppingBag size={14} className="text-[#3B71FE]" strokeWidth={2.5} />,
    dotColor: "bg-gray-300",
  }
];

export default function JourneySection() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the section has scrolled relative to the viewport
      const scrollableDistance = rect.height - windowHeight;
      if (scrollableDistance <= 0) return;

      let p = -rect.top / scrollableDistance;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white h-[130vh]" id="journey">

      {/* Sticky Container */}
      <div className="sticky top-0 w-full py-16 lg:py-24 overflow-hidden">

        {/* Subtle Right-Side Glow */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-60"
          style={{
            background: 'radial-gradient(circle at 80% 50%, #E8F0FE 0%, transparent 50%)'
          }}
        />

        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* LEFT COLUMN */}
          <div className="flex flex-col items-start pr-0 lg:pr-10">

            {/* Badge & Marker */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 bg-white shadow-sm">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 grid grid-cols-2 gap-[1px]">
                    <div className="bg-blue-600 rounded-sm" />
                    <div className="bg-blue-600 rounded-sm" />
                    <div className="bg-blue-600 rounded-sm" />
                    <div className="bg-blue-600 rounded-sm" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900 tracking-wide">Journey</span>
              </div>

              {/* Custom Marker Icon (Blue/Cyan outline) */}
              <div className="text-blue-500 transform translate-y-1">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10L12 20L10 24L14 22L24 12" />
                  <path d="M19 13L21 15" />
                  <path d="M11 23L7 25" />
                  <path d="M24 12C25.5 10.5 25.5 8.5 24 7C22.5 5.5 20.5 5.5 19 7L22 10Z" />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-[44px] lg:text-[54px] font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Start Selling in 3<br /> Easy Steps
            </h2>

            <p className="text-gray-400 text-[17px] leading-relaxed max-w-[420px]">
              Our mission is to create innovative and reliable WordPress solutions that help websites reach their full potential.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative pl-6 lg:pl-16 h-[500px] flex flex-col justify-center">

            {/* Timeline Line */}
            <div className="absolute left-[7px] lg:left-[39px] top-4 bottom-4 w-[2px] bg-gray-200 overflow-hidden rounded-full">
              {/* Filled Blue portion */}
              <div
                className="w-full bg-blue-500 rounded-full"
                style={{
                  height: `${45 + progress * 55}%`,
                  transition: 'height 0.1s ease-out'
                }}
              />
            </div>

            {/* Timeline Pin (Top) */}
            <div className="absolute left-[8px] lg:left-[40px] top-6 -translate-x-1/2 -translate-y-6 z-20">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-12 bg-white rounded-full">
                <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#FEF3C7" />
                <path d="M12 10v9" />
                <path d="M8 19h8" />
                <path d="M8 6h8" />
              </svg>
            </div>

            {/* Cards Mask Container to prevent card 3 from showing prematurely at bottom */}
            <div className="relative w-full h-[380px] lg:h-[420px] overflow-visible">

              {/* Cards Flex Container (Slides Up exactly as user scrolls) */}
              <div
                className="absolute w-full flex flex-col gap-10 lg:gap-14 pt-4 will-change-transform"
                style={{
                  transform: `translateY(-${progress * 230}px)`
                }}
              >
                {steps.map((step, idx) => {
                  let cardOpacity = 1;
                  let cardScale = 1;

                  if (idx === 0) {
                    // Fade out and shrink Card 1
                    cardOpacity = Math.max(0, 1 - progress * 2.5);
                    cardScale = Math.max(0.9, 1 - progress * 0.1);
                  } else if (idx === 2) {
                    // Fade in and grow Card 3
                    cardOpacity = Math.max(0, Math.min(1, (progress - 0.2) * 2));
                    cardScale = Math.min(1, 0.9 + progress * 0.1);
                  }

                  // Determine dot color. Card 3 turns blue when fully arrived.
                  const activeDotColor = (idx === 2 && progress > 0.6) ? 'bg-blue-500' : step.dotColor;
                  // Card 3 dot uses outline when not fully active to match design
                  const isOutlineDot = idx === 2 && progress <= 0.6;

                  return (
                    <div
                      key={idx}
                      className="relative w-full max-w-[440px] will-change-transform"
                      style={{
                        opacity: cardOpacity,
                        transform: `scale(${cardScale})`,
                        transformOrigin: 'top left'
                      }}
                    >
                      {/* Dot */}
                      {isOutlineDot ? (
                        <div className="absolute top-[18px] w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300 -left-6 lg:-left-[36.5px] -translate-x-1/2 z-10 box-content transition-colors duration-300" />
                      ) : (
                        <div className={`absolute top-[18px] w-2 h-2 rounded-full ${activeDotColor} -left-6 lg:-left-[36.5px] -translate-x-1/2 z-10 box-content transition-colors duration-300`} />
                      )}

                      {/* Badge */}
                      <span className="inline-block bg-[#3B71FE] text-white text-[10px] font-bold px-3 py-1 rounded-[6px] mb-3 tracking-widest uppercase shadow-sm">
                        {step.badge}
                      </span>

                      {/* Card */}
                      <div className={`${step.cardBg} rounded-[20px] p-6 lg:p-7 border border-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow`}>
                        <div className="flex items-center gap-3 mb-2.5">
                          {step.icon && (
                            <div className={`${step.iconBg} w-[26px] h-[26px] rounded-[6px] flex items-center justify-center`}>
                              {step.icon}
                            </div>
                          )}
                          <h3 className="text-[18px] font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-500 text-[14px] leading-[1.6]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}