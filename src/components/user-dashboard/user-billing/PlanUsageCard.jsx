'use client';

export default function PlanUsageCard({ planUsage }) {
  if (!planUsage) return null;
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="mb-6">
        <h3 className="font-bold text-gray-900 text-lg">Plan Usage</h3>
        <p className="text-sm text-gray-400 capitalize">Current plan: {planUsage.planName}</p>
      </div>

      <div className="space-y-5">
        {planUsage.usages.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">{item.label}</span>
              <span className="text-sm font-bold text-gray-900">{item.percent}%</span>
            </div>
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-1000" 
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}