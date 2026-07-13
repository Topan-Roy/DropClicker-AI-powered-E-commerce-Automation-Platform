'use client';

// TODO: all data imported from data/overviewData.js — replace imports with API calls/hooks when backend ready
// import OrdersRevenueChart from '@/components/overview/OrdersRevenueChart';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardOverview } from '@/redux/slices/adminSlice';
import OrdersRevenueChart from '@/components/dashboard/overview/OrdersRevenueChart';
import RecentSyncActivity from '@/components/dashboard/overview/RecentSyncActivity';
import RecentUsers from '@/components/dashboard/overview/RecentUsers';
import StatCard from '@/components/dashboard/overview/StatCard';
import StoreProjectsChart from '@/components/dashboard/overview/StoreProjectsChart';

export default function OverviewPage() {
  const dispatch = useDispatch();
  const { overview, status } = useSelector((state) => state.admin);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDashboardOverview());
    }
  }, [dispatch, status]);

  const {
    statsData = [],
    ordersRevenueData = [],
    storeProjectsData = [],
    recentUsersData = [],
    recentSyncData = []
  } = overview || {};

  if (status === 'loading') {
    return <div className="p-6">Loading dashboard data...</div>;
  }

  return (
    <div className="p-6 bg-gray-50/50 min-h-screen space-y-6">
      
      {/* SECTION 1: Stat Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {statsData.map(stat => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* SECTION 2: Two Charts Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OrdersRevenueChart data={ordersRevenueData} />
        <StoreProjectsChart data={storeProjectsData} />
      </div>

      {/* SECTION 3: Two Tables Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentUsers data={recentUsersData} />
        <RecentSyncActivity data={recentSyncData} />
      </div>

    </div>
  );
}