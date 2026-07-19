'use client';
import UserRoleBadge from './UserRoleBadge';
import UserActionMenu from './UserActionMenu';

export default function UsersTable({ data, onView, onDelete, onUpdateRole }) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center">
        <p className="text-gray-400 text-sm font-medium">কোনো user পাওয়া যায়নি</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50/80 border-b border-gray-100">
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">User</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider text-center">Role</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Joined</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider text-right pr-10">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {data.map((user) => {
            const id = user._id || user.id;
            const name = user.fullName || user.name || 'Unknown';
            const email = user.email || '—';
            const role = user.role || 'user';
            const joined = user.createdAt
              ? new Date(user.createdAt).toLocaleDateString('en-GB', {
                  day: '2-digit', month: 'short', year: 'numeric',
                })
              : user.joined || '—';
            const avatar =
              user.avatar ||
              user.profileImage ||
              `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`;

            return (
              <tr key={id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={avatar}
                      alt={name}
                      className="w-10 h-10 rounded-full border border-gray-100 bg-gray-50"
                    />
                    <div>
                      <p className="text-sm font-bold text-gray-900">{name}</p>
                      <p className="text-xs text-gray-500 font-medium">{email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <UserRoleBadge role={role} />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">{joined}</td>
                <td className="px-6 py-4 text-right pr-10">
                  <UserActionMenu
                    user={user}
                    onView={onView}
                    onDelete={onDelete}
                    onUpdateRole={onUpdateRole}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}