'use client'

import { useState } from 'react';
import { Plus } from 'lucide-react';
import AnnouncementCard from '@/components/dashboard/announcements/AnnouncementCard';
import CreateAnnouncementModal from '@/components/dashboard/announcements/CreateAnnouncementModal';
import { announcementsListData } from '@/data/announcementsData';

export default function AnnouncementsPage() {
  // TODO: replace useState with API fetch hooks (useEffect + GET /announcements)
  const [announcements, setAnnouncements] = useState(announcementsListData);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreated = (newAnnouncement) => {
    // Optimistic update — add to top of list
    setAnnouncements(prev => [newAnnouncement, ...prev]);
    // TODO: on backend integration, call API then refetch
  };

  const handleDelete = (id) => {
    setAnnouncements(prev => prev.filter(a => a.id !== id));
    // TODO: call DELETE /announcements/:id API then refetch
  };

  return (
    <div className="p-8 bg-[#F9FAFB] min-h-screen">
      {/* Top Action Row */}
      <div className="flex justify-end mb-6">
        <button 
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-100 transition-all active:scale-95 cursor-pointer"
          style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }}
        >
          <Plus size={18} /> Create Announcement
        </button>
      </div>

      {/* Announcements List Container */}
      <div className="max-w-4xl space-y-3">
        {announcements.map(a => (
          <AnnouncementCard 
            key={a.id} 
            announcement={a} 
            onDelete={() => handleDelete(a.id)}
          />
        ))}

        {announcements.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">No announcements found. Create one to get started.</p>
          </div>
        )}
      </div>

      {/* Modals */}
      <CreateAnnouncementModal 
        isOpen={showCreateModal} 
        onClose={() => setShowCreateModal(false)}
        onCreated={handleCreated}
      />
    </div>
  );
}