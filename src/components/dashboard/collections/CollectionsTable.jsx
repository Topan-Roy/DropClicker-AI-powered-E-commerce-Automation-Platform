'use client'
import CollectionStatsBadge from './CollectionStatsBadge';
import CollectionActionMenu from './CollectionActionMenu';

export default function CollectionsTable({ data }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-gray-100">
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Stats</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Type</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Total</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img src={row.avatar} alt="" className="w-10 h-10 rounded-full border border-gray-100 bg-gray-50" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{row.name}</p>
                    <p className="text-xs font-medium text-gray-400">{row.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4"><CollectionStatsBadge status={row.status} /></td>
              <td className="px-6 py-4 text-sm font-medium text-gray-500">{row.type}</td>
              <td className="px-6 py-4 text-sm font-bold text-gray-900">{row.total}</td>
              <td className="px-6 py-4"><CollectionActionMenu /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}