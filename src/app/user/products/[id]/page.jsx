'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchProductById, fetchProducts } from '@/services/userProductsService';
import ProductCard from '@/components/user-dashboard/user-products/ProductCard';
import { ChevronRight, Star, TrendingUp, ShieldCheck, RotateCcw, Share2, Plus, Loader2 } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [activeImg, setActiveImg] = useState('');
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [importing, setImporting] = useState(false);

  useEffect(() => {
    Promise.all([fetchProductById(id), fetchProducts()]).then(([p, all]) => {
      setProduct(p);
      setActiveImg(p.image);
      setActiveImgIdx(0);
      setRelated(all.slice(0, 8));
    });
  }, [id]);

  if (!product) return null;

  const handleImport = () => {
    setImporting(true);
    setTimeout(() => setImporting(false), 1200);
  };

  const handleThumbnailClick = (img, idx) => {
    setActiveImg(img);
    setActiveImgIdx(idx);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="w-full px-4 lg:px-6 py-6">
        {/* Top Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h1>
          <div className="flex items-center gap-2">
            <span className="bg-blue-50 text-blue-500 px-3 py-0.5 rounded-lg text-xs font-semibold">Home Goods</span>
            <span className="text-gray-400 text-xs">›</span>
            <span className="bg-blue-50 text-blue-500 px-3 py-0.5 rounded-lg text-xs font-semibold">Furniture</span>
          </div>
        </div>

        {/* Main Detail Card */}
        <div className="p-0 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Images */}
            <div className="w-full lg:w-[200px] shrink-0">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3 border border-gray-100">
                <img src={activeImg} className="w-full h-full object-cover" alt={product.name} />
              </div>
              <div className="flex gap-2">
                {[product.image, product.image, product.image].map((img, i) => (
                  <button
                    key={i}
                    onClick={() => handleThumbnailClick(img, i)}
                    className={`w-24 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0
                    ${activeImgIdx === i ? 'border-blue-500' : 'border-transparent opacity-60'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Center: Info */}
            <div className="flex-1 max-w-xl">
              <div className="mt-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">£{product.price.toFixed(2)}</h2>
                <div className="flex items-center gap-1 mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-800 ml-1">4.8</span>
                  <span className="text-sm text-gray-400">(124)</span>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                      <TrendingUp size={16} />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-xs font-bold text-green-800 uppercase">Your Profit</h4>
                      <p className="text-[10px] text-green-600 font-bold">Margin: 4%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-green-600">£16.00</span>
                    <p className="text-[10px] text-gray-400 font-medium">Per unit</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
                    Share
                  </button>
                  <button
                    onClick={handleImport}
                    className="flex-1 bg-blue-600 flex items-center justify-center gap-2 py-2.5 rounded-xl hover:opacity-90 text-white text-xs font-bold transition-all shadow-md active:scale-[0.98]"
                  >
                    {importing ? <Loader2 className="animate-spin" size={16} /> : <span>+ Import to My Store</span>}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Perks */}
            <div className="w-full lg:w-[280px] shrink-0 bg-white border border-gray-100 rounded-2xl p-5 space-y-5">
              {[
                { icon: TrendingUp, title: 'Fast Shipping', desc: 'Get your orders delivered quickly and reliably.', bg: 'bg-green-100', text: 'text-green-600' },
                { icon: ShieldCheck, title: 'Quality Assured', desc: 'Every product is carefully checked to meet high standards.', bg: 'bg-orange-100', text: 'text-orange-500' },
                { icon: RotateCcw, title: 'Easy Returns', desc: 'Quick and easy return process, no stress involved.', bg: 'bg-blue-100', text: 'text-blue-600' }
              ].map((perk, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${perk.bg} ${perk.text}`}>
                    <perk.icon size={16} />
                  </div>
                  <p className="text-[11px] leading-relaxed text-gray-800">
                    <span className="font-bold">{perk.title}</span>{" "}
                    <span className="text-gray-500">{perk.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details & Tabs Section */}
        <div className="bg-white">
          <div className="flex gap-10 border-b border-gray-100 mb-6">
            {['Description', 'You May Also Like'].map(tab => {
              const tabId = tab.toLowerCase().includes('desc') ? 'description' : 'related';
              const isActive = activeTab === tabId;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tabId)}
                  className={`py-3 text-[14px] font-bold transition-all relative
                  ${isActive ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="py-2">
            {activeTab === 'description' ? (
              <div className="max-w-4xl">
                <p className="text-[13px] text-gray-600 leading-relaxed whitespace-pre-line">
                  Discover the comfort of the three seater sofa, where convenience meets cosiness. Featuring built-in USB ports to keep your devices charged and dual cupholders for your favorite beverages, all wrapped in a soft, luxurious chenille-feel fabric. Kick back on plush cushions and enjoy the support of a robust steel frame in your living room. The fabric sofa for relaxation and style!
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-bold text-[13px] text-gray-900 mb-1">Features:</h4>
                    <ul className="text-[12px] text-gray-600 space-y-1">
                      <li>• USB-A and USB-C ports on armrests for convenient charging</li>
                      <li>• Two cupholders enhance relaxation with drinks</li>
                      <li>• 16 cm thick cushions with high-density foam for comfort</li>
                      <li>• Resilient spring pack supports and maintains cushion shape</li>
                      <li>• Chenille-feel fabric upholstery offers a luxurious touch</li>
                      <li>• Back cushions' cover is removable and washable</li>
                      <li>• Steel frame accommodates up to 360 kg safely</li>
                      <li>• Assembly required</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[13px] text-gray-900 mb-1">Specification:</h4>
                    <ul className="text-[12px] text-gray-600 space-y-1">
                      <li>• Colour: Grey</li>
                      <li>• Materials: Chenille (100% Polyester), Foam, Multilayer Board, Steel, Plastic</li>
                      <li>• Overall Dimension: 213W x 82D x 90H cm</li>
                      <li>• Seat Size: 180W x 54D x 46.5H cm</li>
                      <li>• Weight Capacity: 360 kg</li>
                      <li>• Output: DC 5V, 2A</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {related.map((p, i) => (
                  <ProductCard key={`${p.id}-${i}`} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}