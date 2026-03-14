'use client';

// TODO: all data imported from data/overviewData.js — replace imports with API calls/hooks when backend ready
// import OrdersRevenueChart from '@/components/overview/OrdersRevenueChart';

// Mock Data Import
import { 
  statsData, 
  ordersRevenueData, 
  storeProjectsData, 
  recentUsersData, 
  recentSyncData 
} from '@/data/overviewData';
import OrdersRevenueChart from '@/components/dashboard/overview/OrdersRevenueChart';
import RecentSyncActivity from '@/components/dashboard/overview/RecentSyncActivity';
import RecentUsers from '@/components/dashboard/overview/RecentUsers';
import StatCard from '@/components/dashboard/overview/StatCard';
import StoreProjectsChart from '@/components/dashboard/overview/StoreProjectsChart';

export default function OverviewPage() {
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