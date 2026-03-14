// TODO: replace all exports with API calls when backend is ready
export const orderStatsData = [
  { id: 1, label: 'Total Orders', value: '5,420', icon: 'ShoppingCart', color: 'green', trend: '+12' },
  { id: 2, label: 'Processing', value: '85,420', icon: 'Package', color: 'blue', trend: null },
  { id: 3, label: 'Revenue', value: '85,420', icon: 'TrendingUp', color: 'orange', trend: '+12' },
  { id: 4, label: 'Profit', value: '85,420', icon: 'PiggyBank', color: 'yellow', trend: '+12' },
];

export const ordersTableData = [
  { id: 1, orderNo: '#1002', date: '11 Feb, 2024', customerName: 'Wade Warren', customerEmail: 'curtis.weaver@example.com', status: 'Shipped', items: 10, total: '£131.94', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=o1', profit: '£10.99', paymentStatus: 'Pending', phone: 'Pending', location: '£65.94', supplierName: 'PrimeGoods', supplierOrderId: '#ECM-990', trackingCarrier: 'Amazon', trackingNumber: 'UK34562B15' },
  { id: 2, orderNo: '#1003', date: '11 Feb, 2024', customerName: 'Wade Warren', customerEmail: 'curtis.weaver@example.com', status: 'Cancelled', items: 10, total: '£131.94', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=o2', profit: '£10.99', paymentStatus: 'Paid', phone: '+44 123 456', location: '£45.00', supplierName: 'PrimeGoods', supplierOrderId: '#ECM-991', trackingCarrier: 'Amazon', trackingNumber: 'UK34562B16' },
  { id: 3, orderNo: '#1004', date: '11 Feb, 2024', customerName: 'Wade Warren', customerEmail: 'curtis.weaver@example.com', status: 'Shipped', items: 10, total: '£131.94', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=o3', profit: '£10.99', paymentStatus: 'Pending', phone: 'Pending', location: '£65.94', supplierName: 'PrimeGoods', supplierOrderId: '#ECM-992', trackingCarrier: 'Amazon', trackingNumber: 'UK34562B17' },
];

export const orderStatusOptions = ['Pending', 'Paid', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
export const filterStatusOptions = ['All Status', 'Pending', 'Paid', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

export const activityLogData = [
  { id: 1, type: 'note', message: 'Your transfer of $500 to John Doe was successful', time: 'Feb 16 • 11:51 AM' },
  { id: 2, type: 'status', message: 'Status changed to cancelled', time: 'Feb 16 • 11:51 AM' },
];

export const supplierProducts = [
  { id: 1, name: 'STANDOUT BACKPACK', qty: 1, price: '£65.00', cost: '£46.00', image: 'https://placehold.co/48x48?text=Bag' },
  { id: 2, name: 'STANDOUT BACKPACK', qty: 1, price: '£65.00', cost: '£46.00', image: 'https://placehold.co/48x48?text=Bag' },
];