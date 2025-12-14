
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAnnouncements() {
  return await prisma.announcement.findMany({
    orderBy: { date: 'desc' }
  });
}

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
       <div>
         <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
         <p className="text-gray-500">Latest news from the school administration.</p>
       </div>

       <div className="grid gap-6">
         {announcements.map((ann) => (
             <article key={ann.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                 <div className="p-6">
                     <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                         {ann.category}
                     </span>
                     <h2 className="text-xl font-bold text-gray-900 mb-2">{ann.title}</h2>
                     <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{ann.content}</p>
                     <div className="mt-4 pt-4 border-t border-gray-50 text-xs text-gray-400 flex justify-between">
                         <span>Posted by Admin</span>
                         <span>{new Date(ann.date).toLocaleDateString()}</span>
                     </div>
                 </div>
             </article>
         ))}
       </div>
    </div>
  );
}
