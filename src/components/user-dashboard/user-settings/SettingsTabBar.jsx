'use client'

export default function SettingsTabBar({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeTab === tab
              ? 'bg-white text-gray-900 shadow-sm font-bold'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}