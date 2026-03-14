export default function UserPlanBadge({ plan }) {
  const isFree = plan === 'Free';
  return (
    <div className="flex items-center justify-center w-max px-3 py-1 rounded-full border border-gray-100 bg-white shadow-xs">
      <div className={`w-2 h-2 rounded-full mr-2 ${isFree ? 'bg-gray-400' : 'bg-blue-500'}`} />
      <span className={`text-sm font-semibold ${isFree ? 'text-gray-500' : 'text-blue-500'}`}>
        {plan}
      </span>
    </div>
  );
}