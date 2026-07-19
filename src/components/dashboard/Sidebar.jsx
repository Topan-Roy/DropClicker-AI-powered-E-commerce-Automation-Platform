

'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  LayoutDashboard, Users, Truck, Package, Layers, Tag,
  ShoppingCart, Megaphone, FileText, Settings, LogOut, X, ChevronRight,
} from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@/redux/slices/authSlice';
import { fetchAllUsers } from '@/redux/slices/adminSlice';
import { useEffect } from 'react';

const menuItems = [
  { name: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Users', icon: Users, path: '/dashboard/users' },
  { name: 'Supplier Hub', icon: Truck, path: '/dashboard/suppliers' },
  { name: 'Products', icon: Package, path: '/dashboard/products' },
  { name: 'Categories', icon: Tag, path: '/dashboard/categories' },
  { name: 'Collections', icon: Layers, path: '/dashboard/collections' },
  { name: 'Order', icon: ShoppingCart, path: '/dashboard/orders' },
  { name: 'Announcements', icon: Megaphone, path: '/dashboard/announcements' },
  { name: 'Pages', icon: FileText, path: '/dashboard/pages' },
  { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

const SidebarContent = ({ onNavigate, onClose }) => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const totalUsers = useSelector((state) => state.admin.totalUsers);

  // Fetch real user count from DB on mount
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const displayName = user?.name || user?.fullName || 'Admin';
  const displayEmail = user?.email || '';
  const displayRole = user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : '';
  const avatarSeed = encodeURIComponent(displayName);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push('/login');
    onClose?.();
  };

  return (
    <div className="flex flex-col h-full">

      {/* Logo */}
      <div
        className="px-6 pt-8 pb-10 flex items-center justify-center cursor-pointer flex-shrink-0"
        onClick={() => { router.push('/'); onClose?.(); }}
      >
        <Image
          src="/logo.png"
          alt="DropClicker Logo"
          width={140}
          height={40}
          priority
          className="h-8 w-auto object-contain"
        />
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        <h2 className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase mb-4 px-2">
          Menu
        </h2>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              onClick={() => onNavigate(item)}
              className={`
                group flex w-full items-center gap-3 px-4 py-2.5
                transition-all duration-200 rounded-xl text-sm font-medium
                ${isActive
                  ? 'bg-[#2d1b6b] text-white shadow-sm'
                  : 'text-gray-400 hover:bg-[#2d1b6b]/40 hover:text-white'}
              `}
            >
              <Icon
                size={18}
                className={isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}
              />
              <span className="flex-1 text-left">{item.name}</span>
              {item.name === 'Users' && (
                <span
                  style={{
                    marginLeft: 'auto',
                    minWidth: '22px',
                    height: '22px',
                    padding: '0 6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '9999px',
                    fontSize: '11px',
                    fontWeight: '700',
                    background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(168,85,247,0.25)',
                    color: isActive ? '#fff' : '#d8b4fe',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                  }}
                >
                  {totalUsers === null ? '…' : totalUsers}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Profile — Clickable → /dashboard/profile */}
      <div className="mt-auto border-t border-white/5 bg-[#14083a] p-4 flex-shrink-0">
        <h2 className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase mb-3 px-2">
          Profile
        </h2>

        {/* Clickable profile card */}
        <button
          onClick={() => { router.push('/dashboard/profile'); onClose?.(); }}
          className={`w-full flex items-center gap-3 px-2 py-2 rounded-xl transition-all duration-200 group mb-3 ${
            pathname === '/dashboard/profile'
              ? 'bg-[#2d1b6b]'
              : 'hover:bg-white/8 hover:bg-[#2d1b6b]/40'
          }`}
        >
          <div className="h-10 w-10 rounded-full overflow-hidden border border-purple-400/30 flex-shrink-0">
            <img
              src={user?.avatar || `https://api.dicebear.com/9.x/initials/svg?seed=${avatarSeed}&backgroundColor=6366f1`}
              alt="User Avatar"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.src = `https://api.dicebear.com/9.x/initials/svg?seed=${avatarSeed}&backgroundColor=6366f1`;
              }}
            />
          </div>
          <div className="flex flex-col min-w-0 flex-1 text-left">
            <span className="text-sm font-bold text-white truncate">{displayName}</span>
            <span className="text-[11px] text-gray-400 truncate">{displayEmail}</span>
            {displayRole && (
              <span className="mt-0.5 inline-block text-[10px] font-semibold uppercase tracking-wider text-purple-300 bg-purple-500/20 rounded-full px-2 py-0.5 w-fit">
                {displayRole}
              </span>
            )}
          </div>
          <ChevronRight
            size={15}
            className={`flex-shrink-0 transition-all duration-200 ${
              pathname === '/dashboard/profile'
                ? 'text-white'
                : 'text-gray-500 group-hover:text-gray-300 group-hover:translate-x-0.5'
            }`}
          />
        </button>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-[#1a0a4b] font-bold text-sm rounded-xl py-2.5 transition-colors"
        >
          <LogOut size={16} />
          Log out
        </button>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const { setActivePage, sidebarOpen, setSidebarOpen } = useNavigation();
  const router = useRouter();

  const handleNavigation = (item) => {
    setActivePage(item.name);
    router.push(item.path);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* ── DESKTOP (lg+): fixed sidebar, always visible ── */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-[#1a0a4b] text-white shadow-xl flex-col z-50">
        <SidebarContent onNavigate={handleNavigation} />
      </aside>

      {/* ── MOBILE/TABLET (<lg): backdrop + slide-in drawer ── */}

      {/* Backdrop */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`
          lg:hidden fixed left-0 top-0 h-screen w-72 max-w-[85vw]
          bg-[#1a0a4b] text-white shadow-2xl flex flex-col z-50
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        aria-label="Mobile navigation"
      >
        {/* Close button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          aria-label="Close menu"
        >
          <X size={16} />
        </button>

        <SidebarContent
          onNavigate={handleNavigation}
          onClose={() => setSidebarOpen(false)}
        />
      </aside>
    </>
  );
};

export default Sidebar;