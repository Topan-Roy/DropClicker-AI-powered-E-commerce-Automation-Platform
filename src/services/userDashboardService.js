// import {
//   revenueData, statsData, growthTrendData,
//   topProductsData, planUsageData, recentActivityData
// } from '@/data/userDashboardData';

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// export async function fetchRevenue() {
//   await delay(300);
//   return revenueData;
// }

// export async function fetchStats() {
//   await delay(300);
//   return statsData;
// }

// export async function fetchGrowthTrend(period = 'month') {
//   await delay(400);
//   // In a real app, logic would filter data based on 'period'
//   return growthTrendData;
// }

// export async function fetchTopProducts() {
//   await delay(350);
//   return topProductsData;
// }

// export async function fetchPlanUsage() {
//   await delay(300);
//   return planUsageData;
// }

// export async function fetchRecentActivity() {
//   await delay(350);
//   return recentActivityData;
// }
// TODO: replace each function with real fetch() API call when backend ready
// src/services/userDashboardService.js
import {
  revenueData, statsData, growthTrendData,
  topProductsData, planUsageData, recentActivityData
} from '@/data/userDashboardData';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchRevenue() {
  await delay(300);
  return revenueData;
}

export async function fetchStats() {
  await delay(300);
  return statsData;
}

// THIS IS THE ONE THE ERROR IS COMPLAINING ABOUT:
export async function fetchGrowthTrend(period = 'month') {
  await delay(400);
  return growthTrendData;
}

export async function fetchTopProducts() {
  await delay(350);
  return topProductsData;
}

export async function fetchPlanUsage() {
  await delay(300);
  return planUsageData;
}

export async function fetchRecentActivity() {
  await delay(350);
  return recentActivityData;
}