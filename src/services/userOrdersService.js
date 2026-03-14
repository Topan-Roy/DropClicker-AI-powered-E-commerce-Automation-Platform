import { orderStatsData, ordersData, supplierDetailData } from '@/data/userOrdersData';

const delay = ms => new Promise(r => setTimeout(r, ms));

export async function fetchOrderStats() {
  await delay(300); return orderStatsData;
}
export async function fetchOrders(filters = {}) {
  await delay(400); return ordersData;
}
export async function fetchSupplierDetails(orderId) {
  await delay(300); return supplierDetailData;
}
export async function exportOrders() {
  await delay(500); return { success: true };
}
export async function createOrder(data) {
  await delay(600); return { success: true, orderId: '#1009' };
}