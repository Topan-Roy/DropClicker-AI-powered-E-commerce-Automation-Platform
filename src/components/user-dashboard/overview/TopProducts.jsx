
'use client';

export default function TopProducts({ products }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 h-full">
      <div className="mb-4 sm:mb-6">
        <h3 className="font-bold text-gray-900">Top Products</h3>
        <p className="text-xs text-gray-400">Best selling products this month</p>
      </div>

      <div className="space-y-6 sm:space-y-7">
        {products.map((product, idx) => (
          <div key={idx} className="group">
            <div className="flex justify-between items-start mb-2 gap-4">
              <div className="min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">{product.name}</p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">{product.sales} sales</p>
              </div>
              <span className="text-sm font-bold text-gray-900 flex-shrink-0 text-right">{product.revenue}</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                style={{ width: `${product.barWidth}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}