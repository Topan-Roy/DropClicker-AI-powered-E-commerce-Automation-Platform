"use client";

import React from 'react';
import { Search, MoreVertical, Eye, Download, Users, ShoppingBag, Store, ChevronDown } from 'lucide-react';

const MyStoresList = () => {
  const stats = [
    { label: "Trial Stores", value: "5,420", icon: <Store className="text-green-600" size={20} />, iconBg: "bg-green-100" },
    { label: "Total Orders", value: "5,420", icon: <ShoppingBag className="text-blue-600" size={20} />, iconBg: "bg-blue-100" },
    { label: "Total Users", value: "85,420", icon: <Users className="text-purple-600" size={20} />, iconBg: "bg-purple-100" },
  ];

  const stores = [
    { id: 1, name: "EcoHome Essentials", niche: "Home & Living", date: "3/15/2025", status: "completed" },
    { id: 2, name: "FitGlow Active", niche: "Fitness", date: "3/14/2025", status: "completed" },
  ];

  return (
    <div className="w-full mt-8">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm">
            <div className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">My Stores</h2>
          <p className="text-sm text-gray-500">Manage your AI-generated stores</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50">
            All Status
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Stores Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stores.map((store) => (
          <div key={store.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:border-blue-200 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{store.name}</h3>
                <p className="text-sm text-gray-500">{store.niche}</p>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-400">
                <MoreVertical size={20} />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-500 font-medium">
                {store.status} • {store.date}
              </span>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                <Eye size={16} />
                Preview
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg transition-all">
                <Download size={16} />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyStoresList;
