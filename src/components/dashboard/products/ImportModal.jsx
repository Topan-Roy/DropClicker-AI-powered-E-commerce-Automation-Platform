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
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '@/redux/slices/productSlice';
import { X, Info, Upload, Download, Loader2 } from 'lucide-react';

export default function ImportModal({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('New Import');
    const [importing, setImporting] = useState(false);
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();

    if (!isOpen) return null;

    const handleFileUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (event) => {
            const text = event.target.result;
            await processCSV(text);
            if (fileInputRef.current) fileInputRef.current.value = '';
        };
        reader.readAsText(file);
    };

    const processCSV = async (csvText) => {
        setImporting(true);
        try {
            const lines = csvText.split(/\r?\n/).filter(line => line.trim() !== '');
            if (lines.length < 2) {
                alert("CSV must contain a header row and at least one data row.");
                return;
            }
            const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/\"/g, ''));
            
            let successCount = 0;
            let failCount = 0;

            for (let i = 1; i < lines.length; i++) {
                // Regex to handle comma separated values, even inside quotes
                const rowRegex = /(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^,]*))/g;
                const values = [];
                let match;
                while ((match = rowRegex.exec(lines[i])) !== null) {
                    if (match[0] === "" && values.length > 0 && lines[i][rowRegex.lastIndex-1] !== ',') break;
                    let val = match[1] !== undefined ? match[1].replace(/\"\"/g, '"') : match[2];
                    if (val !== undefined && val !== null) {
                        values.push(val.trim());
                    }
                    if (match.index === rowRegex.lastIndex) rowRegex.lastIndex++;
                }

                // Helper to safely get value by possible header names
                const getVal = (possibleKeys) => {
                    for (let key of possibleKeys) {
                        const idx = headers.findIndex(h => h === key || h.includes(key));
                        if (idx !== -1 && values[idx]) return values[idx];
                    }
                    return '';
                };

                const title = getVal(['title', 'name', 'handle']);
                const sku = getVal(['sku']);
                const cost = parseFloat(getVal(['cost price', 'cost'])) || 0;
                const price = parseFloat(getVal(['retail price', 'price', 'retail'])) || 0;
                const stock = parseInt(getVal(['stock', 'quantity', 'inventory'])) || 0;
                
                if (!title || price <= 0) {
                    failCount++;
                    continue;
                }

                const payload = {
                    title,
                    sku: sku || undefined,
                    costPerItem: cost,
                    price: price,
                    inventoryQuantity: stock,
                    status: 'ACTIVE'
                };

                try {
                    await dispatch(createProduct(payload)).unwrap();
                    successCount++;
                } catch (e) {
                    failCount++;
                }
            }
            alert(`Import complete! Successfully imported: ${successCount}. Failed: ${failCount}`);
            onClose();
        } catch (err) {
            alert("Error processing CSV: " + err.message);
        } finally {
            setImporting(false);
        }
    };

    const handleDownloadTemplate = () => {
        const headers = ["Title", "SKU", "Status", "Stock", "Cost Price", "Retail Price", "Category"];
        const exampleRow = ["Sample Product", "SKU-123", "ACTIVE", "10", "15.00", "49.99", "General"];
        const csvString = [headers.join(","), exampleRow.map(v => `"${v}"`).join(",")].join("\n");
        const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "product_import_template.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-[420px] p-6 relative animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Bulk Import Products</h2>
                    <button onClick={onClose} disabled={importing} className="text-gray-400 hover:text-gray-600 disabled:opacity-50"><X size={20} /></button>
                </div>

                <div className="bg-gray-100 rounded-xl p-1 flex gap-1 mb-6">
                    {['New Import', 'History'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => !importing && setActiveTab(tab)}
                            disabled={importing}
                            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'} disabled:opacity-50`}
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
                                <button onClick={handleDownloadTemplate} disabled={importing} className="text-xs font-bold text-green-700 underline flex items-center gap-1 hover:text-green-900 transition-colors disabled:opacity-50">
                                    <Download size={12} /> Download Template
                                </button>
                            </div>
                        </div>

                        <label
                            className={`border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center gap-3 transition-colors group ${importing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50'}`}
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".csv"
                                className="hidden"
                                onChange={handleFileUpload}
                                disabled={importing}
                            />
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-blue-500 transition-colors">
                                {importing ? <Loader2 size={28} className="animate-spin" /> : <Upload size={28} />}
                            </div>
                            <p className="text-sm text-gray-500 font-medium">
                                {importing ? "Importing products..." : (
                                    <>Drop CSV here or <span className="text-blue-600 underline">click to browse</span></>
                                )}
                            </p>
                        </label>
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