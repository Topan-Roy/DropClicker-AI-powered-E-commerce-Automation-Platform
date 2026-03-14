// TODO: replace all exports with API calls when backend is ready
export const productStatsData = [
  { id: 1, label: 'Total Product', value: '85,420', icon: 'Package', color: 'blue' },
  { id: 2, label: 'In Stock', value: '85,420', icon: 'PackageCheck', color: 'green' },
  { id: 3, label: 'Low Stock', value: '85,420', icon: 'PackageMinus', color: 'orange' },
  { id: 4, label: 'Out of Stock', value: '85,420', icon: 'PackageX', color: 'red' },
];

export const productsTableData = [
  { id: 1, name: 'A modern 2-seater minimalist sofa', sku: 'MMK02-LKE-100003', status: 'Active', stock: 0, cost: 131.94, price: 131.94, margin: 14, category: 'Home Goods', supplier: 'ECOMBUILDS', image: 'https://placehold.co/40x40?text=Sofa' },
  { id: 2, name: 'A modern 2-seater minimalist sofa', sku: 'MMK02-LKE-100003', status: 'Active', stock: 0, cost: 131.94, price: 131.94, margin: 14, category: 'Home Goods', supplier: 'ECOMBUILDS', image: 'https://placehold.co/40x40?text=Sofa' },
  { id: 3, name: 'A modern 2-seater minimalist sofa', sku: 'MMK02-LKE-100003', status: 'Active', stock: 0, cost: 131.94, price: 131.94, margin: 14, category: 'Home Goods', supplier: 'ECOMBUILDS', image: 'https://placehold.co/40x40?text=Sofa' },
  { id: 4, name: 'A modern 2-seater minimalist sofa', sku: 'NMX01-NVC-100010', status: 'inactive', stock: 10, cost: 131.94, price: 131.94, margin: 14, category: 'Home Goods', supplier: 'ECOMBUILDS', image: 'https://placehold.co/40x40?text=Sofa' },
  { id: 5, name: 'A modern 2-seater minimalist sofa', sku: 'SSS01-BNV-100013', status: 'Active', stock: 50, cost: 131.94, price: 131.94, margin: 14, category: 'Home Goods', supplier: 'BUILDSECO', image: 'https://placehold.co/40x40?text=Sofa' },
  { id: 6, name: 'Ergonomic office chair', sku: 'ERG01-OFF-200001', status: 'Active', stock: 25, cost: 89.99, price: 149.99, margin: 40, category: 'Office', supplier: 'ECOMBUILDS', image: 'https://placehold.co/40x40?text=Chair' },
  { id: 7, name: 'Standing desk adjustable', sku: 'STD01-DSK-300002', status: 'Active', stock: 0, cost: 299.99, price: 499.99, margin: 40, category: 'Office', supplier: 'BUILDSECO', image: 'https://placehold.co/40x40?text=Desk' },
  { id: 8, name: 'Wooden bookshelf 5-tier', sku: 'WBS01-SHF-400001', status: 'inactive', stock: 5, cost: 79.99, price: 129.99, margin: 38, category: 'Home Goods', supplier: 'ECOMBUILDS', image: 'https://placehold.co/40x40?text=Shelf' },
  { id: 9, name: 'Ceramic plant pot large', sku: 'CPP01-PLT-500001', status: 'Active', stock: 100, cost: 12.99, price: 24.99, margin: 48, category: 'Garden', supplier: 'GREENCO', image: 'https://placehold.co/40x40?text=Pot' },
  { id: 10, name: 'LED floor lamp modern', sku: 'LED01-LMP-600001', status: 'Active', stock: 0, cost: 45.99, price: 89.99, margin: 49, category: 'Lighting', supplier: 'LIGHTCO', image: 'https://placehold.co/40x40?text=Lamp' },
];

export const supplierOptions = ['All Suppliers', 'ECOMBUILDS', 'BUILDSECO', 'GREENCO', 'LIGHTCO', 'TECHCO'];
export const statusOptions = ['All Status', 'Active', 'inactive'];
export const categoryOptions = ['All Categories', 'Home Goods', 'Office', 'Garden', 'Lighting', 'Bedroom', 'Kitchen', 'Smart Home'];
export const stockStatusOptions = ['All Stock', 'In Stock', 'Low Stock', 'Out of Stock'];
export const priceRangeOptions = ['All Prices', 'Under £50', '£50 - £100', '£100 - £300', 'Over £300'];
export const sortOptions = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Oldest First', value: 'oldest' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Name: A to Z', value: 'name_asc' },
  { label: 'Name: Z to A', value: 'name_desc' },
  { label: 'Stock: High to Low', value: 'stock_desc' },
  { label: 'Stock: Low to High', value: 'stock_asc' },
];
export const pageSizeOptions = [5, 10, 20, 50];