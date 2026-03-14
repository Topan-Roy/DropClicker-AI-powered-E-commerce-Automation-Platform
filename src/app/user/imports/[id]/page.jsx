'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { fetchImportProductById } from '@/services/userImportsService';
import { ChevronRight, Star, TrendingUp, Share2, Zap, ShieldCheck, RotateCcw } from 'lucide-react';
import ShareModal from '@/components/user-dashboard/user-imports/ShareModal';
import ImportProductCard from '@/components/user-dashboard/user-imports/ImportProductCard';

const iconMap = { Zap, ShieldCheck, RotateCcw };

export default function ImportDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [shareProduct, setShareProduct] = useState(null);

  useEffect(() => {
    fetchImportProductById(id).then(setProduct);
  }, [id]);

  if (!product) return null;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-5 space-y-0">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-blue-500 font-medium mb-4">
          <span className="cursor-pointer">Home Goods</span>
          <ChevronRight size={12} className="text-gray-400" />
          <span className="cursor-pointer">Furniture</span>
        </nav>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6 grid lg:grid-cols-[auto_1fr_auto] gap-6">
          {/* Left: Gallery */}
          <div className="w-full lg:w-[200px] flex-shrink-0">
            <div className="aspect-square rounded-2xl overflow-hidden border border-gray-100 mb-3">
              <img src={product.images[activeImg]} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-[66px] h-[56px] rounded-xl overflow-hidden border-2 transition-all ${activeImg === i ? 'border-blue-500' : 'border-transparent opacity-60'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Center: Info */}
          <div className="space-y-3">
            <h1 className="text-xl font-bold text-gray-900 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-semibold">{product.rating} (124)</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-4">£{product.price.toFixed(2)}</div>

            <div className="bg-green-50 border border-green-100 rounded-xl p-3.5 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1.5 rounded-lg text-green-600 shadow-sm flex items-center justify-center">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700">Your Profit</p>
                  <p className="text-[10px] text-green-600 font-medium leading-none mt-0.5">Margin: 4%</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-base font-bold text-green-700">£16.00</p>
                <p className="text-[10px] text-gray-400 font-medium">Per unit</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShareProduct(product)}
                className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold flex items-center gap-2 text-gray-700 hover:bg-gray-50 transition-all"
              >
                <Share2 size={18} className="text-gray-600" /> Share
              </button>
              <button className="flex-[2] py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-100 hover:bg-blue-700 transition-all">
                Import to My Store
              </button>
            </div>
          </div>

          {/* Right: Perks */}
          <div className="w-full lg:w-[200px] flex-shrink-0 bg-gray-50/50 rounded-2xl p-4 space-y-4">
            {product.perks.map((perk, i) => {
              const Icon = iconMap[perk.icon];
              return (
                <div key={i} className="flex gap-3">
                  <div className={`${perk.bg} ${perk.color} w-9 h-9 items-center justify-center flex rounded-xl flex-shrink-0`}><Icon size={18} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs">{perk.title}</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">{perk.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-5 mb-0 border-b border-gray-200 flex gap-8">
          {['Description', 'You May Also Like'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === 'Description' ? 'description' : 'related')}
              className={`pb-3 text-sm font-semibold transition-all border-b-2 ${(activeTab === 'description' && tab === 'Description') || (activeTab === 'related' && tab === 'You May Also Like')
                  ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="py-5">
          {activeTab === 'description' ? (
            <div className="max-w-4xl text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {product.description}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.relatedProducts.concat(product.relatedProducts.slice(0, 4)).map((p, i) => (
                <ImportProductCard key={`${p.id}-${i}`} product={p} onShare={() => setShareProduct(p)} />
              ))}
            </div>
          )}
        </div>

        {shareProduct && <ShareModal product={shareProduct} onClose={() => setShareProduct(null)} />}
      </div>
    </div>
  );
}