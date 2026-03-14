

'use client';

export default function PlanUsage({ planUsage }) {
  if (!planUsage) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
      <div className="mb-4 sm:mb-6">
        <h3 className="font-bold text-gray-900">Plan Usage</h3>
        <p className="text-xs text-gray-400">Current plan: {planUsage.planName}</p>
      </div>

      <div className="space-y-6 mb-8">
        {planUsage.usages.map((usage, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm font-bold text-gray-700 mb-2">
              <span>{usage.label}</span>
              <span>{usage.percent}%</span>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${usage.percent}%`,
                  background: 'linear-gradient(90deg, #3b82f6, #2563eb)'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        className="w-full py-4 rounded-xl text-white font-bold text-sm shadow-lg shadow-blue-100 transition-all active:scale-[0.98] cursor-pointer"
        style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
      >
        Upgrade Plan
      </button>
    </div>
  );
}