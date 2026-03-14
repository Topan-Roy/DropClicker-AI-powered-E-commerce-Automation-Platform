'use client'
export default function CollectionStatsBadge({ status }) {
  const isActive = status?.toLowerCase() === 'active';
  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-100 bg-white shadow-xs w-max">
      <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-400'}`} />
      <span className={`text-sm font-semibold ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
        {isActive ? 'Active' : 'inactive'}
      </span>
    </div>
  );
}