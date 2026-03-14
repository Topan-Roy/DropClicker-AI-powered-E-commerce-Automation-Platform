'use client';
import { useState } from 'react';
import { X, Plus, XCircle, CheckCircle2, Download, AlertCircle } from 'lucide-react';

const syncHistory = [
    {
        id: '69583b85a72f6e8757ce8826',
        supplier: 'COSTWAY',
        status: 'failed',
        date: 'Jan 3, 05:30',
        duration: '1337s',
        rows: 7406,
        matched: 4301,
        updated: 32,
        notFound: 699,
        error: 'Sync stopped by user'
    },
    {
        id: '605846d952f5937c2848ef4b',
        supplier: 'COSTWAY',
        status: 'success',
        date: 'Jan 3, 04:30',
        duration: '301s',
        rows: 7406,
        matched: 6544,
        updated: 0,
        notFound: 862
    },
    {
        id: '605846d952f5937c2848ef4c',
        supplier: 'COSTWAY',
        status: 'success',
        date: 'Jan 3, 03:30',
        duration: '310s',
        rows: 7406,
        matched: 6544,
        updated: 0,
        notFound: 862
    },
];

export default function FeedSyncModal({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('Sync History');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] animate-in fade-in duration-300">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            />

            {/* Drawer Box */}
            <div className="fixed right-0 top-0 h-full w-full max-w-[520px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">

                {/* Header Row */}
                <div className="px-5 py-4 flex items-center justify-between border-b border-gray-100 bg-white shrink-0">
                    <h2 className="text-lg font-bold text-gray-900 leading-tight">Feed Sync Dashboard</h2>
                    <div className="flex items-center gap-2">
                        <button className="bg-[#10B981] hover:bg-green-600 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-all active:scale-95 shadow-sm">
                            <Plus size={12} strokeWidth={3} /> Add Supplier
                        </button>
                        <div className="hidden sm:flex bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> 2 Active
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 ml-1 transition-colors">
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Tab Switcher */}
                <div className="px-5 py-0 border-b border-gray-100 flex bg-gray-50/20 shrink-0">
                    <button
                        onClick={() => setActiveTab('Suppliers')}
                        className={`flex-1 text-center py-3.5 text-sm font-semibold transition-all border-b-2 ${activeTab === 'Suppliers' ? 'bg-white text-gray-900 border-gray-900' : 'bg-gray-50 text-gray-400 border-transparent'}`}
                    >
                        Suppliers
                    </button>
                    <button
                        onClick={() => setActiveTab('Sync History')}
                        className={`flex-1 text-center py-3.5 text-sm font-semibold transition-all border-b-2 ${activeTab === 'Sync History' ? 'bg-white text-gray-900 border-gray-900' : 'bg-gray-50 text-gray-400 border-transparent'}`}
                    >
                        Sync History
                    </button>
                </div>

                {/* Filters Row */}
                <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100 bg-white shrink-0">
                    <select className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 bg-white focus:outline-none focus:border-blue-400">
                        <option>All Suppliers</option>
                    </select>
                    <select className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 bg-white focus:outline-none focus:border-blue-400">
                        <option>All Status</option>
                    </select>
                </div>

                {/* Sync History List */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50/30 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                    {syncHistory.map((sync) => (
                        <div key={sync.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-all">

                            {/* Card Top Row */}
                            <div className="flex items-center justify-between gap-2 overflow-hidden">
                                <div className="flex items-center gap-2 min-w-0">
                                    <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${sync.status === 'failed' ? 'bg-red-100' : 'bg-green-100'}`}>
                                        {sync.status === 'failed' ? <XCircle size={14} className="text-red-500" /> : <CheckCircle2 size={14} className="text-green-500" />}
                                    </div>
                                    <span className="text-sm font-black text-gray-900 uppercase tracking-wide truncate">{sync.supplier}</span>
                                    <div className={`shrink-0 ${sync.status === 'failed' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'} text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${sync.status === 'failed' ? 'bg-red-400' : 'bg-green-500'}`} />
                                        {sync.status}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <div className="hidden xs:block text-right">
                                        <p className="text-[9px] text-gray-400 font-medium leading-none">{sync.date}</p>
                                        <p className="text-[9px] text-gray-300 font-medium mt-1 leading-none">{sync.duration}</p>
                                    </div>
                                    <button className="border border-gray-200 rounded-lg px-2 py-1 text-[9px] font-bold text-gray-600 flex items-center gap-1 hover:bg-gray-50 transition-all">
                                        <Download size={10} strokeWidth={3} /> Reports
                                    </button>
                                </div>
                            </div>

                            {/* Stats Row */}
                            <div className="mt-4 grid grid-cols-4 gap-2">
                                <div className="text-center">
                                    <p className="text-[9px] text-gray-400 font-medium mb-1">Rows</p>
                                    <p className="text-xs font-bold text-gray-900">{sync.rows}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[9px] text-gray-400 font-medium mb-1">Matched</p>
                                    <span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-md inline-block min-w-[32px]">{sync.matched}</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-[9px] text-gray-400 font-medium mb-1">Updated</p>
                                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-md inline-block min-w-[32px]">{sync.updated}</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-[9px] text-gray-400 font-medium mb-1">Not Found</p>
                                    <span className="text-xs font-bold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded-md inline-block min-w-[32px]">{sync.notFound}</span>
                                </div>
                            </div>

                            {/* Error Row */}
                            {sync.status === 'failed' && (
                                <div className="mt-3 bg-red-50/50 rounded-lg px-3 py-2 flex items-center gap-2 border border-red-50">
                                    <AlertCircle size={12} className="text-red-400 shrink-0" />
                                    <p className="text-[11px] text-red-500 font-medium leading-tight">{sync.error}</p>
                                </div>
                            )}

                            {/* ID Row */}
                            <div className="mt-3 text-[9px] text-gray-300 font-mono tracking-tighter">
                                ID: {sync.id}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
