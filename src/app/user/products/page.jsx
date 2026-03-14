
'use client';

import { useState, useEffect, useMemo } from 'react';

import { fetchProducts } from '@/services/userProductsService';

import CategoryBar from '@/components/user-dashboard/user-products/CategoryBar';

import FilterPanel from '@/components/user-dashboard/user-products/FilterPanel';

import ProductCard from '@/components/user-dashboard/user-products/ProductCard';

import { LayoutGrid, Search, SlidersHorizontal } from 'lucide-react';



const INITIAL_FILTERS = {

  priceType: 'All Price',

  customPriceMin: 20,

  customPriceMax: 1120,

  minRating: 1,

  stockStatus: 'All',

  supplier: 'All Suppliers',

};



export default function UserProductsPage() {

  const [allProducts, setAllProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [activeCategory, setActiveCategory] = useState('all');

  const [searchQuery, setSearchQuery] = useState('');

  const [showFilter, setShowFilter] = useState(true);

  const [filters, setFilters] = useState(INITIAL_FILTERS);



  useEffect(() => {

    fetchProducts().then(res => { setAllProducts(res); setLoading(false); });

  }, []);



  const filteredProducts = useMemo(() => {

    return allProducts.filter(p => {

      const catMatch = activeCategory === 'all' || p.category === activeCategory;

      const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase());

      const stockMatch = filters.stockStatus === 'All' || p.stock === filters.stockStatus;

      let priceMatch = true;

      if (filters.priceType === 'Below £200') priceMatch = p.price < 200;

      if (filters.priceType === 'Custom Price') priceMatch = p.price >= filters.customPriceMin && p.price <= filters.customPriceMax;



      return catMatch && searchMatch && stockMatch && priceMatch;

    });

  }, [allProducts, activeCategory, searchQuery, filters]);



  if (loading) return <div className="p-20 text-center text-blue-600 font-bold animate-pulse">Loading Catalog...</div>;



  return (
    <div className="w-full">
      <CategoryBar activeCategory={activeCategory} onSelect={setActiveCategory} />

      <div className="w-full px-4 lg:px-6 py-6">
        <div className="flex gap-5 items-start">
          {showFilter && (
            <div className="fixed inset-0 z-50 lg:relative lg:inset-auto lg:z-0 shrink-0">
              <div className="absolute inset-0 bg-black/20 lg:hidden" onClick={() => setShowFilter(false)} />
              <div className="relative h-full lg:h-auto w-[260px]">
                <FilterPanel
                  filters={filters}
                  onApply={(f) => { setFilters(f); if (window.innerWidth < 1024) setShowFilter(false); }}
                  onReset={() => setFilters(INITIAL_FILTERS)}
                  onClose={() => setShowFilter(false)}
                />
              </div>
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="bg-white border border-gray-100 rounded-2xl px-4 py-2.5 mb-5 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <LayoutGrid size={18} />
                </div>
                <span className="text-sm font-bold text-gray-900 hidden sm:block">All Products</span>
                <span className="text-xs text-gray-400 font-medium ml-1">({filteredProducts.length})</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative hidden sm:block">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm w-48 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-50 transition-all font-medium"
                    placeholder="Search Product"
                  />
                </div>
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold border transition-all ${showFilter ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                >
                  <SlidersHorizontal size={14} /> Filter
                </button>
              </div>
            </div>

            <div className={`grid gap-4 grid-cols-2 md:grid-cols-2 ${showFilter ? 'lg:grid-cols-2 xl:grid-cols-3' : 'lg:grid-cols-3 xl:grid-cols-4'}`}>
              {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}