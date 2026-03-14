'use client';
import * as Icons from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Categories', icon: 'ShoppingCart' },
  { id: 'toys', label: 'Toys & Hobbies', icon: 'Gamepad2' },
  { id: 'home-garden', label: 'Home & Garden', icon: 'Home' },
  { id: 'tools', label: 'Home Improvements & Tools', icon: 'Wrench' },
  { id: 'outdoors', label: 'Outdoors', icon: 'Umbrella' },
  { id: 'sports', label: 'Sports & Fitness', icon: 'CircleDot' },
  { id: 'pets', label: 'Pets', icon: 'PawPrint' },
  { id: 'electronics', label: 'Electronics & Gadgets', icon: 'Smartphone' },
  { id: 'clothing', label: 'Clothing, Shoes & Jewelry', icon: 'Shirt' },
  { id: 'beauty', label: 'Beauty & Personal Care', icon: 'Sparkles' },
  { id: 'automotive', label: 'Automotive & Motorcycle', icon: 'Car' },
  { id: 'other', label: 'Other Category', icon: 'Package' },
];

export default function ImportCategoryBar({ activeCategory, onSelect }) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Category</h2>
      <div className="flex gap-6 overflow-x-auto pb-6
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {CATEGORIES.map(cat => {
          const Icon = Icons[cat.icon] || Icons.Package;
          const isActive = activeCategory === cat.id;
          return (
            <button key={cat.id} onClick={() => onSelect(cat.id)}
              className="flex flex-col items-center gap-2.5 min-w-fit flex-shrink-0 group">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center
                transition-all duration-200
                ${isActive ? 'bg-gray-200' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                <Icon size={22} strokeWidth={1.5} className="text-gray-600" />
              </div>
              <span className={`text-[11px] text-center leading-tight max-w-[72px]
                ${isActive ? 'font-semibold text-gray-800' : 'font-normal text-gray-500'}`}>
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}