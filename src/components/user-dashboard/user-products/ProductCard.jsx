'use client';
import { Star, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/user/products/${product.id}`} className="group h-full flex flex-col">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden 
        transition-all duration-300 flex flex-col hover:-translate-y-0.5 hover:shadow-md">

        <div className="relative w-full pb-[75%] rounded-2xl overflow-hidden">
          <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <span className="absolute bottom-2.5 left-2.5 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">
            {product.categoryLabel || 'Furniture'}
          </span>
          {product.isNew && (
            <span className="absolute top-2.5 right-2.5 bg-white border border-gray-200 text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
              New
            </span>
          )}
        </div>

        <div className="p-3.5 flex flex-col">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Star size={11} className="fill-yellow-400 text-yellow-400" />
            <span className="text-[11px] font-bold text-gray-800">{product.rating || '4.4'}</span>
            <span className="text-[11px] text-gray-400">({product.reviews >= 1000 ? `${(product.reviews / 1000).toFixed(0)}k` : product.reviews || '22k'})</span>
          </div>

          <h3 className="text-[13px] font-bold text-gray-900 leading-snug line-clamp-2 mb-2 group-hover:text-blue-600">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-black text-gray-900">£{product.price.toFixed(2)}</span>
            <div className="flex items-center gap-1">
              <Leaf size={11} className="text-green-500" />
              <span className="text-[11px] font-bold text-green-600">£{product.profitPerUnit.toFixed(2)}</span>
              <span className="text-[10px] text-gray-400">Per unit</span>
            </div>
          </div>

          <button onClick={e => { e.preventDefault(); }} className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all active:scale-[0.97]">
            Import
          </button>
        </div>
      </div>
    </Link>
  );
}
