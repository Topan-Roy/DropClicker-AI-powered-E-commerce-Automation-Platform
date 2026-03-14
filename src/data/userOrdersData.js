export const orderStatsData = [
  { id: 1, label: 'Total Orders', value: '5,420', trend: '+12', icon: 'ShoppingCart', color: 'green' },
  { id: 2, label: 'Processing', value: '85,420', trend: null, icon: 'Package', color: 'blue' },
  { id: 3, label: 'Revenue', value: '85,420', trend: '+12', icon: 'Package', color: 'orange' },
  { id: 4, label: 'Profit', value: '85,420', trend: '+12', icon: 'Package', color: 'orange' },
];

export const ordersData = Array.from({ length: 6 }, (_, i) => ({
  id: `#100${i + 2}`,
  date: '11 Feb, 2024',
  customer: 'Wade Warren',
  status: i % 2 === 0 ? 'Shipped' : 'Cancelled',
  items: 10,
  total: '£131.94',
  payment: 'Pay',
  supplierId: 'ECM-990',
}));

export const supplierDetailData = {
  name: 'PrimeGoods',
  orderId: '#ECM-990',
  avatarColor: 'bg-orange-500',
  avatarInitial: 'P',
  note: 'PrimeGoods Electronics is a leading provider of high-performance electronic devices, including laptops, tablets, and accessories.',
  overview: {
    orderStatus: 'Shipped',
    paymentStatus: 'Pending',
    total: '£130.00',
    profit: '£10.99',
    supplier: {
      email: 'hello@PrimeGoods.com',
      phone: 'Pending',
      location: '£65.94',
    },
  },
  products: [
    { id: 1, name: 'STANDOUT BACKPACK', qty: 1, price: 65.00, profit: 10.00, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=80&h=80&fit=crop' },
    { id: 2, name: 'STANDOUT BACKPACK', qty: 1, price: 65.00, profit: 10.00, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=80&h=80&fit=crop' },
  ],
  subtotal: '£130.00',
  shipping: '£0.00',
  total: '£130.00',
  yourProfit: '£16.00',
  orderUpdates: [
    { id: 1, type: 'note', title: 'Add note', desc: 'Your transfer of $500 to John Doe was successful', time: 'Feb 16 • 11:51 AM', unread: true },
    { id: 2, type: 'status', title: 'Status changed to cancelled', desc: 'Your transfer of $500 to John Doe was successful', time: 'Feb 16 • 11:51 AM', unread: false },
  ],
  payOrderAmount: '£130.00',
};