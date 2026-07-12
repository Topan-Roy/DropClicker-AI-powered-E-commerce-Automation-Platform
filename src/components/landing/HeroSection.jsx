import React from 'react';
import { Package, Star, Tag, CheckCircle2 } from 'lucide-react';
import BrandLogosBar from './BrandLogosBar';

const ProductCard = ({ image }) => (
  <div className="w-[180px] bg-white rounded-3xl p-3 pb-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex-shrink-0 transition-transform hover:-translate-y-1">
    <div className="relative w-full h-36 rounded-2xl overflow-hidden bg-gray-50 mb-3">
      <img src={image} alt="Sofa" className="w-full h-full object-cover" />
      <span className="absolute bottom-2 left-2 bg-[#E1F1FF] text-blue-700 text-[11px] font-bold px-3 py-1 rounded-full">
        Furniture
      </span>
    </div>
    <div className="px-1 space-y-2">
      <div className="flex items-center gap-1">
        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        <span className="text-xs font-bold text-gray-900">4.4</span>
        <span className="text-xs text-gray-400">(22k)</span>
      </div>
      <h3 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">
        2 Seater Sofa with USB Ports & Cup Holders
      </h3>
      <div className="flex items-center justify-between pt-1">
        <span className="text-sm font-bold text-gray-900">£99.00</span>
        <div className="flex items-center gap-1 bg-emerald-50 text-emerald-500 px-2 py-0.5 rounded-full">
          <Tag className="w-3 h-3" />
          <span className="text-[10px] font-bold">£19.00 <span className="font-normal">Per unit</span></span>
        </div>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  const cards = Array(6).fill(null);

  return (
    <section className="relative w-full min-h-screen pt-23 pb-0 overflow-hidden ">
      <style>{`
        @keyframes scrollUp { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes scrollDown { from { transform: translateY(-50%); } to { transform: translateY(0); } }
      `}</style>

      {/* BACKGROUND DECORATIONS (SVG) */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        <svg
          viewBox="0 0 1440 778"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip0_2663_7245)">
            <rect width="1440" height="778" fill="white" />
            <g opacity="0.5" clipPath="url(#clip1_2663_7245)">
              <rect width="1440" height="778" fill="url(#paint0_radial_2663_7245)" fillOpacity="0.6" />
              <g opacity="0.3" filter="url(#filter0_f_2663_7245)">
                <circle cx="1401" cy="-82" r="483" fill="#F97415" />
              </g>
            </g>
            <g filter="url(#filter1_f_2663_7245)">
              <circle cx="248" cy="58" r="720" fill="white" />
            </g>
            <circle cx="445.501" cy="285.501" r="433.811" transform="rotate(45 445.501 285.501)" fill="url(#paint1_linear_2663_7245)" />
            <rect x="595.696" y="401.123" width="220" height="220" rx="15.5" transform="rotate(-35 595.696 401.123)" fill="url(#paint2_linear_2663_7245)" stroke="url(#paint3_linear_2663_7245)" />
            <rect x="231.293" y="406.117" width="220" height="220" rx="15.5" transform="rotate(135 231.293 406.117)" fill="url(#paint4_linear_2663_7245)" stroke="url(#paint5_linear_2663_7245)" />
            <rect x="635.696" y="411.123" width="220" height="220" rx="15.5" transform="rotate(-35 635.696 411.123)" fill="url(#paint6_linear_2663_7245)" stroke="url(#paint7_linear_2663_7245)" />
            <rect opacity="0.6" x="177.799" y="200.928" width="321.641" height="321.641" rx="15.5" transform="rotate(-160 177.799 200.928)" fill="url(#paint8_linear_2663_7245)" fillOpacity="0.4" stroke="url(#paint9_linear_2663_7245)" />
          </g>
          <defs>
            <filter id="filter0_f_2663_7245" x="418" y="-1065" width="1966" height="1966" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_2663_7245" />
            </filter>
            <filter id="filter1_f_2663_7245" x="-772" y="-962" width="2040" height="2040" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_2663_7245" />
            </filter>
            <radialGradient id="paint0_radial_2663_7245" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720 778) rotate(-90) scale(778 763)">
              <stop stopColor="#2D6FFC" />
              <stop offset="1" stopColor="#2D6FFC" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="paint1_linear_2663_7245" x1="445.501" y1="-148.31" x2="445.501" y2="719.312" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint2_linear_2663_7245" x1="805.869" y1="611.869" x2="23.7144" y2="-170.286" gradientUnits="userSpaceOnUse">
              <stop offset="0.103843" stopColor="#397FD1" stopOpacity="0" />
              <stop offset="0.8" stopColor="#397FD1" />
            </linearGradient>
            <linearGradient id="paint3_linear_2663_7245" x1="816" y1="621.249" x2="195.183" y2="1.18267" gradientUnits="userSpaceOnUse">
              <stop offset="0.146644" stopColor="#397FD1" stopOpacity="0" />
              <stop offset="1" stopColor="#397FD1" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="paint4_linear_2663_7245" x1="442.869" y1="616.986" x2="-339.286" y2="-165.168" gradientUnits="userSpaceOnUse">
              <stop offset="0.103843" stopColor="#397FD1" stopOpacity="0" />
              <stop offset="0.8" stopColor="#397FD1" />
            </linearGradient>
            <linearGradient id="paint5_linear_2663_7245" x1="453" y1="626.367" x2="-167.817" y2="6.29987" gradientUnits="userSpaceOnUse">
              <stop offset="0.146644" stopColor="#397FD1" stopOpacity="0" />
              <stop offset="1" stopColor="#397FD1" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="paint6_linear_2663_7245" x1="845.869" y1="621.869" x2="63.7144" y2="-160.286" gradientUnits="userSpaceOnUse">
              <stop offset="0.103843" stopColor="#397FD1" stopOpacity="0" />
              <stop offset="0.8" stopColor="#397FD1" />
            </linearGradient>
            <linearGradient id="paint7_linear_2663_7245" x1="856" y1="631.249" x2="235.183" y2="11.1827" gradientUnits="userSpaceOnUse">
              <stop offset="0.146644" stopColor="#397FD1" stopOpacity="0" />
              <stop offset="1" stopColor="#397FD1" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="paint8_linear_2663_7245" x1="485.948" y1="509.419" x2="-655.93" y2="-632.459" gradientUnits="userSpaceOnUse">
              <stop offset="0.103843" stopColor="#397FD1" stopOpacity="0" />
              <stop offset="1" stopColor="#397FD1" />
            </linearGradient>
            <linearGradient id="paint9_linear_2663_7245" x1="500.739" y1="523.114" x2="-405.601" y2="-382.131" gradientUnits="userSpaceOnUse">
              <stop offset="0.146644" stopColor="#397FD1" stopOpacity="0" />
              <stop offset="1" stopColor="#397FD1" stopOpacity="0.4" />
            </linearGradient>
            <clipPath id="clip0_2663_7245">
              <rect width="1440" height="778" fill="white" />
            </clipPath>
            <clipPath id="clip1_2663_7245">
              <rect width="1440" height="778" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full">

        {/* Left Column */}
        <div className="z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm rounded-full px-4 py-1.5">
            <div className="">
              {/* <Package className="w-3 h-3 text-white" /> */}
              <img src='https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg' alt="UK Flag" className="w-5 h-4" />
            </div>
            <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">Exclusive UK Suppliers</span>
          </div>

          <h1 className="text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Your All-in-One Tool <br />
            for UK

            <span className="relative inline-block px-2 ml-1">

              {/* SVG Background */}
              <svg
                className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[400px] h-[120px] mt-10 z-0 pointer-events-none"
                viewBox="0 0 416 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.6" filter="url(#filter0_g_2685_16522)">
                  <rect x="52" y="52" width="312" height="5" fill="#3786FB" />
                </g>
                <defs>
                  <filter
                    id="filter0_g_2685_16522"
                    x="0"
                    y="0"
                    width="416"
                    height="109"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.3333333432674408 0.3333333432674408"
                      numOctaves="3"
                      seed="8811"
                    />
                    <feDisplacementMap
                      in="shape"
                      scale="104"
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result="displacedImage"
                      width="100%"
                      height="100%"
                    />
                    <feMerge result="effect1_texture_2685_16522">
                      <feMergeNode in="displacedImage" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              {/* Text */}
              <span className="relative z-10 text-blue-500 font-medium">
                Dropshipping
              </span>

              {/* UI Selection Handles */}
              <span className="absolute inset-0 border-[2px] border-blue-400/60 rounded-sm -m-1">
                <span className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 bg-white border border-blue-500" />
                <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-white border border-blue-500" />
                <span className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-white border border-blue-500" />
                <span className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-white border border-blue-500" />
              </span>

            </span>


            <br />
            Success
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-[500px]">
            Save time and boost profits with DropClicker. Automate everything from finding high-margin UK products to fulfilling orders with 24-48 hour delivery.
          </p>

          <div className="space-y-4">
            <div className="flex items-center p-1.5 bg-white border border-gray-100 rounded-full shadow-xl shadow-gray-200/50 max-w-md">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-6 py-3 bg-transparent outline-none text-sm text-gray-700"
              />
              <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                Start your trial
              </button>
            </div>
            <div className="flex gap-6 pl-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 14-day free trial
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Scrolling Cards */}
        <div className="relative h-[650px] overflow-hidden">
          {/* Fades */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

          <div className="flex gap-4 h-full justify-center">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 animate-scrollUp">
              {[...cards, ...cards].map((_, i) => (
                <ProductCard key={i} image={i % 3 === 0 ? "/hero.png" : i % 3 === 1 ? "/hero1.png" : "/hero2.png"} />
              ))}
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4 animate-scrollDown pt-10">
              {[...cards, ...cards].map((_, i) => (
                <ProductCard key={i} image={i % 3 === 1 ? "/hero.png" : i % 3 === 2 ? "/hero1.png" : "/hero2.png"} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 animate-scrollUp">
              {[...cards, ...cards].map((_, i) => (
                <ProductCard key={i} image={i % 3 === 2 ? "/hero.png" : i % 3 === 0 ? "/hero1.png" : "/hero2.png"} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollUp {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        .animate-scrollUp { animation: scrollUp 20s linear infinite; }
        .animate-scrollDown { animation: scrollDown 22s linear infinite; }
      `}</style>

      {/* Brand Logos Bar */}
      <BrandLogosBar />
    </section>
  );
};

export default HeroSection;