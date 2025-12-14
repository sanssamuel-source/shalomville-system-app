
import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import jwt from 'jsonwebtoken';

async function getUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token');
  if (!token) return null;
  try {
    return jwt.decode(token.value);
  } catch (e) {
    return null;
  }
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: any = await getUser();

  if (!user || user.role !== 'ADMIN') {
    redirect('/dashboard'); // or login
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar user={user} />
      
      <main className="flex-1 flex flex-col min-w-0 mb-16 md:mb-0 h-screen overflow-hidden">
        <Header user={user} />
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
