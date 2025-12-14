
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Wallet, Bell, HandHelping, LogOut, Users, Video, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Sidebar({ user }: { user: any }) {
  const pathname = usePathname();

  const navItems = [
    { icon: LayoutDashboard, label: 'Home', path: '/dashboard' },
    { icon: Wallet, label: 'Fees', path: '/fees' },
    { icon: Bell, label: 'News', path: '/announcements' },
    { icon: Users, label: 'Community', path: '/community' },
    { icon: Video, label: 'Live Meet', path: '/meetings' },
    { icon: HandHelping, label: 'Support', path: '/support' },
    { icon: UserCircle, label: 'Profile', path: '/profile' },
  ];

  // Admin items
  if (user?.role === 'ADMIN') {
      navItems.push({ icon: Users, label: 'Manage Users', path: '/admin/users' });
  }

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
        <div className="p-6 flex items-center gap-3 border-b border-gray-100">
           <img 
              src="https://shalomvilleschoolsinternational.org/advert/17212338057fb9d49a72756b23e2dce42ffbe17a2b.png" 
              alt="Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h2 className="font-bold text-gray-900 leading-tight">Shalomville</h2>
              <p className="text-xs text-primary-600 font-medium">{user?.role === 'ADMIN' ? 'Admin Portal' : 'Parent Portal'}</p>
            </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path);
            return (
                <Link
                key={item.path}
                href={item.path}
                className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all group",
                    isActive 
                    ? "bg-primary-50 text-primary-700 shadow-sm" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
                >
                <item.icon className="w-5 h-5" />
                {item.label}
                </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <Link href="/api/auth/logout" className="flex items-center gap-3 px-4 py-3 w-full text-left text-red-600 font-medium hover:bg-red-50 rounded-xl transition-colors">
            <LogOut className="w-5 h-5" />
            Sign Out
          </Link>
        </div>
      </aside>
  );
}
