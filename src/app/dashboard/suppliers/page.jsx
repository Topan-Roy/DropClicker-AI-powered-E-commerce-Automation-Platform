'use client';

import { useState } from 'react';
import { Upload, RefreshCw } from 'lucide-react';

// TODO: replace mock imports with API hooks
import { supplierStatsData, suppliersTableData } from '@/data/supplierHubData';
import SupplierStatCard from '@/components/dashboard/supplier-hub/SupplierStatCard';
import SuppliersTable from '@/components/dashboard/supplier-hub/SuppliersTable';
import BulkImportModal from '@/components/dashboard/supplier-hub/BulkImportModal';
import UploadProductModal from '@/components/dashboard/supplier-hub/UploadProductModal';
import AddSupplierModal from '@/components/dashboard/supplier-hub/AddSupplierModal';
import FeedSyncModal from '@/components/dashboard/supplier-hub/FeedSyncModal';

export default function SupplierHubPage() {
  const [showBulkImport, setShowBulkImport] = useState(false);
  const [showUploadProduct, setShowUploadProduct] = useState(false);
  const [showAddSupplier, setShowAddSupplier] = useState(false);
  const [showFeedSync, setShowFeedSync] = useState(false);

  return (
    <div className="p-4 sm:p-6 bg-gray-50/20 min-h-screen space-y-4 sm:space-y-6">

      {/* Top Action Buttons Row */}
      <div className="flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-3">
        <button
          onClick={() => setShowBulkImport(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-800 hover:bg-gray-50 transition-all shadow-sm active:scale-95"
        >
          <Upload size={16} /> Bulk Import
        </button>
        <button
          onClick={() => setShowUploadProduct(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-800 hover:bg-gray-50 transition-all shadow-sm active:scale-95"
        >
          <Upload size={16} /> Upload Product
        </button>
        <button
          onClick={() => setShowFeedSync(true)}
          className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 rounded-xl px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-100 active:scale-95"
        >
          <RefreshCw size={16} className="group-hover:animate-spin" /> Feed Sync Dashboard
        </button>
      </div>

      {/* Stat Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {supplierStatsData.map(stat => (
          <SupplierStatCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* Main Table Area */}
      <SuppliersTable
        data={suppliersTableData}
        onAddSupplier={() => setShowAddSupplier(true)}
      />

      {/* Modals */}
      <BulkImportModal
        isOpen={showBulkImport}
        onClose={() => setShowBulkImport(false)}
      />
      <UploadProductModal
        isOpen={showUploadProduct}
        onClose={() => setShowUploadProduct(false)}
      />
      <AddSupplierModal
        isOpen={showAddSupplier}
        onClose={() => setShowAddSupplier(false)}
      />
      <FeedSyncModal
        isOpen={showFeedSync}
        onClose={() => setShowFeedSync(false)}
      />

    </div>
  );
}
