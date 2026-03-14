import { Star, Leaf } from 'lucide-react';

export default function ProductMiniCard({ product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 w-full flex-shrink-0">
      <div className="relative h-36 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider">
          {product.category}
        </span>
      </div>
      <div className="p-3">
        <div className="flex items-center gap-1 mb-1">
          <Star size={11} className="fill-yellow-400 text-yellow-400" />
          <span className="text-[11px] font-black text-gray-800">{product.rating}</span>
          <span className="text-[11px] text-gray-400">({product.reviews})</span>
        </div>
        <p className="text-[12px] font-bold text-gray-900 line-clamp-2 leading-tight mb-2 min-h-[32px]">
          {product.name}
        </p>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-black text-gray-900">{product.price}</span>
          <div className="flex items-center gap-0.5">
            <Leaf size={11} className="text-green-500" />
            <span className="text-[11px] font-bold text-green-600">{product.profit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}