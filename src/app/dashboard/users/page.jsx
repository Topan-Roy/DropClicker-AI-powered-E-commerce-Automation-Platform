'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, deleteUser, updateUserRole } from '@/redux/slices/adminSlice';
import UserStatCard from '@/components/dashboard/users/UserStatCard';
import UserSearchBar from '@/components/dashboard/users/UserSearchBar';
import UsersTable from '@/components/dashboard/users/UsersTable';
import { X, Users, ShieldCheck, UserCheck } from 'lucide-react';

export default function UsersPage() {
  const dispatch = useDispatch();
  const { users, usersLoading, usersError } = useSelector((state) => state.admin);

  const [search, setSearch] = useState('');
  const [viewUser, setViewUser] = useState(null); // for view modal

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  // ── Derived stats ──────────────────────────────────────────────
  const totalUsers  = users.length;
  const adminCount  = users.filter((u) => u.role?.toLowerCase() === 'admin').length;
  const regularCount = users.filter((u) => u.role?.toLowerCase() !== 'admin').length;

  const statsData = [
    { id: 1, label: 'Total Users',    value: String(totalUsers),   icon: 'Users',      color: 'blue',   trend: null },
    { id: 2, label: 'Admins',         value: String(adminCount),   icon: 'ShieldCheck', color: 'green',  trend: null },
    { id: 3, label: 'Regular Users',  value: String(regularCount), icon: 'UserCheck',  color: 'orange', trend: null },
  ];

  // ── Search filter ──────────────────────────────────────────────
  const filtered = users.filter((u) => {
    const q = search.toLowerCase();
    return (
      (u.fullName || u.name || '').toLowerCase().includes(q) ||
      (u.email || '').toLowerCase().includes(q)
    );
  });

  // ── Handlers ───────────────────────────────────────────────────
  const handleDelete = (id) => dispatch(deleteUser(id));
  const handleView   = (user) => setViewUser(user);
  const handleUpdateRole = (id, role) => dispatch(updateUserRole({ userId: id, role }));

  // ── Loading skeleton ───────────────────────────────────────────
  if (usersLoading) {
    return (
      <div className="p-6 space-y-4 animate-pulse">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-xl h-28" />
          ))}
        </div>
        <div className="bg-gray-100 rounded-xl h-10 w-72" />
        <div className="bg-gray-100 rounded-2xl h-64" />
      </div>
    );
  }

  // ── Error state ────────────────────────────────────────────────
  if (usersError) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-red-500 font-semibold text-lg mb-2">Users লোড করা যায়নি</p>
          <p className="text-gray-400 text-sm mb-4">{usersError}</p>
          <button
            onClick={() => dispatch(fetchAllUsers())}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
          >
            আবার চেষ্টা করুন
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50/50 min-h-screen space-y-2">

      {/* SECTION 1: Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {statsData.map((stat) => (
          <UserStatCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* SECTION 2: Search Bar */}
      <UserSearchBar value={search} onChange={setSearch} />

      {/* SECTION 3: Users Table */}
      <UsersTable
        data={filtered}
        onView={handleView}
        onDelete={handleDelete}
        onUpdateRole={handleUpdateRole}
      />

      {/* SECTION 4: View User Modal */}
      {viewUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setViewUser(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setViewUser(null)}
              className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex flex-col items-center gap-3 mb-6">
              <img
                src={
                  viewUser.avatar ||
                  viewUser.profileImage ||
                  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(viewUser.fullName || viewUser.name || 'user')}`
                }
                alt="avatar"
                className="w-20 h-20 rounded-full border-4 border-purple-100"
              />
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-900">
                  {viewUser.fullName || viewUser.name || '—'}
                </h2>
                <p className="text-sm text-gray-500">{viewUser.email}</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Role',    value: viewUser.role || '—' },
                { label: 'Joined',  value: viewUser.createdAt ? new Date(viewUser.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }) : '—' },
                { label: 'User ID', value: viewUser._id || viewUser.id || '—' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-sm font-semibold text-gray-500">{label}</span>
                  <span className="text-sm font-bold text-gray-800 max-w-[60%] text-right break-all">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}