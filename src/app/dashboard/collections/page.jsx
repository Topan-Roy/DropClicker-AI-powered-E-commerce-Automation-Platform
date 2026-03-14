'use client'
import { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { collectionsTableData } from '@/data/collectionsData';
import CollectionsToolbar from '@/components/dashboard/collections/CollectionsToolbar';
import CollectionsTable from '@/components/dashboard/collections/CollectionsTable';
import CreateCollectionModal from '@/components/dashboard/collections/CreateCollectionModal';


export default function CollectionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [filters, setFilters] = useState({ status: 'All Status', type: 'All Types' });

  // FRONTEND SEARCH & FILTER LOGIC
  const filteredData = useMemo(() => {
    let data = [...collectionsTableData];

    if (searchQuery) {
      data = data.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.status !== 'All Status') {
      data = data.filter(c => c.status === filters.status);
    }

    if (filters.type !== 'All Types') {
      data = data.filter(c => c.type === filters.type);
    }

    return data;
  }, [searchQuery, filters]);

  return (
    <div className="p-4 sm:p-8 bg-[#F9FAFB] min-h-screen space-y-6">
      <div className="flex justify-end">
        <button
          onClick={() => setShowCreateModal(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all"
        >
          <Plus size={18} /> Create Collection
        </button>
      </div>

      <CollectionsToolbar
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        onFilterToggle={() => setShowFilter(!showFilter)}
        showFilter={showFilter}
        filters={filters}
        onFilterChange={(key, val) => setFilters(prev => ({ ...prev, [key]: val }))}
      />

      <CollectionsTable data={filteredData} />

      <CreateCollectionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
}