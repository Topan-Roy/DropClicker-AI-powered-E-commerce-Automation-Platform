'use client'
import { useState, useEffect } from 'react'
import { 
  fetchUserProfile, fetchNotificationSettings, 
  fetchIntegrationsSettings, fetchSecuritySettings,
  saveProfile, saveNotifications, connectShopify, saveSecurity 
} from '@/services/userSettingsService'
import SettingsTabBar from '@/components/user-dashboard/user-settings/SettingsTabBar'
import ProfileTab from '@/components/user-dashboard/user-settings/ProfileTab'
import NotificationTab from '@/components/user-dashboard/user-settings/NotificationTab'
import IntegrationsTab from '@/components/user-dashboard/user-settings/IntegrationsTab'
import SecurityTab from '@/components/user-dashboard/user-settings/SecurityTab'

export default function UserSettingsPage() {
  const [activeTab, setActiveTab] = useState('Profile')
  const [loading, setLoading] = useState(true)
  
  const [profile, setProfile] = useState({})
  const [notifications, setNotifications] = useState({})
  const [integrations, setIntegrations] = useState({})
  const [security, setSecurity] = useState({})
  
  const [savingProfile, setSavingProfile] = useState(false)
  const [connecting, setConnecting] = useState(false)
  const [savingSecurity, setSavingSecurity] = useState(false)

  useEffect(() => {
    async function loadData() {
      const [prof, notifs, integs, sec] = await Promise.all([
        fetchUserProfile(),
        fetchNotificationSettings(),
        fetchIntegrationsSettings(),
        fetchSecuritySettings(),
      ]);
      setProfile(prof);
      setNotifications(notifs);
      setIntegrations(integs);
      setSecurity(sec);
      setLoading(false);
    }
    loadData();
  }, []);

  const handleSaveProfile = async () => {
    setSavingProfile(true);
    await saveProfile(profile);
    setSavingProfile(false);
  };

  const handleNotificationChange = async (field, value) => {
    const updated = { ...notifications, [field]: value };
    setNotifications(updated);
    await saveNotifications(updated);
  };

  const handleConnectShopify = async () => {
    if (!integrations.shopifyDomain) return;
    setConnecting(true);
    await connectShopify(integrations.shopifyDomain);
    setConnecting(false);
  };

  const handleSaveSecurity = async () => {
    setSavingSecurity(true);
    await saveSecurity(security);
    setSavingSecurity(false);
  };

  const tabs = ['Profile', 'Notification', "Integration's", 'Security'];

  if (loading) return (
    <div className="flex justify-center py-20">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="p-6 max-w-7xl mx-auto animate-in fade-in duration-500">
      <SettingsTabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="transition-all duration-300">
        {activeTab === 'Profile' && (
          <ProfileTab 
            profile={profile} 
            onChange={(f,v) => setProfile(p => ({...p,[f]:v}))} 
            onSave={handleSaveProfile} 
            saving={savingProfile} 
          />
        )}
        {activeTab === 'Notification' && (
          <NotificationTab 
            notifications={notifications} 
            onChange={handleNotificationChange} 
          />
        )}
        {activeTab === "Integration's" && (
          <IntegrationsTab 
            integrations={integrations} 
            onChange={(f,v) => setIntegrations(i => ({...i,[f]:v}))} 
            onConnect={handleConnectShopify} 
            connecting={connecting} 
          />
        )}
        {activeTab === 'Security' && (
          <SecurityTab 
            security={security} 
            onChange={(f,v) => setSecurity(s => ({...s,[f]:v}))} 
            onSave={handleSaveSecurity} 
            saving={savingSecurity} 
          />
        )}
      </div>
    </div>
  );
}