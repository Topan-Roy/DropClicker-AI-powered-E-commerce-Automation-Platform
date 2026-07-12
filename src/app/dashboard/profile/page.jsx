'use client';

import { useState } from 'react';
import { ImagePlus, User, Mail, Phone, Globe, Lock, Shield, Bell, Trash2, Save, Eye, EyeOff } from 'lucide-react';

// Tabs
const TABS = [
  { id: 'general', label: 'General', icon: User },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'notifications', label: 'Notifications', icon: Bell },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('general');
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [saved, setSaved] = useState(false);

  // Profile form state
  const [profile, setProfile] = useState({
    name: 'Jenny Wilson',
    email: 'jen.wilson@example.com',
    phone: '+44 7700 900123',
    website: 'https://jennywilson.store',
    bio: 'UK-based dropshipping entrepreneur. Running 3 stores on DropClicker.',
    avatarSeed: 'Jenny',
  });

  // Notification preferences
  const [notifications, setNotifications] = useState({
    newOrders: true,
    lowStock: true,
    newUsers: false,
    weeklyReport: true,
    productUpdates: false,
    securityAlerts: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your personal info, security settings, and notifications.</p>
      </div>

      {/* Profile Avatar Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="relative group">
          <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-purple-100 shadow-md">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.avatarSeed}`}
              alt="Profile Avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <button className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ImagePlus size={20} className="text-white" />
          </button>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
          <p className="text-sm text-gray-500">{profile.email}</p>
          <span className="inline-flex items-center gap-1 mt-2 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
            <Shield size={11} /> Admin
          </span>
        </div>
        <div className="sm:ml-auto">
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              saved
                ? 'bg-emerald-500 text-white'
                : 'bg-[#1a0a4b] text-white hover:bg-[#2d1b6b]'
            }`}
          >
            <Save size={15} />
            {saved ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white border border-gray-100 rounded-2xl p-1.5 w-fit shadow-sm">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-[#1a0a4b] text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <Icon size={15} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

        {/* GENERAL TAB */}
        {activeTab === 'general' && (
          <div className="space-y-6 max-w-2xl">
            <h3 className="text-base font-bold text-gray-900">Personal Information</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Full Name</label>
                <div className="relative">
                  <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone Number</label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                  />
                </div>
              </div>

              {/* Website */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Website</label>
                <div className="relative">
                  <Globe size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="url"
                    value={profile.website}
                    onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Bio</label>
              <textarea
                rows={3}
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all resize-none"
              />
            </div>

            {/* Avatar seed picker */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Avatar Style</label>
              <div className="flex gap-3 flex-wrap">
                {['Jenny', 'Alex', 'Sam', 'Jordan', 'Morgan', 'Casey'].map((seed) => (
                  <button
                    key={seed}
                    onClick={() => setProfile({ ...profile, avatarSeed: seed })}
                    className={`h-12 w-12 rounded-full overflow-hidden border-2 transition-all ${
                      profile.avatarSeed === seed ? 'border-purple-500 scale-110 shadow-md' : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
                      alt={seed}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECURITY TAB */}
        {activeTab === 'security' && (
          <div className="space-y-6 max-w-md">
            <h3 className="text-base font-bold text-gray-900">Change Password</h3>

            <div className="space-y-4">
              {/* Current password */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Current Password</label>
                <div className="relative">
                  <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showCurrentPass ? 'text' : 'password'}
                    placeholder="Enter current password"
                    className="w-full pl-9 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPass(!showCurrentPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showCurrentPass ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* New password */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">New Password</label>
                <div className="relative">
                  <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showNewPass ? 'text' : 'password'}
                    placeholder="Enter new password"
                    className="w-full pl-9 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPass(!showNewPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showNewPass ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* Confirm new password */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Confirm New Password</label>
                <div className="relative">
                  <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Re-enter new password"
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                  />
                </div>
              </div>

              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#1a0a4b] text-white text-sm font-bold rounded-xl hover:bg-[#2d1b6b] transition-colors"
              >
                <Shield size={15} />
                Update Password
              </button>
            </div>

            {/* Danger Zone */}
            <div className="mt-10 pt-6 border-t border-red-100">
              <h3 className="text-base font-bold text-red-600 mb-1">Danger Zone</h3>
              <p className="text-sm text-gray-500 mb-4">Once you delete your account, there is no going back.</p>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 border border-red-200 text-sm font-bold rounded-xl hover:bg-red-100 transition-colors">
                <Trash2 size={15} />
                Delete Account
              </button>
            </div>
          </div>
        )}

        {/* NOTIFICATIONS TAB */}
        {activeTab === 'notifications' && (
          <div className="space-y-6 max-w-lg">
            <h3 className="text-base font-bold text-gray-900">Notification Preferences</h3>
            <div className="space-y-3">
              {[
                { key: 'newOrders', label: 'New Orders', desc: 'Get notified when a new order is placed.' },
                { key: 'lowStock', label: 'Low Stock Alerts', desc: 'Alert when product inventory goes below threshold.' },
                { key: 'newUsers', label: 'New User Registrations', desc: 'Notify when a new user signs up.' },
                { key: 'weeklyReport', label: 'Weekly Report', desc: 'Receive a weekly summary of your dashboard.' },
                { key: 'productUpdates', label: 'Product Updates', desc: 'Notifications about product changes from suppliers.' },
                { key: 'securityAlerts', label: 'Security Alerts', desc: 'Important alerts about your account security.' },
              ].map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                  <button
                    onClick={() =>
                      setNotifications((prev) => ({ ...prev, [item.key]: !prev[item.key] }))
                    }
                    className={`relative w-11 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${
                      notifications[item.key] ? 'bg-[#1a0a4b]' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${
                        notifications[item.key] ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#1a0a4b] text-white text-sm font-bold rounded-xl hover:bg-[#2d1b6b] transition-colors"
            >
              <Save size={15} />
              Save Preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
