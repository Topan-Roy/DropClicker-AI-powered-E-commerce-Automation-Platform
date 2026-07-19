'use client';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '@/redux/slices/productSlice';
import api from '@/services/api';
import { X, Loader2, ImagePlus, Trash2 } from 'lucide-react';

// ── imgBB upload helper ──────────────────────────────────────────────────────
const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY || 'YOUR_IMGBB_API_KEY';

async function uploadToImgBB(file) {
    const form = new FormData();
    form.append('image', file);
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: form,
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error?.message || 'Upload failed');
    return data.data.url;
}

// ── Empty form state ─────────────────────────────────────────────────────────
const EMPTY_FORM = {
    title: '',
    description: '',
    category: '',
    sku: '',
    inventoryQuantity: '',
    costPerItem: '',
    price: '',
    status: 'DRAFT',
    images: [],
};

// ── Component ────────────────────────────────────────────────────────────────
export default function AddProductModal({ isOpen, onClose }) {
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imgUploading, setImgUploading] = useState(false);
    const [formData, setFormData] = useState(EMPTY_FORM);

    // Fetch categories when modal opens
    useEffect(() => {
        if (isOpen) {
            api.get('/categories')
                .then(res => setCategories(res.data?.data || []))
                .catch(err => console.error('Failed to fetch categories:', err));
        }
    }, [isOpen]);

    if (!isOpen) return null;

    // ── Handlers ────────────────────────────────────────────────────────────
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setImgUploading(true);
        try {
            const url = await uploadToImgBB(file);
            setFormData(prev => ({ ...prev, images: [...prev.images, url] }));
        } catch (err) {
            alert('Image upload failed: ' + err.message);
        } finally {
            setImgUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    const handleRemoveImage = (idx) => {
        setFormData(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== idx) }));
    };

    const resetForm = () => setFormData(EMPTY_FORM);

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title.trim()) { alert('Product Title is required'); return; }
        if (!formData.price || parseFloat(formData.price) <= 0) {
            alert('Retail Price must be greater than 0');
            return;
        }

        setLoading(true);
        try {
            const payload = {
                title: formData.title.trim(),
                description: formData.description.trim() || undefined,
                category: formData.category || undefined,
                sku: formData.sku.trim() || undefined,
                inventoryQuantity: parseInt(formData.inventoryQuantity) || 0,
                costPerItem: parseFloat(formData.costPerItem) || 0,
                price: parseFloat(formData.price),
                status: formData.status,
                images: formData.images.length > 0 ? formData.images : undefined,
            };
            await dispatch(createProduct(payload)).unwrap();
            resetForm();
            onClose();
        } catch (err) {
            alert(typeof err === 'string' ? err : 'Failed to create product');
        } finally {
            setLoading(false);
        }
    };

    // ── Derived state ────────────────────────────────────────────────────────
    const isSubmitting = loading || imgUploading;
    const inputCls = [
        'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900',
        'focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400',
        'placeholder:text-gray-400',
        'disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed',
        'transition-colors',
    ].join(' ');

    // ── Render ───────────────────────────────────────────────────────────────
    return (
        <div className="fixed inset-0 bg-black/40 z-[100] flex justify-end">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
            >
                {/* ── Header ── */}
                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 sticky top-0 bg-white z-10">
                    <h2 className="text-lg font-bold text-gray-900">Add Product</h2>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>

                {/* ── Scrollable body ── */}
                <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">

                    {/* Images */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                            Product Images
                            <span className="ml-1 text-xs font-normal text-gray-400">(uploaded via imgBB)</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {/* Uploaded previews */}
                            {formData.images.map((url, idx) => (
                                <div key={idx} className="relative w-20 h-20 group">
                                    <img
                                        src={url}
                                        alt={`product-img-${idx}`}
                                        className="w-20 h-20 rounded-xl border border-gray-200 object-cover bg-gray-50"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(idx)}
                                        className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shadow"
                                    >
                                        <Trash2 size={11} />
                                    </button>
                                </div>
                            ))}

                            {/* Upload trigger */}
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                disabled={imgUploading}
                                className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-1 hover:border-blue-400 hover:bg-blue-50/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {imgUploading
                                    ? <Loader2 size={20} className="text-blue-400 animate-spin" />
                                    : (
                                        <>
                                            <ImagePlus size={20} className="text-gray-400" />
                                            <span className="text-[10px] text-gray-400 font-medium">Upload</span>
                                        </>
                                    )
                                }
                            </button>

                            {/* Hidden file input */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>

                    {/* Product Title */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                            Product Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            placeholder="Enter product title"
                            className={inputCls}
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            rows={3}
                            placeholder="Product description"
                            className={inputCls}
                        />
                    </div>

                    {/* Category + Status */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={inputCls + ' bg-white cursor-pointer'}
                            >
                                <option value="">Select category</option>
                                {categories.map(cat => (
                                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={inputCls + ' bg-white cursor-pointer'}
                            >
                                <option value="ACTIVE">Active</option>
                                <option value="DRAFT">Draft</option>
                                <option value="ARCHIVED">Archived</option>
                            </select>
                        </div>
                    </div>

                    {/* SKU + Stock */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Product SKU</label>
                            <input
                                type="text"
                                name="sku"
                                value={formData.sku}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                placeholder="SKU-001"
                                className={inputCls}
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Stock Quantity</label>
                            <input
                                type="number"
                                name="inventoryQuantity"
                                value={formData.inventoryQuantity}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                placeholder="0"
                                min="0"
                                className={inputCls}
                            />
                        </div>
                    </div>

                    {/* Cost + Price */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Cost Price (£)</label>
                            <input
                                type="number"
                                name="costPerItem"
                                value={formData.costPerItem}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                placeholder="0.00"
                                step="0.01"
                                min="0"
                                className={inputCls}
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                                Retail Price (£) <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                required
                                placeholder="0.00"
                                step="0.01"
                                min="0.01"
                                className={inputCls}
                            />
                        </div>
                    </div>
                </div>

                {/* ── Footer ── */}
                <div className="p-6 sticky bottom-0 bg-white border-t border-gray-100 flex gap-3">
                    <button
                        type="button"
                        onClick={handleClose}
                        disabled={isSubmitting}
                        className="flex-1 border border-gray-200 rounded-2xl py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-blue-600 rounded-2xl py-3 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading && <Loader2 size={15} className="animate-spin" />}
                        {loading ? 'Saving...' : 'Add Product'}
                    </button>
                </div>
            </form>
        </div>
    );
}
