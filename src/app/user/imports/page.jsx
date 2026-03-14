'use client';
import { useState, useEffect, useMemo } from 'react';
import { checkShopifyConnection, fetchImportCategories, fetchImportedProducts } from '@/services/userImportsService';
import ShopifyEmptyState from '@/components/user-dashboard/user-imports/ShopifyEmptyState';
import ImportCategoryBar from '@/components/user-dashboard/user-imports/ImportCategoryBar';
import ImportToolbar from '@/components/user-dashboard/user-imports/ImportToolbar';
import ImportProductCard from '@/components/user-dashboard/user-imports/ImportProductCard';
import ShareModal from '@/components/user-dashboard/user-imports/ShareModal';

export default function MyImportPage() {
  const [shopifyConnected, setShopifyConnected] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [shareProduct, setShareProduct] = useState(null);

  useEffect(() => {
    Promise.all([
      checkShopifyConnection(),
      fetchImportCategories(),
      fetchImportedProducts(),
    ]).then(([shopify, cats, prods]) => {
      setShopifyConnected(false);
      // setShopifyConnected(shopify.connected);
      setCategories(cats);
      setProducts(prods);
    }).finally(() => setLoading(false));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const catMatch = activeCategory === 'all' || p.category === activeCategory;
      const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return catMatch && searchMatch;
    });
  }, [products, activeCategory, searchQuery]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!shopifyConnected) {
    return <ShopifyEmptyState onConnect={() => console.log('Redirecting to settings...')} />;
  }

  return (
    <div className="w-full">
      <ImportCategoryBar activeCategory={activeCategory} onSelect={setActiveCategory} />

      <div className="mb-5">
        <ImportToolbar searchQuery={searchQuery} onSearch={setSearchQuery} count={filteredProducts.length} />
      </div>

      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <ImportProductCard
            key={product.id}
            product={product}
            onShare={() => setShareProduct(product)}
          />
        ))}
      </div>

      {shareProduct && (
        <ShareModal product={shareProduct} onClose={() => setShareProduct(null)} />
      )}
    </div>
  );
}