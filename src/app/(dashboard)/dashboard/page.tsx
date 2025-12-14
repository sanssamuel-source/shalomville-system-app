

import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { CreditCard, Bell, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import prisma from '@/lib/db';

async function getData() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  if (!token) return null;
  
  const user = jwt.decode(token) as any;
  if (!user || (user as any).role !== 'PARENT') return null;

  // Fetch Parent Data including Student and Fees
  // Note: For simplicity assuming 1 student for now
  const parentData = await prisma.parent.findUnique({
    where: { userId: user.userId },
    include: {
        students: {
            include: {
                fees: true
            }
        }
    }
  });

  const announcements = await prisma.announcement.findMany({
    take: 3,
    orderBy: { date: 'desc' }
  });

  return { user, parentData, announcements };
}

export default async function DashboardPage() {
  const data = await getData();
  if (!data?.parentData) return <div className="p-4">Loading user profile...</div>;

  const student = data.parentData.students[0];
  const unpaidFees = student?.fees.filter(f => f.status === 'unpaid') || [];
  const totalUnpaid = unpaidFees.reduce((acc, fee) => acc + fee.amount, 0);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
       {/* Welcome Section */}
       <div className="bg-gradient-to-r from-primary-600 to-orange-500 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
           <div className="relative z-10">
               <h1 className="text-3xl font-bold mb-2">Welcome Back, {data.user.name}</h1>
               <p className="text-primary-100">Parent of {student?.firstName} {student?.lastName}</p>
           </div>
       </div>

       {/* Stats Grid */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
               <div>
                   <div className="flex items-center gap-2 text-gray-500 mb-1">
                       <CreditCard className="w-4 h-4" />
                       <span className="text-sm font-medium">Outstanding Fees</span>
                   </div>
                   <p className="text-3xl font-bold text-gray-900">SLE {totalUnpaid.toLocaleString()}</p>
               </div>
               <Link href="/fees" className="text-primary-600 text-sm font-bold flex items-center gap-1 mt-4 hover:gap-2 transition-all">
                   Pay Now <ArrowRight className="w-4 h-4" />
               </Link>
           </div>

           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
               <div>
                   <div className="flex items-center gap-2 text-gray-500 mb-1">
                       <Bell className="w-4 h-4" />
                       <span className="text-sm font-medium">New Announcements</span>
                   </div>
                   <p className="text-3xl font-bold text-gray-900">{data.announcements.length}</p>
               </div>
               <Link href="/announcements" className="text-primary-600 text-sm font-bold flex items-center gap-1 mt-4 hover:gap-2 transition-all">
                   View All <ArrowRight className="w-4 h-4" />
               </Link>
           </div>

           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
               <div>
                   <div className="flex items-center gap-2 text-gray-500 mb-1">
                       <Calendar className="w-4 h-4" />
                       <span className="text-sm font-medium">Next Event</span>
                   </div>
                   <p className="text-xl font-bold text-gray-900 mt-1">Science Fair</p>
                   <p className="text-xs text-gray-500">Feb 15, 2025</p>
               </div>
               <span className="text-gray-400 text-sm mt-4">Mark Calendar</span>
           </div>
       </div>

       {/* Recent Announcements Preview */}
       <div>
           <h2 className="text-xl font-bold text-gray-800 mb-4">Latest Updates</h2>
           <div className="grid gap-4">
               {data.announcements.map((ann) => (
                   <div key={ann.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                       <div className="flex justify-between items-start mb-2">
                           <span className="bg-primary-50 text-primary-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                               {ann.category}
                           </span>
                           <span className="text-gray-400 text-xs">{new Date(ann.date).toLocaleDateString()}</span>
                       </div>
                       <h3 className="font-bold text-gray-900 text-lg mb-2">{ann.title}</h3>
                       <p className="text-gray-600 text-sm line-clamp-2">{ann.content}</p>
                   </div>
               ))}
           </div>
       </div>
    </div>
  );
}
