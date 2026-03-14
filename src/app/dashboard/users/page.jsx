'use client';

// TODO: replace with API calls/hooks when backend ready
import UserStatCard from '@/components/dashboard/users/UserStatCard';
import UserSearchBar from '@/components/dashboard/users/UserSearchBar';
import UsersTable from '@/components/dashboard/users/UsersTable';
import { userStatsData, usersTableData } from '@/data/usersData';

export default function UsersPage() {
  return (
    <div className="p-6 bg-gray-50/50 min-h-screen space-y-2">
      {/* SECTION 1: Stat Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {userStatsData.map(stat => (
          <UserStatCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* SECTION 2: Search Bar */}
      <UserSearchBar />

      {/* SECTION 3: Users Table */}
      <UsersTable data={usersTableData} />
    </div>
  );
}