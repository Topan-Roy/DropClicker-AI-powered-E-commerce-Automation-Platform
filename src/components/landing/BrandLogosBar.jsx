import React from 'react';
import { Asterisk, Component, Shield, Eye, Box, Cloud, Zap, Leaf } from 'lucide-react';

const brands = [
  {
    name: 'Snowflake',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2V22M12 2L15 5M12 2L9 5M12 22L9 19M12 22L15 19M22 12H2M22 12L19 9M22 12L19 15M2 12L5 15M2 12L5 9M19.07 4.93L4.93 19.07M19.07 4.93L19.07 8.46M19.07 4.93L15.54 4.93M4.93 19.07L4.93 15.54M4.93 19.07L8.46 19.07M19.07 19.07L4.93 4.93M19.07 19.07L15.54 19.07M19.07 19.07L19.07 15.54M4.93 4.93L8.46 4.93M4.93 4.93L4.93 8.46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    textStyle: "font-serif text-xl"
  },
  {
    name: 'hues',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 21.5C16.4183 21.5 20 17.9183 20 13.5C20 9.08172 12 2.5 12 2.5C12 2.5 4 9.08172 4 13.5C4 17.9183 7.58172 21.5 12 21.5Z" fill="currentColor" />
        <path d="M8 12C8 12 9 11 11 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    textStyle: "font-bold text-2xl tracking-tighter"
  },
  {
    name: 'Cactus',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7V17M12 10C12 10 10 10 9 11M12 13C12 13 14 13 15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    textStyle: "font-semibold text-xl"
  },
  {
    name: 'vision',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="currentColor" />
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeDasharray="2 4" />
      </svg>
    ),
    textStyle: "font-black text-2xl tracking-tighter"
  },
  {
    name: 'Greenish',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 3L14.5 9H19.5L15.5 13L17 19L12 15.5L7 19L8.5 13L4.5 9H9.5L12 3Z" fill="currentColor" />
      </svg>
    ),
    textStyle: "font-bold text-xl"
  },
  {
    name: 'Cloud',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M17.5 19C18.4665 19 19.25 18.2165 19.25 17.25C19.25 16.2835 18.4665 15.5 17.5 15.5H16.75V14.75C16.75 11.2982 13.9518 8.5 10.5 8.5C7.04822 8.5 4.25 11.2982 4.25 14.75V15.5H3.5C2.11929 15.5 1 16.6193 1 18C1 19.3807 2.11929 20.5 3.5 20.5H17.5V19Z" fill="currentColor" />
      </svg>
    ),
    textStyle: "font-bold text-2xl"
  },
  {
    name: 'Proline',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M13 3L6 14H12L11 21L18 10H12L13 3Z" fill="currentColor" />
      </svg>
    ),
    textStyle: "font-bold text-2xl italic tracking-tight"
  },
];

const BrandLogosBar = () => {
  return (
    <div className="relative border-y border-gray-100 py-6 overflow-hidden bg-white/50 backdrop-blur-sm mt-1">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap items-center">
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center gap-3 mx-10 opacity-80 hover:opacity-100 transition-opacity cursor-default group mt-8 mb-3">
            <brand.icon className="w-8 h-8 text-slate-900 transition-transform group-hover:scale-110 duration-300" />
            <span className={`text-slate-900 ${brand.textStyle || 'text-xl  font-bold font-sans'}`}>
              {brand.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BrandLogosBar;