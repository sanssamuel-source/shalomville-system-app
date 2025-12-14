

import { Users, DollarSign, BookOpen } from 'lucide-react';

import prisma from '@/lib/db';

async function getStats() {
    const totalStudents = await prisma.student.count();
    const totalParents = await prisma.parent.count();
    const totalFees = await prisma.fee.count();
    
    // Calculate total unpaid amount
    const unpaidFees = await prisma.fee.findMany({ where: { status: 'unpaid' } });
    const unpaidAmount = unpaidFees.reduce((acc, fee) => acc + fee.amount, 0);

    return { totalStudents, totalParents, totalFees, unpaidAmount };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Overview</h1>
            <p className="text-gray-500">Manage school operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                        <Users className="w-6 h-6" />
                    </div>
                    <span className="text-gray-500 font-medium">Total Students</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">{stats.totalStudents}</p>
                <p className="text-xs text-gray-400 mt-1">{stats.totalParents} Parents Registered</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                        <DollarSign className="w-6 h-6" />
                    </div>
                    <span className="text-gray-500 font-medium">Outstanding Fees</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">SLE {stats.unpaidAmount.toLocaleString()}</p>
                <p className="text-xs text-gray-400 mt-1">Total pending payments</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <span className="text-gray-500 font-medium">Fee Records</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">{stats.totalFees}</p>
            </div>
        </div>
    </div>
  );
}
