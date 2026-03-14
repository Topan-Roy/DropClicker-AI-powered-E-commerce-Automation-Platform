'use client';
import { Star, Leaf, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function ImportProductCard({ product, onShare }) {
  const formattedReviews = product.reviews >= 1000
    ? `${(product.reviews / 1000).toFixed(0)}k`
    : product.reviews;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      {/* Image Section */}
      <Link href={`/user/imports/${product.id}`} className="block relative w-full overflow-hidden" style={{ paddingBottom: '75%' }}>
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-2.5 left-2.5">
          <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">
            {product.categoryLabel}
          </span>
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-3.5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          <span className="text-[11px] font-bold text-gray-800">{product.rating}</span>
          <span className="text-[11px] text-gray-400">({formattedReviews})</span>
        </div>

        <Link href={`/user/imports/${product.id}`}>
          <h3 className="text-[13px] font-bold leading-snug line-clamp-2 mb-2.5 hover:text-blue-600 transition-colors h-auto">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-black text-gray-900">£{product.price.toFixed(2)}</span>
          <div className="flex items-center gap-1">
            <Leaf size={11} className="text-green-500" />
            <span className="text-[11px] font-bold text-green-600">£{product.profitPerUnit.toFixed(2)}</span>
            <span className="text-[10px] text-gray-400">Per unit</span>
          </div>
        </div>

        <button
          onClick={(e) => { e.preventDefault(); onShare(); }}
          className="w-full py-2 rounded-xl border border-gray-200 flex items-center justify-center gap-2 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all"
        >
          <Share2 size={13} /> Share
        </button>
      </div>
    </div>
  );
}