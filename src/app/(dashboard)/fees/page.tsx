

import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

import prisma from '@/lib/db';

async function getFees() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  if (!token) return [];
  
  const user = jwt.decode(token) as any;
  if (!user || (user as any).role !== 'PARENT') {
    return [];
  }
  const parentData = await prisma.parent.findUnique({
    where: { userId: user.userId },
    include: {
        students: {
            include: { fees: true }
        }
    }
  });

  return parentData?.students[0]?.fees || [];
}

export default async function FeesPage() {
  const fees = await getFees();

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">School Fees</h1>
        <p className="text-gray-500">Manage and pay for your child's education.</p>
      </div>

      <div className="space-y-4">
        {fees.map((fee) => (
            <div key={fee.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                        fee.status === 'paid' ? "bg-green-100 text-green-600" :
                        fee.status === 'unpaid' ? "bg-red-100 text-red-600" : "bg-orange-100 text-orange-600"
                    )}>
                        {fee.status === 'paid' ? <CheckCircle className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">{fee.description}</h3>
                        <p className="text-sm text-gray-500">Due: {new Date(fee.dueDate).toLocaleDateString()}</p>
                    </div>
                </div>

                <div className="text-right w-full md:w-auto flex flex-row md:flex-col justify-between items-center md:items-end">
                    <p className="text-xl font-bold text-gray-900">SLE {fee.amount.toLocaleString()}</p>
                    {fee.status === 'unpaid' ? (
                        <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-all shadow-lg shadow-primary-500/20">
                            Pay Now
                        </button>
                    ) : (
                        <span className="text-green-600 text-sm font-bold bg-green-50 px-3 py-1 rounded-full">Paid</span>
                    )}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
