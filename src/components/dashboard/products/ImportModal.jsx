// 'use client';
// import { useState } from 'react';
// import { X, Info, Download, ArrowUpFromLine } from 'lucide-react';

// export default function ImportModal({ isOpen, onClose }) {
//     const [activeTab, setActiveTab] = useState('New Import');

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center p-4">
//             <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200 overflow-hidden">
//                 {/* Header */}
//                 <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
//                     <h2 className="text-lg font-bold text-gray-900">Import Products</h2>
//                     <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                         <X size={20} className="text-gray-500" />
//                     </button>
//                 </div>

//                 {/* Tab Switcher */}
//                 <div className="bg-gray-100 rounded-2xl p-1 flex mx-6 mt-5">
//                     {['New Import', 'History'].map((tab) => (
//                         <button
//                             key={tab}
//                             onClick={() => setActiveTab(tab)}
//                             className={`flex-1 text-center py-2 text-sm rounded-xl transition-all ${activeTab === tab
//                                     ? 'bg-white shadow-sm font-bold text-gray-900'
//                                     : 'text-gray-500 font-medium hover:text-gray-700'
//                                 }`}
//                         >
//                             {tab}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Info Box */}
//                 <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4 mx-6 mt-4">
//                     <div className="flex gap-2.5">
//                         <Info size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
//                         <div className="space-y-2">
//                             <p className="text-xs font-semibold text-blue-900/80 leading-relaxed">
//                                 Required: Handle, Title, SKU, Cost Price, Retail Price, Stock
//                             </p>
//                             <button className="flex items-center gap-1.5 text-green-600 font-bold text-xs hover:underline decoration-2 underline-offset-4">
//                                 <Download size={14} /> Download Template
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Upload Zone */}
//                 <div className="mx-6 mt-4 mb-6">
//                     <label className="border-2 border-dashed border-gray-200 rounded-2xl h-44 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-blue-300 hover:bg-blue-50/20 transition-all group">
//                         <input type="file" accept=".csv" className="hidden" />
//                         <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
//                             <ArrowUpFromLine size={28} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
//                         </div>
//                         <p className="text-sm font-medium text-gray-500">
//                             Drop CSV here or <span className="text-green-600 font-bold">click to browse</span>
//                         </p>
//                     </label>
//                 </div>
//             </div>
//         </div>
//     );
// }


'use client';
import { useState } from 'react';
import { X, Info, Upload, Download } from 'lucide-react';

export default function ImportModal({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('New Import');
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-[420px] p-6 relative animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Bulk Import Products</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
                </div>

                <div className="bg-gray-100 rounded-xl p-1 flex gap-1 mb-6">
                    {['New Import', 'History'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {activeTab === 'New Import' ? (
                    <div className="space-y-6">
                        <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex gap-3">
                            <Info className="text-green-600 shrink-0" size={20} />
                            <div className="space-y-2">
                                <p className="text-xs font-medium text-green-800 leading-relaxed">
                                    Required: Handle, Title, SKU, Cost Price, Retail Price, Stock
                                </p>
                                <button className="text-xs font-bold text-green-700 underline flex items-center gap-1 hover:text-green-900 transition-colors">
                                    <Download size={12} /> Download Template
                                </button>
                            </div>
                        </div>

                        <div
                            className="border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors group"
                        // TODO: wire file upload to bulk import API endpoint
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-blue-500 transition-colors">
                                <Upload size={28} />
                            </div>
                            <p className="text-sm text-gray-500 font-medium">
                                Drop CSV here or <span className="text-blue-600 underline">click to browse</span>
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="h-48 flex items-center justify-center text-gray-400 text-sm italic">
                        No import history found.
                    </div>
                )}
            </div>
        </div>
    );
}