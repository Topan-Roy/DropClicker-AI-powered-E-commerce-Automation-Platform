'use client';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory,
} from '@/redux/slices/categorySlice';
import {
    Tag, Plus, Pencil, Trash2, ToggleLeft, ToggleRight,
    Loader2, Search, X, Check,
} from 'lucide-react';

// ── Confirmation Modal ────────────────────────────────────────────────────────
function ConfirmModal({ message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
                <p className="text-gray-800 font-semibold text-center mb-6">{message}</p>
                <div className="flex gap-3">
                    <button
                        onClick={onCancel}
                        className="flex-1 border border-gray-200 rounded-xl py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 bg-red-600 rounded-xl py-2.5 text-sm font-bold text-white hover:bg-red-700 transition-colors"
                    >
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

// ── Category Form Modal ───────────────────────────────────────────────────────
function CategoryModal({ isOpen, onClose, editItem }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (editItem) {
            setName(editItem.name || '');
            setDescription(editItem.description || '');
        } else {
            setName('');
            setDescription('');
        }
    }, [editItem, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) { alert('Category name is required'); return; }
        setSaving(true);
        try {
            const payload = { name: name.trim(), description: description.trim() || undefined };
            if (editItem) {
                await dispatch(updateCategory({ id: editItem._id, data: payload })).unwrap();
            } else {
                await dispatch(createCategory(payload)).unwrap();
            }
            onClose();
        } catch (err) {
            alert(typeof err === 'string' ? err : 'Something went wrong');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <h2 className="text-base font-bold text-gray-900">
                        {editItem ? 'Edit Category' : 'Add Category'}
                    </h2>
                    <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={18} className="text-gray-500" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Category Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            disabled={saving}
                            placeholder="e.g. Electronics"
                            required
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 placeholder:text-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Description <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            disabled={saving}
                            rows={3}
                            placeholder="Short description of this category"
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 placeholder:text-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors"
                        />
                    </div>

                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={saving}
                            className="flex-1 border border-gray-200 rounded-xl py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="flex-1 bg-blue-600 rounded-xl py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 disabled:bg-blue-400 flex items-center justify-center gap-2"
                        >
                            {saving && <Loader2 size={14} className="animate-spin" />}
                            {saving ? 'Saving...' : editItem ? 'Save Changes' : 'Add Category'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function CategoriesPage() {
    const dispatch = useDispatch();
    const { items: categories, loading, error } = useSelector(s => s.categories);

    const [search, setSearch] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null); // category to delete
    const [togglingId, setTogglingId] = useState(null);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // Filtered list
    const filtered = categories.filter(c =>
        c.name?.toLowerCase().includes(search.toLowerCase())
    );

    const handleOpenAdd = () => { setEditItem(null); setModalOpen(true); };
    const handleOpenEdit = (cat) => { setEditItem(cat); setModalOpen(true); };

    const handleDelete = async () => {
        if (!confirmDelete) return;
        try {
            await dispatch(deleteCategory(confirmDelete._id)).unwrap();
        } catch (err) {
            alert(typeof err === 'string' ? err : 'Failed to delete');
        } finally {
            setConfirmDelete(null);
        }
    };

    const handleToggleActive = async (cat) => {
        setTogglingId(cat._id);
        try {
            await dispatch(updateCategory({ id: cat._id, data: { isActive: !cat.isActive } })).unwrap();
        } catch (err) {
            alert(typeof err === 'string' ? err : 'Failed to update');
        } finally {
            setTogglingId(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50/60">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

                {/* ── Page Header ── */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-extrabold text-gray-900">Categories</h1>
                        <p className="text-sm text-gray-500 mt-0.5">
                            {categories.length} total category{categories.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                    <button
                        onClick={handleOpenAdd}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-100 transition-all"
                    >
                        <Plus size={17} />
                        Add Category
                    </button>
                </div>

                {/* ── Search Bar ── */}
                <div className="relative mb-6">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search categories..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 shadow-sm placeholder:text-gray-400"
                    />
                    {search && (
                        <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                            <X size={15} className="text-gray-400 hover:text-gray-600" />
                        </button>
                    )}
                </div>

                {/* ── Content ── */}
                {loading ? (
                    <div className="flex items-center justify-center h-48">
                        <Loader2 size={28} className="animate-spin text-blue-500" />
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">{error}</div>
                ) : filtered.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center py-20 gap-3">
                        <Tag size={36} className="text-gray-300" />
                        <p className="text-gray-400 font-medium">
                            {search ? 'No categories match your search' : 'No categories yet. Click "Add Category" to get started.'}
                        </p>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Table header */}
                        <div className="grid grid-cols-[1fr_2fr_80px_80px] gap-4 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 bg-gray-50/50">
                            <span>Name</span>
                            <span>Description</span>
                            <span className="text-center">Status</span>
                            <span className="text-center">Actions</span>
                        </div>

                        {/* Rows */}
                        <ul>
                            {filtered.map((cat, idx) => (
                                <li
                                    key={cat._id}
                                    className={`grid grid-cols-[1fr_2fr_80px_80px] gap-4 px-5 py-4 items-center transition-colors hover:bg-gray-50/60 ${idx !== 0 ? 'border-t border-gray-100' : ''}`}
                                >
                                    {/* Name */}
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                            <Tag size={15} className="text-blue-500" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-bold text-gray-900 truncate">{cat.name}</p>
                                            <p className="text-[11px] text-gray-400 truncate">/{cat.slug}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-gray-500 truncate">
                                        {cat.description || <span className="text-gray-300 italic">No description</span>}
                                    </p>

                                    {/* Status toggle */}
                                    <div className="flex justify-center">
                                        {togglingId === cat._id ? (
                                            <Loader2 size={18} className="animate-spin text-blue-400" />
                                        ) : (
                                            <button
                                                onClick={() => handleToggleActive(cat)}
                                                title={cat.isActive ? 'Active – click to deactivate' : 'Inactive – click to activate'}
                                            >
                                                {cat.isActive
                                                    ? <ToggleRight size={26} className="text-green-500" />
                                                    : <ToggleLeft size={26} className="text-gray-300" />
                                                }
                                            </button>
                                        )}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center justify-center gap-1">
                                        <button
                                            onClick={() => handleOpenEdit(cat)}
                                            className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                            title="Edit"
                                        >
                                            <Pencil size={15} />
                                        </button>
                                        <button
                                            onClick={() => setConfirmDelete(cat)}
                                            className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 size={15} />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* ── Modals ── */}
            <CategoryModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                editItem={editItem}
            />

            {confirmDelete && (
                <ConfirmModal
                    message={`Are you sure you want to delete "${confirmDelete.name}"?`}
                    onConfirm={handleDelete}
                    onCancel={() => setConfirmDelete(null)}
                />
            )}
        </div>
    );
}
