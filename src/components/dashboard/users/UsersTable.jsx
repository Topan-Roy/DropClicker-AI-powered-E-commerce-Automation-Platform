'use client';
import UserRoleBadge from './UserRoleBadge';
import UserPlanBadge from './UserPlanBadge';
import UserActionMenu from './UserActionMenu';

export default function UsersTable({ data }) {
  // TODO: replace data from usersData.js with paginated API response
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50/80 border-b border-gray-100">
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">User</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider text-center">Role</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider text-center">Plan</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider">Joined</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider text-right pr-10">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {data.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img src={user.avatar} alt="" className="w-10 h-10 rounded-full border border-gray-100" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500 font-medium">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4"><div className="flex justify-center"><UserRoleBadge role={user.role} /></div></td>
              <td className="px-6 py-4"><div className="flex justify-center"><UserPlanBadge plan={user.plan} /></div></td>
              <td className="px-6 py-4 text-sm font-bold text-gray-700">{user.joined}</td>
              <td className="px-6 py-4 text-right pr-10"><UserActionMenu /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}