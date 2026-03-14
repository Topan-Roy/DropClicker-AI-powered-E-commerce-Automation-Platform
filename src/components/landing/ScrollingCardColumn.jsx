'use client';
import ProductMiniCard from './ProductMiniCard';

export default function ScrollingCardColumn({ products, direction = 'up', duration = 20 }) {
  // Double the products for a seamless loop
  const doubledProducts = [...products, ...products];

  return (
    <div className="overflow-hidden h-full">
      <div 
        className={`flex flex-col gap-3 ${direction === 'up' ? 'animate-scrollUp' : 'animate-scrollDown'}`}
        style={{ '--duration': `${duration}s` }}
      >
        {doubledProducts.map((product, i) => (
          <div key={i} className="flex-shrink-0">
            <ProductMiniCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}