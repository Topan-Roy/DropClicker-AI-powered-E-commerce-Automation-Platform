// TODO: this file will be replaced by real API responses when backend is ready
export const revenueData = {
  amount: '$52,896.00',
  growthPercent: '5.3%',
  growthAmount: '$2,121,321',
  isPositive: true,
};

export const statsData = [
  { id: 1, label: 'Total Products', value: '85,420', icon: 'Package', color: 'blue', trend: null },
  { id: 2, label: 'Total Orders', value: '5,420', icon: 'ShoppingCart', color: 'green', trend: '+12' },
  { id: 3, label: 'Active Orders', value: '85,420', icon: 'Package', color: 'orange', trend: '+12' },
];

export const growthTrendData = [
  { month: 'Jan', value: 12000 },
  { month: 'Feb', value: 10000 },
  { month: 'Mar', value: 15000 },
  { month: 'Apr', value: 13000 },
  { month: 'May', value: 18000 },
  { month: 'Jun', value: 20000 },
  { month: 'Jul', value: 22000 },
];

export const topProductsData = [
  { id: 1, name: 'Wireless Headphones', sales: 1234, revenue: '$45,678', barWidth: 90 },
  { id: 2, name: 'Smart Watch', sales: 987, revenue: '$32,456', barWidth: 72 },
  { id: 3, name: 'Laptop Stand', sales: 856, revenue: '$28,934', barWidth: 60 },
  { id: 4, name: 'Laptop Stand', sales: 856, revenue: '$28,934', barWidth: 50 },
];

export const planUsageData = {
  planName: 'free',
  usages: [
    { label: 'Products', percent: 40, color: 'bg-blue-500' },
    { label: 'Orders', percent: 80, color: 'bg-blue-500' },
    { label: 'AI Credits', percent: 10, color: 'bg-blue-500' },
  ],
};

export const recentActivityData = [
  { id: 1, type: 'order', title: 'New order placed', subtitle: 'John Smith', time: '15 minutes ago', icon: 'ShoppingCart', color: 'text-green-600', bgColor: 'bg-green-50' },
  { id: 2, type: 'delivery', title: 'Package delivered successfully', subtitle: 'Order #12345', time: '1 hour ago', icon: 'Package', color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { id: 3, type: 'payment', title: 'Payment received', subtitle: 'Invoice #INV-001', time: '2 hours ago', icon: 'CreditCard', color: 'text-green-600', bgColor: 'bg-green-50' },
  { id: 4, type: 'stock', title: 'Low stock alert', subtitle: 'Product SKU-789', time: '4 hours ago', icon: 'AlertCircle', color: 'text-red-600', bgColor: 'bg-red-50' },
];