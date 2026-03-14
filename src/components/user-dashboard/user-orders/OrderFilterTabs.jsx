import { Search } from 'lucide-react';

export default function OrderFilterTabs({ activeFilter, onFilter, searchQuery, onSearch }) {
  const tabs = ['All', 'In Stock', 'Low Stock', 'Out of Stock'];
  
  return (
    <div className="flex items-center justify-between bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
      <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onFilter(tab)}
            className={`px-4 py-1.5 text-sm transition-all ${
              activeFilter === tab 
                ? 'bg-white text-gray-900 font-bold rounded-lg shadow-sm' 
                : 'text-gray-500 font-medium hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search by Order# or Customer"
          className="bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 py-2 text-sm w-72 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
        />
      </div>
    </div>
  );
}