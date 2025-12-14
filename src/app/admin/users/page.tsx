
import { PrismaClient } from '@prisma/client';
import { Mail, Phone, User as UserIcon } from 'lucide-react';

const prisma = new PrismaClient();

async function getUsers() {
    return await prisma.user.findMany({
        include: { parentProfile: true, teacherProfile: true },
        orderBy: { createdAt: 'desc' }
    });
}

export default async function AdminUsersPage() {
  const users = await getUsers();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
        <div>
            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-500">View and manage registered users.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase">User</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase">Role</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase">Contact</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase">Joined</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                                        user.role === 'ADMIN' ? 'bg-purple-100 text-purple-700' :
                                        user.role === 'TEACHER' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                    }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="space-y-1 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                           <Mail className="w-3 h-3" /> {user.email}
                                        </div>
                                        {user.parentProfile?.phone && (
                                            <div className="flex items-center gap-1">
                                                <Phone className="w-3 h-3" /> {user.parentProfile.phone}
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-gray-500">
                                    {new Date(user.createdAt).toLocaleDateString()}
                                </td>
                                <td className="p-4">
                                    <button className="text-blue-600 font-medium text-sm hover:underline">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}
