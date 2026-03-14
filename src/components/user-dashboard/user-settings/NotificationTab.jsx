'use client'
import ToggleRow from './ToggleRow';

export default function NotificationTab({ notifications, onChange }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden max-w-4xl">
      <div className="px-6 py-5 border-b border-gray-100">
        <h3 className="text-base font-bold text-gray-900">Email Notifications</h3>
        <p className="text-sm text-gray-400">Choose what emails you receive</p>
      </div>
      <div className="divide-y divide-gray-50">
        <ToggleRow 
          title="New Orders" description="Get notified when you receive new orders"
          value={notifications.newOrders} onChange={(v) => onChange('newOrders', v)}
        />
        <ToggleRow 
          title="Import Updates" description="Updates on your product imports"
          value={notifications.importUpdates} onChange={(v) => onChange('importUpdates', v)}
        />
        <ToggleRow 
          title="Sync Alerts" description="Supplier sync status updates"
          value={notifications.syncAlerts} onChange={(v) => onChange('syncAlerts', v)}
        />
        <ToggleRow 
          title="Marketing" description="Product updates and promotions"
          value={notifications.marketing} onChange={(v) => onChange('marketing', v)}
        />
        <ToggleRow 
          title="Sync Notifications" description="Get notified when syncs complete"
          value={notifications.syncNotifications} onChange={(v) => onChange('syncNotifications', v)}
        />
      </div>
    </div>
  );
}