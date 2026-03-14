// data/userImportsData.js
export const isShopifyConnected = true; // Toggle to true to see the product grid

export const importCategoriesData = [
  { id: 'furniture', label: 'Furniture', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=140&fit=crop' },
  { id: 'baby-kids', label: 'Baby & Kids', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=200&h=140&fit=crop' },
  { id: 'outdoor', label: 'Outdoor & Gard...', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=140&fit=crop' },
  { id: 'pets', label: 'Pets', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=200&h=140&fit=crop' },
  { id: 'sports', label: 'Sports & Fitness', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=140&fit=crop' },
  { id: 'home-kitchen', label: 'Home & Kitch...', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=140&fit=crop' },
];

export const importedProductsData = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: '2 Seater Sofa with USB Ports & Cup Holders',
  category: 'furniture',
  categoryLabel: 'Furniture',
  price: 99.00,
  profitPerUnit: 19.00,
  rating: 4.4,
  reviews: 22000,
  image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
  shareUrl: 'https://dropclicker.com/share/p123',
}));

export const importProductDetailData = {
  id: 1,
  name: '3 Seater Sofa with USB Ports & Cup Holders',
  breadcrumb: ['Home Goods', 'Furniture'],
  price: 384.99,
  rating: 4.8,
  reviews: 124,
  profitPerUnit: 16.00,
  marginPercent: 4,
  images: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&h=150&fit=crop',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=200&h=150&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop',
  ],
  perks: [
    { icon: 'Zap', bg: 'bg-green-50', color: 'text-green-600', title: 'Fast Shipping', desc: 'Get your orders delivered quickly and reliably' },
    { icon: 'ShieldCheck', bg: 'bg-orange-50', color: 'text-orange-500', title: 'Quality Assured', desc: 'Every product is carefully checked to meet high standards.' },
    { icon: 'RotateCcw', bg: 'bg-blue-50', color: 'text-blue-600', title: 'Easy Returns', desc: 'Quick and easy return process, no stress involved.' },
  ],
  description: `Discover the comfort of the three seater sofa, where convenience meets cosiness. Featuring built-in USB ports to keep your devices charged and dual cupholders for your favourite beverages.
  
  • USB-A and USB-C ports on armrests
  • Two cupholders enhance relaxation
  • 16 cm thick cushions with high-density foam
  • Steel frame accommodates up to 360 kg safely`,
  relatedProducts: importedProductsData.slice(0, 4),
};