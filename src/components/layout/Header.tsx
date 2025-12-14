
"use client";

import { Bell, Menu, Search } from 'lucide-react';

export default function Header({ user }: { user: any }) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between md:justify-end gap-4">
        <button className="md:hidden p-2 text-gray-600">
            <Menu className="w-6 h-6" />
        </button>

        <div className="hidden md:flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input 
                    placeholder="Search..." 
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-primary-100 text-sm"
                />
            </div>
        </div>

        <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-full transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200 mx-1"></div>
            <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.role}</p>
                </div>
                <img 
                    src={user?.avatar || "https://i.pravatar.cc/150"} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-primary-100"
                />
            </div>
        </div>
    </header>
  );
}
