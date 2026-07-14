export default function UserRoleBadge({ role }) {
  const isAdmin = role?.toLowerCase() === 'admin';
  const label = role ? role.charAt(0).toUpperCase() + role.slice(1).toLowerCase() : 'User';
  return (
    <div className="flex items-center justify-center w-max px-3 py-1 rounded-full border border-gray-100 bg-white shadow-xs">
      <div className={`w-2 h-2 rounded-full mr-2 ${isAdmin ? 'bg-blue-500' : 'bg-gray-400'}`} />
      <span className={`text-sm font-semibold ${isAdmin ? 'text-blue-500' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  );
}