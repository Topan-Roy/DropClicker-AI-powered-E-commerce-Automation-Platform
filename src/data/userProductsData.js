export const categoryData = [
  { id: 'all', label: 'All Categories', icon: 'LayoutGrid' },
  { id: 'toys', label: 'Toys & Hobbies', icon: 'Gamepad2' },
  { id: 'home-garden', label: 'Home & Garden', icon: 'Home' },
  { id: 'tools', label: 'Home Improvements & Tools', icon: 'Wrench' },
  { id: 'outdoors', label: 'Outdoors', icon: 'Trees' },
  { id: 'sports', label: 'Sports & Fitness', icon: 'Dumbbell' },
  { id: 'pets', label: 'Pets', icon: 'PawPrint' },
  { id: 'electronics', label: 'Electronics, Ice & Gadgets', icon: 'Cpu' },
  { id: 'clothing', label: 'Clothing, Shoes & Jewelry', icon: 'Shirt' },
  { id: 'personal', label: 'Personal Care', icon: 'Sparkles' },
];

export const suppliersData = ['All Suppliers', 'ECOMBUILDS', 'BUILDSECO', 'GREENCO', 'LIGHTCO'];

export const productsData = [
  {
    id: 1,
    name: '2 Seater Sofa with USB Ports & Cup Holders',
    category: 'home-garden',
    categoryLabel: 'Furniture',
    price: 99.00,
    profitPerUnit: 19.00,
    rating: 4.4,
    reviews: 22000,
    isNew: true,
    stock: 'In Stock',
    supplier: 'ECOMBUILDS',
    image: 'https://i.ibb.co.com/27ZXrrBV/Blog-Image.png',
    breadcrumb: ['Home Goods', 'Furniture'],
    marginPercent: 19,
    description: 'Premium 2-seater sofa with modern USB charging ports and convenient cup holders. Perfect for contemporary living rooms with comfortable seating for two.',
    perks: [
      { icon: 'Zap', color: 'green', title: 'Fast Shipping', desc: 'Get your orders delivered quickly and reliably' },
      { icon: 'ShieldCheck', color: 'orange', title: 'Quality Assured', desc: 'Every product is carefully checked to meet high standards.' },
      { icon: 'RotateCcw', color: 'blue', title: 'Easy Returns', desc: 'Quick and easy return process, no stress involved.' },
    ],
  },
  {
    id: 2,
    name: '3 Seater Sofa with USB Ports & Cup Holders',
    category: 'home-garden',
    categoryLabel: 'Furniture',
    price: 384.99,
    profitPerUnit: 16.00,
    rating: 4.8,
    reviews: 124,
    isNew: true,
    stock: 'In Stock',
    supplier: 'ECOMBUILDS',
    image: 'https://i.ibb.co.com/27ZXrrBV/Blog-Image.png',
    breadcrumb: ['Home Goods', 'Furniture'],
    marginPercent: 4,
    description: 'Discover the comfort of the three seater sofa, where convenience meets cosiness. Features modern USB charging ports and integrated cup holders for the ultimate relaxation experience.',
    perks: [
      { icon: 'Zap', color: 'green', title: 'Fast Shipping', desc: 'Get your orders delivered quickly and reliably' },
      { icon: 'ShieldCheck', color: 'orange', title: 'Quality Assured', desc: 'Every product is carefully checked to meet high standards.' },
      { icon: 'RotateCcw', color: 'blue', title: 'Easy Returns', desc: 'Quick and easy return process, no stress involved.' },
    ],
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair with Lumbar Support',
    category: 'tools',
    categoryLabel: 'Office',
    price: 249.00,
    profitPerUnit: 45.00,
    rating: 4.6,
    reviews: 8900,
    isNew: false,
    stock: 'In Stock',
    supplier: 'BUILDSECO',
    image: 'https://i.ibb.co.com/27ZXrrBV/Blog-Image.png',
    breadcrumb: ['Office Equipment', 'Chairs'],
    marginPercent: 18,
    description: 'Professional ergonomic office chair with advanced lumbar support system designed to improve posture and reduce back strain during long working hours.',
    perks: [
      { icon: 'Zap', color: 'green', title: 'Fast Shipping', desc: 'Get your orders delivered quickly and reliably' },
      { icon: 'ShieldCheck', color: 'orange', title: 'Quality Assured', desc: 'Every product is carefully checked to meet high standards.' },
      { icon: 'RotateCcw', color: 'blue', title: 'Easy Returns', desc: 'Quick and easy return process, no stress involved.' },
    ],
  },
];

// Helper function to get product detail by ID
export function getProductDetailData(id) {
  const product = productsData.find(p => p.id === Number(id));
  if (!product) return null;
  
  // Return product with images array (replicating image for detail gallery)
  return {
    ...product,
    images: [product.image, product.image, product.image, product.image],
  };
}

// Default product detail data (fallback for initial load)
export const productDetailData = getProductDetailData(2);