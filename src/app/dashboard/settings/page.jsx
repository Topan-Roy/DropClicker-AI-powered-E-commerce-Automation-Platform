// 'use client'
// import { useState } from 'react'
// import { settingsTabs, initialSettingsData } from '@/data/settingsData'
// import SettingsTabBar from '@/components/dashboard/settings/SettingsTabBar'
// import SettingsCard from '@/components/dashboard/settings/SettingsCard'
// import SettingsInputField from '@/components/dashboard/settings/SettingsInputField'
// import SettingsToggleRow from '@/components/dashboard/settings/SettingsToggleRow'


// export default function SettingsPage() {
//   const [activeTab, setActiveTab] = useState('Billing')
//   const [settings, setSettings] = useState(initialSettingsData)

//   const handleChange = (section, field, value) => {
//     setSettings(prev => ({
//       ...prev,
//       [section]: { ...prev[section], [field]: value }
//     }))
//   }

//   const handleSave = (section) => {
//     console.log(`Saving ${section}:`, settings[section])
//     // TODO: PATCH /api/settings/${section}
//     alert(`${section} settings updated successfully!`)
//   }

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <SettingsTabBar
//         tabs={settingsTabs}
//         activeTab={activeTab}
//         onTabChange={setActiveTab}
//       />

//       {/* TAB: BILLING */}
//       {activeTab === 'Billing' && (
//         <SettingsCard 
//           title="Billing Configuration" 
//           subtitle="Configure platform fees and payments"
//           onSave={() => handleSave('billing')}
//         >
//           <SettingsInputField 
//             label="Platform Fee (%)"
//             placeholder="Announcement title"
//             value={settings.billing.platformFee}
//             onChange={(val) => handleChange('billing', 'platformFee', val)}
//             hint="Fee charged on each dropship order"
//           />
//           <SettingsToggleRow 
//             title="Stripe Payments"
//             description="Enable Stripe payment processing"
//             value={settings.billing.stripePayments}
//             onChange={(val) => handleChange('billing', 'stripePayments', val)}
//           />
//         </SettingsCard>
//       )}

//       {/* TAB: AI & CREDITS */}
//       {activeTab === 'AI & Credits' && (
//         <SettingsCard 
//           title="AI Credits Configuration" 
//           subtitle="Set AI credit limits per plan"
//           onSave={() => handleSave('aiCredits')}
//         >
//           <div className="grid grid-cols-4 gap-4">
//             <SettingsInputField 
//               label="Free Plan Credits"
//               value={settings.aiCredits.freePlanCredits}
//               onChange={(val) => handleChange('aiCredits', 'freePlanCredits', val)}
//               hint="5 credits/month"
//             />
//             <SettingsInputField 
//               label="Starter Plan Credits"
//               value={settings.aiCredits.starterPlanCredits}
//               onChange={(val) => handleChange('aiCredits', 'starterPlanCredits', val)}
//               hint="50 credits/month"
//             />
//             <SettingsInputField 
//               label="Growth Plan Credits"
//               value={settings.aiCredits.growthPlanCredits}
//               onChange={(val) => handleChange('aiCredits', 'growthPlanCredits', val)}
//               hint="200 credits/month"
//             />
//             <SettingsInputField 
//               label="Pro Plan Credits"
//               placeholder="Announcement title"
//               value={settings.aiCredits.proPlanCredits}
//               onChange={(val) => handleChange('aiCredits', 'proPlanCredits', val)}
//               hint="Unlimited"
//             />
//           </div>
//         </SettingsCard>
//       )}

//       {/* TAB: SYNC */}
//       {activeTab === 'Sync' && (
//         <SettingsCard 
//           title="Supplier Sync Settings" 
//           subtitle="Configure automatic product synchronization"
//           onSave={() => handleSave('sync')}
//         >
//           <SettingsInputField 
//             label="Sync Interval (hours)"
//             placeholder="Announcement title"
//             value={settings.sync.syncInterval}
//             onChange={(val) => handleChange('sync', 'syncInterval', val)}
//             hint="How often to sync supplier feeds"
//           />
//           <SettingsToggleRow 
//             title="Automatic Sync"
//             description="Enable automatic supplier synchronization"
//             value={settings.sync.automaticSync}
//             onChange={(val) => handleChange('sync', 'automaticSync', val)}
//           />
//         </SettingsCard>
//       )}

//       {/* TAB: NOTIFICATIONS */}
//       {activeTab === 'Notifications' && (
//         <SettingsCard 
//           title="Email Notifications" 
//           subtitle="Configure platform email notifications"
//           onSave={() => handleSave('notifications')}
//         >
//           <div className="space-y-2 border-t border-gray-100 pt-2">
//             <SettingsToggleRow 
//               title="Email Notifications"
//               description="Enable all email notifications"
//               value={settings.notifications.emailNotifications}
//               onChange={(val) => handleChange('notifications', 'emailNotifications', val)}
//             />
//             <div className="border-b border-gray-100 mx-4" />
//             <SettingsToggleRow 
//               title="New User Welcome Email"
//               description="Send welcome email to new users"
//               value={settings.notifications.newUserWelcomeEmail}
//               onChange={(val) => handleChange('notifications', 'newUserWelcomeEmail', val)}
//             />
//           </div>
//         </SettingsCard>
//       )}

//       {/* TAB: SECURITY */}
//       {activeTab === 'Security' && (
//         <SettingsCard 
//           title="Security & Maintenance" 
//           subtitle="Platform security settings"
//           onSave={() => handleSave('security')}
//         >
//           <SettingsToggleRow 
//             title="Maintenance Mode"
//             description="Temporarily disable platform access"
//             bgColor="bg-red-50"
//             value={settings.security.maintenanceMode}
//             onChange={(val) => handleChange('security', 'maintenanceMode', val)}
//           />
//         </SettingsCard>
//       )}
//     </div>
//   )
// }
'use client'
import { useState } from 'react'
import { settingsTabs, initialSettingsData } from '@/data/settingsData'
import SettingsTabBar from '@/components/dashboard/settings/SettingsTabBar'
import SettingsCard from '@/components/dashboard/settings/SettingsCard'
import SettingsInputField from '@/components/dashboard/settings/SettingsInputField'
import SettingsToggleRow from '@/components/dashboard/settings/SettingsToggleRow'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Billing')
  const [settings, setSettings] = useState(initialSettingsData)

  const handleChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }))
  }

  const handleSave = (section) => {
    console.log(`Saving ${section}:`, settings[section])
    alert(`${section} settings updated successfully!`)
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <SettingsTabBar
        tabs={settingsTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* TAB: BILLING */}
      {activeTab === 'Billing' && (
        <SettingsCard
          title="Billing Configuration"
          subtitle="Configure platform fees and payments"
          onSave={() => handleSave('billing')}
        >
          <SettingsInputField
            label="Platform Fee (%)"
            placeholder="Enter platform fee"
            value={settings.billing.platformFee}
            onChange={(val) => handleChange('billing', 'platformFee', val)}
            hint="Fee charged on each dropship order"
          />
          <SettingsToggleRow
            title="Stripe Payments"
            description="Enable Stripe payment processing"
            value={settings.billing.stripePayments}
            onChange={(val) => handleChange('billing', 'stripePayments', val)}
          />
        </SettingsCard>
      )}

      {/* TAB: AI & CREDITS */}
      {activeTab === 'AI & Credits' && (
        <SettingsCard
          title="AI Credits Configuration"
          subtitle="Set AI credit limits per plan"
          onSave={() => handleSave('aiCredits')}
        >
          {/* 1 col → 2 col → 4 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <SettingsInputField
              label="Free Plan Credits"
              value={settings.aiCredits.freePlanCredits}
              onChange={(val) => handleChange('aiCredits', 'freePlanCredits', val)}
              hint="5 credits/month"
            />
            <SettingsInputField
              label="Starter Plan Credits"
              value={settings.aiCredits.starterPlanCredits}
              onChange={(val) => handleChange('aiCredits', 'starterPlanCredits', val)}
              hint="50 credits/month"
            />
            <SettingsInputField
              label="Growth Plan Credits"
              value={settings.aiCredits.growthPlanCredits}
              onChange={(val) => handleChange('aiCredits', 'growthPlanCredits', val)}
              hint="200 credits/month"
            />
            <SettingsInputField
              label="Pro Plan Credits"
              value={settings.aiCredits.proPlanCredits}
              onChange={(val) => handleChange('aiCredits', 'proPlanCredits', val)}
              hint="Unlimited"
            />
          </div>
        </SettingsCard>
      )}

      {/* TAB: SYNC */}
      {activeTab === 'Sync' && (
        <SettingsCard
          title="Supplier Sync Settings"
          subtitle="Configure automatic product synchronization"
          onSave={() => handleSave('sync')}
        >
          <SettingsInputField
            label="Sync Interval (hours)"
            placeholder="Enter interval"
            value={settings.sync.syncInterval}
            onChange={(val) => handleChange('sync', 'syncInterval', val)}
            hint="How often to sync supplier feeds"
          />
          <SettingsToggleRow
            title="Automatic Sync"
            description="Enable automatic supplier synchronization"
            value={settings.sync.automaticSync}
            onChange={(val) => handleChange('sync', 'automaticSync', val)}
          />
        </SettingsCard>
      )}

      {/* TAB: NOTIFICATIONS */}
      {activeTab === 'Notifications' && (
        <SettingsCard
          title="Email Notifications"
          subtitle="Configure platform email notifications"
          onSave={() => handleSave('notifications')}
        >
          <div className="space-y-2 border-t border-gray-100 pt-2">
            <SettingsToggleRow
              title="Email Notifications"
              description="Enable all email notifications"
              value={settings.notifications.emailNotifications}
              onChange={(val) => handleChange('notifications', 'emailNotifications', val)}
            />
            <div className="border-b border-gray-100 mx-4" />
            <SettingsToggleRow
              title="New User Welcome Email"
              description="Send welcome email to new users"
              value={settings.notifications.newUserWelcomeEmail}
              onChange={(val) => handleChange('notifications', 'newUserWelcomeEmail', val)}
            />
          </div>
        </SettingsCard>
      )}

      {/* TAB: SECURITY */}
      {activeTab === 'Security' && (
        <SettingsCard
          title="Security & Maintenance"
          subtitle="Platform security settings"
          onSave={() => handleSave('security')}
        >
          <SettingsToggleRow
            title="Maintenance Mode"
            description="Temporarily disable platform access"
            bgColor="bg-red-50"
            value={settings.security.maintenanceMode}
            onChange={(val) => handleChange('security', 'maintenanceMode', val)}
          />
        </SettingsCard>
      )}
    </div>
  )
}