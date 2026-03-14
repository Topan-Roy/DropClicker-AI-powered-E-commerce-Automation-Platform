'use client'
import { Megaphone } from 'lucide-react';
import AnnouncementActionMenu from './AnnouncementActionMenu';

export default function AnnouncementCard({ announcement, onDelete }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 flex items-start justify-between">
      <div className="flex items-start gap-3 flex-1">
        <div className="bg-orange-50 text-orange-400 p-2 rounded-lg shrink-0">
          <Megaphone size={20} strokeWidth={2.5} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-gray-900 truncate">{announcement.title}</h3>
          <p className="text-sm text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
            {announcement.content}
          </p>
          {announcement.linkText && (
            <a href={announcement.link} className="inline-block text-sm text-blue-500 underline cursor-pointer mt-1 font-medium">
              {announcement.linkText}
            </a>
          )}
          <div className="text-[11px] text-gray-400 mt-1 font-medium">
            Priority: {announcement.priority} · Created: {announcement.createdAt}
          </div>
        </div>
      </div>

      <AnnouncementActionMenu onDelete={onDelete} />
    </div>
  );
}