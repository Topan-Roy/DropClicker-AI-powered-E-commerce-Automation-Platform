

'use client';
import { useState, useEffect } from 'react';
import {
  fetchRevenue, fetchStats, fetchGrowthTrend,
  fetchTopProducts, fetchPlanUsage, fetchRecentActivity
} from '@/services/userDashboardService';

import RevenueCard from '@/components/user-dashboard/overview/RevenueCard';
import GrowthChart from '@/components/user-dashboard/overview/GrowthChart';
import TopProducts from '@/components/user-dashboard/overview/TopProducts';
import PlanUsage from '@/components/user-dashboard/overview/PlanUsage';
import RecentActivity from '@/components/user-dashboard/overview/RecentActivity';

export default function UserDashboardPage() {
  const [data, setData] = useState({
    revenue: null, stats: [], growthData: [],
    topProducts: [], planUsage: null, activity: []
  });
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState('month');

  useEffect(() => {
    async function loadAll() {
      try {
        setLoading(true);
        const [rev, st, growth, products, plan, act] = await Promise.all([
          fetchRevenue(), fetchStats(), fetchGrowthTrend(period),
          fetchTopProducts(), fetchPlanUsage(), fetchRecentActivity(),
        ]);
        setData({ revenue: rev, stats: st, growthData: growth, topProducts: products, planUsage: plan, activity: act });
      } catch (error) {
        console.error('Dashboard failed to load:', error);
      } finally {
        setLoading(false);
      }
    }
    loadAll();
  }, [period]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-bold text-gray-500 animate-pulse">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 bg-[#F9FAFB] min-h-screen">
      <div className="max-w-8xl mx-auto space-y-4 sm:space-y-6 pb-6 sm:pb-8">
        {/* Section 1: Top Metrics */}
        <RevenueCard revenue={data.revenue} stats={data.stats} />

        {/* Section 2: Charts & Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <GrowthChart data={data.growthData} period={period} onPeriodChange={setPeriod} />
          <TopProducts products={data.topProducts} />
        </div>

        {/* Section 3: Usage & Logs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <PlanUsage planUsage={data.planUsage} />
          <RecentActivity activities={data.activity} />
        </div>
      </div>
    </div>
  );
}