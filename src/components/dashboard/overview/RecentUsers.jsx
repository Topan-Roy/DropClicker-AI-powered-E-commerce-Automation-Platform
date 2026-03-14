'use client';
export default function RecentUsers({ data }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-900">Recent Users</h2>
        <button className="text-sm font-semibold text-indigo-600 flex items-center gap-1">
          View all <span>→</span>
        </button>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-2 bg-blue-50/50 rounded-lg p-3 mb-2">
          <span className="text-sm font-bold text-gray-700">User</span>
          <span className="text-sm font-bold text-gray-700 text-right">Role</span>
        </div>
        <div className="space-y-4">
          {data.map((user) => (
            <div key={user.id} className="grid grid-cols-2 items-center px-2 pb-4 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-3">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full border border-gray-100 bg-white`}>
                  <div className={`w-2 h-2 rounded-full ${user.role === 'Admin' ? 'bg-blue-500' : 'bg-gray-400'}`} />
                  <span className={`text-xs font-semibold ${user.role === 'Admin' ? 'text-blue-600' : 'text-gray-500'}`}>{user.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}