import { Store, ShoppingBag } from 'lucide-react';

export default function ShopifyEmptyState({ onConnect }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <Store size={72} strokeWidth={1.2} className="text-blue-500 mb-6" />
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        No Shopify Store Connected
      </h2>
      <p className="text-sm text-gray-400 mb-8 max-w-xs leading-relaxed">
        Connect your Shopify store to start pushing products and syncing orders.
      </p>
      <button onClick={onConnect}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700
          text-white font-bold px-6 py-2.5 rounded-xl text-sm
          transition-all shadow-md shadow-blue-100">
        <ShoppingBag size={16} />
        Connect Shopify
      </button>
    </div>
  );
}
