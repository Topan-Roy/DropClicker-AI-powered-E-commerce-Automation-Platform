'use client'
import { Users2 } from 'lucide-react';

export default function RecentReferralsCard({ referrals }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-base font-bold text-gray-900">Recent Referrals</h3>
      </div>

      {referrals.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-6">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
            <Users2 size={32} className="text-gray-300" />
          </div>
          <p className="text-sm font-medium text-gray-400 text-center max-w-[240px]">
            No referrals yet. Share your link to get started!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          {/* TODO: Implement Table for populated state */}
          <table className="w-full text-left border-collapse">
             {/* Table headers and rows go here */}
          </table>
        </div>
      )}
    </div>
  );
}