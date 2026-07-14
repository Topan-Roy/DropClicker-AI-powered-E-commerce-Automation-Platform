


'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  LayoutDashboard, Package, Bot, Upload, ShoppingCart,
  CreditCard, Share2, BookOpen, Settings, LogOut,
  ChevronRight, ChevronDown, X,
} from 'lucide-react';
import { useUserNavigation } from '@/context/UserNavigationContext';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@/redux/slices/authSlice';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/user/dashboard' },
  { name: 'Product', icon: Package, path: '/user/products' },
  {
    name: 'AI Tools',
    icon: Bot,
    path: null,
    submenu: [
      { name: 'Store Builder', path: '/user/ai-tools/store-builder' },
      { name: 'Magic Studio', path: '/user/ai-tools/magic-studio' },
      { name: 'Engineering', path: '/user/ai-tools/engineering' },
    ],
  },
  { name: 'My Import', icon: Upload, path: '/user/imports' },
  { name: 'Order', icon: ShoppingCart, path: '/user/orders' },
  { name: 'Billing', icon: CreditCard, path: '/user/billing' },
  { name: 'Affiliate Program', icon: Share2, path: '/user/affiliate' },
  { name: 'Resources', icon: BookOpen, path: '/user/resources' },
];

const accountItems = [
  { name: 'Settings', icon: Settings, path: '/user/settings' },
];

const SidebarContent = ({ onClose }) => {
  const { setActivePage } = useUserNavigation();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [aiToolsOpen, setAiToolsOpen] = useState(false);

  const displayName = user?.name || user?.fullName || 'User';
  const displayEmail = user?.email || '';
  const displayRole = user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : '';
  const avatarSeed = encodeURIComponent(displayName);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push('/login');
    onClose?.();
  };

  useEffect(() => {
    if (pathname?.startsWith('/user/ai-tools')) setAiToolsOpen(true);
  }, [pathname]);

  const navigate = (path, name) => {
    setActivePage(name);
    router.push(path);
    onClose?.();
  };

  const NavItem = ({ item }) => {
    const isSubmenuActive = item.submenu?.some(sub => pathname === sub.path);
    const isActive = item.path ? pathname === item.path : isSubmenuActive;

    if (item.submenu) {
      return (
        <div className="space-y-1">
          <button
            onClick={() => setAiToolsOpen(!aiToolsOpen)}
            className={`
              group flex w-full items-center justify-between px-4 py-2.5
              transition-all duration-200 rounded-xl cursor-pointer
              ${isActive && !aiToolsOpen ? 'bg-[#2d1b6b] text-white' : 'text-gray-400 hover:bg-[#2d1b6b]/40 hover:text-white'}
            `}
          >
            <div className="flex items-center gap-3">
              <item.icon size={18} />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            {aiToolsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {aiToolsOpen && (
            <div className="ml-4 mt-1 space-y-0.5 bg-[#2d1b6b] rounded-xl py-1">
              {item.submenu.map((subItem) => {
                const isSubActive = pathname === subItem.path;
                return (
                  <button
                    key={subItem.name}
                    onClick={() => navigate(subItem.path, subItem.name)}
                    className={`
                      flex w-full items-center px-4 py-2.5 text-sm rounded-xl transition-all duration-200 cursor-pointer
                      ${isSubActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-[#3d2b7b]'}
                    `}
                  >
                    {subItem.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    return (
      <button
        onClick={() => navigate(item.path, item.name)}
        className={`
          group flex w-full items-center gap-3 px-4 py-2.5
          transition-all duration-200 rounded-xl cursor-pointer
          ${isActive ? 'bg-[#2d1b6b] text-white' : 'text-gray-400 hover:bg-[#2d1b6b]/40 hover:text-white'}
        `}
      >
        <item.icon size={18} className={isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'} />
        <span className="text-sm font-medium">{item.name}</span>
      </button>
    );
  };

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => { router.push('/'); onClose?.(); }}
        className="flex items-center justify-center px-6 pt-8 pb-10 cursor-pointer"
      >
        <Image src="/logo.png" width={140} height={40} priority alt="DropClicker Logo" className="h-8 w-auto object-contain" />
      </div>

      {/* Nav */}
      <div className="flex-1 px-4 overflow-y-auto">
        <div className="mb-6">
          <p className="mb-3 px-4 text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Menu</p>
          <nav className="space-y-1">
            {menuItems.map((item) => <NavItem key={item.name} item={item} />)}
          </nav>
        </div>
        <div className="mb-6">
          <p className="mb-3 px-4 text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Profile & Account</p>
          <nav className="space-y-1">
            {accountItems.map((item) => <NavItem key={item.name} item={item} />)}
          </nav>
        </div>
      </div>

      {/* Profile bottom */}
      <div className="border-t border-white/5 bg-[#14083a] p-4 flex-shrink-0">
        <p className="mb-4 px-2 text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Profile</p>
        <div className="mb-4 flex items-center gap-3 px-2">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-purple-400/30 shrink-0">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}`} alt="Avatar" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-white truncate">{displayName}</span>
            <span className="text-[11px] text-gray-400 truncate">{displayEmail}</span>
            {displayRole && (
              <span className="mt-0.5 inline-block text-[10px] font-semibold uppercase tracking-wider text-purple-300 bg-purple-500/20 rounded-full px-2 py-0.5 w-fit">
                {displayRole}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/90 py-2.5 text-sm font-bold text-[#1a0a4b] transition-all hover:bg-white cursor-pointer active:scale-[0.98]"
        >
          <LogOut size={16} /> Log out
        </button>
      </div>
    </div>
  );
};

const UserSidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useUserNavigation();

  return (
    <>
      {/* ── DESKTOP (lg+): fixed sidebar, always visible ── */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col bg-[#1a0a4b] text-white shadow-xl z-50">
        <SidebarContent />
      </aside>

      {/* ── MOBILE/TABLET (<lg): backdrop ── */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* ── MOBILE/TABLET (<lg): slide-in drawer ── */}
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
        <SidebarContent onClose={() => setSidebarOpen(false)} />
      </aside>
    </>
  );
};

export default UserSidebar;