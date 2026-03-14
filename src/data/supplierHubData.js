// TODO: replace all exports with API calls when backend is ready
export const supplierStatsData = [
  { id: 1, label: 'Total Suppliers', value: '6', icon: 'Users', color: 'blue' },
  { id: 2, label: 'Total Products', value: '5,420', icon: 'Package', color: 'orange' },
  { id: 3, label: 'Unlinked Products', value: '0', icon: 'Unlink', color: 'red' },
  { id: 4, label: 'Active Syncs', value: '5', icon: 'RefreshCw', color: 'yellow' },
];

export const suppliersTableData = [
  { id: 1, name: 'Wade Warren', products: 100, status: 'Inactive', inStock: 52, lowStock: 10, value: '£652.0k', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s1' },
  { id: 2, name: 'Wade Warren', products: 100, status: 'Active', inStock: 52, lowStock: 10, value: '£652.0k', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s2' },
  { id: 3, name: 'Wade Warren', products: 100, status: 'Active', inStock: 52, lowStock: 10, value: '£652.0k', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s3' },
  { id: 4, name: 'Wade Warren', products: 100, status: 'Active', inStock: 52, lowStock: 10, value: '£652.0k', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s4' },
  { id: 5, name: 'Wade Warren', products: 100, status: 'Active', inStock: 52, lowStock: 10, value: '£652.0k', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s5' },
  { id: 6, name: 'Wade Warren', products: 100, status: 'Active', inStock: 52, lowStock: 10, value: '£652.0k', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s6' },
];

export const categoryOptions = ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Toys'];
export const stockStatusOptions = ['In Stock', 'Out of Stock', 'Low Stock'];
export const statusOptions = ['Active', 'Draft', 'Archived'];