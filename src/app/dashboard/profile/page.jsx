'use client';

import { useState, useRef } from 'react';
import {
  ImagePlus, User, Mail, Lock, Shield, Bell, Trash2, Save,
  Eye, EyeOff, Camera, CheckCircle, AlertCircle, Loader2, X
} from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import api from '@/services/api';

const TABS = [
  { id: 'general', label: 'General', icon: User },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'notifications', label: 'Notifications', icon: Bell },
];

const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [activeTab, setActiveTab] = useState('general');
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  // Profile form state — initialized from Redux user
  const [name, setName] = useState(user?.name || '');
  const [avatarUrl, setAvatarUrl] = useState(user?.avatar || '');

  // Password form state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // UI states
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: '' }

  const fileInputRef = useRef(null);

  // Notification preferences
  const [notifications, setNotifications] = useState({
    newOrders: true,
    lowStock: true,
    newUsers: false,
    weeklyReport: true,
    productUpdates: false,
    securityAlerts: true,
  });

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3500);
  };

  // ─── Upload avatar to ImgBB ───────────────────────────────────────────────
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      showToast('error', 'শুধু ছবি ফাইল আপলোড করুন।');
      return;
    }
    // Validate size (max 32MB per ImgBB)
    if (file.size > 32 * 1024 * 1024) {
      showToast('error', 'ফাইল সাইজ ৩২MB এর বেশি হতে পারবে না।');
      return;
    }

    setUploadingAvatar(true);
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        { method: 'POST', body: formData }
      );
      const data = await response.json();

      if (!data.success) throw new Error('ImgBB upload failed');

      const imageUrl = data.data.display_url;
      setAvatarUrl(imageUrl);
      showToast('success', 'ছবি সফলভাবে আপলোড হয়েছে! Save করতে ভুলবেন না।');
    } catch (err) {
      showToast('error', 'ছবি আপলোড করতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setUploadingAvatar(false);
      // Reset file input
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // ─── Save profile (name + avatar) to backend ─────────────────────────────
  const handleSaveProfile = async () => {
    if (!name.trim()) {
      showToast('error', 'নাম খালি রাখা যাবে না।');
      return;
    }
    setSavingProfile(true);
    try {
      const res = await api.patch('/auth/update-profile', {
        name: name.trim(),
        avatar: avatarUrl || null,
      });
      const updatedUser = res.data.data.user;

      // Update localStorage with fresh user data
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
      showToast('success', 'প্রোফাইল সফলভাবে আপডেট হয়েছে!');
    } catch (err) {
      showToast('error', err.response?.data?.message || 'প্রোফাইল আপডেট করতে ব্যর্থ হয়েছে।');
    } finally {
      setSavingProfile(false);
    }
  };

  // ─── Change password ──────────────────────────────────────────────────────
  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      showToast('error', 'সকল পাসওয়ার্ড ফিল্ড পূরণ করুন।');
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast('error', 'নতুন পাসওয়ার্ড মিলছে না।');
      return;
    }
    if (newPassword.length < 8) {
      showToast('error', 'নতুন পাসওয়ার্ড কমপক্ষে ৮ অক্ষর হতে হবে।');
      return;
    }
    setSavingPassword(true);
    try {
      await api.patch('/auth/change-password', {
        currentPassword,
        newPassword,
      });
      showToast('success', 'পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      showToast('error', err.response?.data?.message || 'পাসওয়ার্ড পরিবর্তন করতে ব্যর্থ হয়েছে।');
    } finally {
      setSavingPassword(false);
    }
  };

  const userRole = (user?.role || '').toLowerCase();
  const displayAvatar = avatarUrl || `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(user?.name || 'User')}&backgroundColor=6366f1`;

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 space-y-6">

      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg text-sm font-semibold transition-all ${
          toast.type === 'success'
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            : 'bg-red-50 text-red-600 border border-red-200'
        }`}>
          {toast.type === 'success'
            ? <CheckCircle size={16} className="flex-shrink-0" />
            : <AlertCircle size={16} className="flex-shrink-0" />}
          {toast.message}
          <button onClick={() => setToast(null)} className="ml-2 opacity-60 hover:opacity-100">
            <X size={14} />
          </button>
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your personal info, security settings, and notifications.</p>
      </div>

      {/* Profile Avatar Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row items-center gap-6">
        {/* Avatar with upload overlay */}
        <div className="relative group cursor-pointer" onClick={handleAvatarClick}>
          <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-purple-100 shadow-md">
            {uploadingAvatar ? (
              <div className="h-full w-full flex items-center justify-center bg-purple-50">
                <Loader2 size={28} className="text-purple-500 animate-spin" />
              </div>
            ) : (
              <img
                src={displayAvatar}
                alt="Profile Avatar"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(user?.name || 'User')}&backgroundColor=6366f1`;
                }}
              />
            )}
          </div>
          {!uploadingAvatar && (
            <div className="absolute inset-0 bg-black/40 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={18} className="text-white" />
              <span className="text-white text-[10px] font-bold mt-1">Upload</span>
            </div>
          )}
        </div>

        {/* User info */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-gray-900">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
          <span className="inline-flex items-center gap-1 mt-2 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
            <Shield size={11} /> {user?.role || 'User'}
          </span>
        </div>

        {/* Save button */}
        <div className="sm:ml-auto">
          <button
            onClick={activeTab === 'general' ? handleSaveProfile : handleChangePassword}
            disabled={savingProfile || savingPassword || uploadingAvatar}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all bg-[#1a0a4b] text-white hover:bg-[#2d1b6b] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {(savingProfile || savingPassword) ? (
              <Loader2 size={15} className="animate-spin" />
            ) : (
              <Save size={15} />
            )}
            {savingProfile || savingPassword ? 'Saving...' : 'Save Changes'}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              {/* Email — read only */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={user?.email || ''}
                    readOnly
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-100 bg-gray-50 rounded-xl text-gray-400 cursor-not-allowed"
                  />
                </div>
                <p className="text-xs text-gray-400">Email cannot be changed.</p>
              </div>

              {/* Role — read only */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</label>
                <div className="relative">
                  <Shield size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={user?.role || ''}
                    readOnly
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-100 bg-gray-50 rounded-xl text-gray-400 cursor-not-allowed capitalize"
                  />
                </div>
              </div>

              {/* Status — read only */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Account Status</label>
                <div className="relative flex items-center">
                  <span className={`w-2 h-2 rounded-full absolute left-3 ${user?.status === 'active' ? 'bg-emerald-500' : 'bg-yellow-400'}`} />
                  <input
                    type="text"
                    value={user?.status || ''}
                    readOnly
                    className="w-full pl-7 pr-4 py-2.5 text-sm border border-gray-100 bg-gray-50 rounded-xl text-gray-400 cursor-not-allowed capitalize"
                  />
                </div>
              </div>
            </div>

            {/* Save button at bottom of form */}
            <button
              onClick={handleSaveProfile}
              disabled={savingProfile || uploadingAvatar}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all bg-[#1a0a4b] text-white hover:bg-[#2d1b6b] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {savingProfile ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
              {savingProfile ? 'Saving...' : 'Save Profile'}
            </button>
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
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    className="w-full pl-9 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                  />
                  <button type="button" onClick={() => setShowCurrentPass(!showCurrentPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
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
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password (min 8 chars)"
                    className="w-full pl-9 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                  />
                  <button type="button" onClick={() => setShowNewPass(!showNewPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showNewPass ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Confirm New Password</label>
                <div className="relative">
                  <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showConfirmPass ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter new password"
                    className={`w-full pl-9 pr-10 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      confirmPassword && newPassword !== confirmPassword
                        ? 'border-red-300 focus:ring-red-200'
                        : 'border-gray-200 focus:ring-purple-500/30 focus:border-purple-400'
                    }`}
                  />
                  <button type="button" onClick={() => setShowConfirmPass(!showConfirmPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showConfirmPass ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                {confirmPassword && newPassword !== confirmPassword && (
                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle size={11} /> পাসওয়ার্ড মিলছে না
                  </p>
                )}
              </div>

              <button
                onClick={handleChangePassword}
                disabled={savingPassword}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#1a0a4b] text-white text-sm font-bold rounded-xl hover:bg-[#2d1b6b] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {savingPassword ? <Loader2 size={15} className="animate-spin" /> : <Shield size={15} />}
                {savingPassword ? 'Updating...' : 'Update Password'}
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
                    onClick={() => setNotifications((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
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
              onClick={() => showToast('success', 'Notification preferences saved!')}
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
