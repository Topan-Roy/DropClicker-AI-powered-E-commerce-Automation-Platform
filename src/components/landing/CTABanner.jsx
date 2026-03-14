import React from 'react';

export default function CTABanner() {
  return (
    <section className="w-full relative">
      <div className="w-full relative overflow-hidden flex flex-col items-center justify-center">

        {/* SVG Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            viewBox="0 0 1444 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="1444" height="460" fill="#F3FAFE" />
            <mask id="mask0_2663_8145" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="1444" height="460">
              <rect width="1444" height="460" fill="#E7F4FE" />
            </mask>
            <g mask="url(#mask0_2663_8145)">
              <rect opacity="0.4" x="-49.7158" y="-101" width="638.002" height="584.472" rx="50" transform="rotate(45 -49.7158 -101)" fill="#1093F1" />
              <rect x="-183.716" y="-96" width="638.002" height="584.472" rx="50" transform="rotate(45 -183.716 -96)" fill="#B7DFFB" />
              <rect opacity="0.1" x="1455.36" y="-150.929" width="125.311" height="584.472" rx="50" transform="rotate(45 1455.36 -150.929)" fill="#1093F1" />
              <rect opacity="0.14" x="1678.28" y="-147" width="137.698" height="584.472" rx="50" transform="rotate(45 1678.28 -147)" fill="#1093F1" />
            </g>
          </svg>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-14 px-8 w-full">
          <h2 className="text-2xl font-bold text-[#1E3A5F] max-w-lg mx-auto leading-snug mb-6 uppercase tracking-wide">
            Interested In Growing Your Online Presence?
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-sm font-semibold shadow-md transition-all hover:scale-105 active:scale-95">
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
