'use client';
import { useState, useMemo, useEffect, useRef } from 'react';
import { Upload, Download, RefreshCw, Plus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/slices/productSlice';

import Pagination from '@/components/dashboard/products/Pagination';
import ProductStatCard from '@/components/dashboard/products/ProductStatCard';
import ProductToolbar from '@/components/dashboard/products/ProductToolbar';
import FilterSidebar from '@/components/dashboard/products/FilterSidebar';
import SortDropdown from '@/components/dashboard/products/SortDropdown';
import ProductsTable from '@/components/dashboard/products/ProductsTable';
import AddProductModal from '@/components/dashboard/products/AddProductModal';
import ImportModal from '@/components/dashboard/products/ImportModal';

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { items: productsItems, loading: productsLoading } = useSelector((state) => state.products);

  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [sortValue, setSortValue] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [filters, setFilters] = useState({
    supplier: 'All Suppliers',
    status: 'All Status',
    category: 'All Categories',
    stockStatus: 'All Stock',
    priceRange: 'All Prices',
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);

  const filterRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (filterRef.current && !filterRef.current.contains(e.target)) setShowFilter(false);
      if (sortRef.current && !sortRef.current.contains(e.target)) setShowSort(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, filters, sortValue, pageSize]);

  // Format database items into the shape expected by table
  const formattedProducts = useMemo(() => {
    return (productsItems || []).map((p) => {
      const costVal = p.costPerItem !== undefined ? p.costPerItem : (p.cost || 0);
      const priceVal = p.price || 0;
      return {
        id: p._id || p.id,
        name: p.title || p.name || 'Unknown Product',
        sku: p.sku || '—',
        status: p.status || 'DRAFT',
        stock: p.inventoryQuantity !== undefined ? p.inventoryQuantity : (p.stock || 0),
        cost: costVal,
        price: priceVal,
        margin: priceVal > 0 ? Math.round(((priceVal - costVal) / priceVal) * 100) : 0,
        category: p.category?.name || p.category || 'General',
        supplier: p.supplierId?.name || p.supplier || 'ECOMBUILDS',
        image: p.images?.[0] || p.image || 'https://placehold.co/40x40?text=Product',
      };
    });
  }, [productsItems]);

  // Dynamic statistics
  const dynamicStats = useMemo(() => {
    const total = formattedProducts.length;
    const inStock = formattedProducts.filter(p => p.stock > 10).length;
    const lowStock = formattedProducts.filter(p => p.stock > 0 && p.stock <= 10).length;
    const outOfStock = formattedProducts.filter(p => p.stock === 0).length;

    return [
      { id: 1, label: 'Total Product', value: String(total), icon: 'Package', color: 'blue' },
      { id: 2, label: 'In Stock', value: String(inStock), icon: 'PackageCheck', color: 'green' },
      { id: 3, label: 'Low Stock', value: String(lowStock), icon: 'PackageMinus', color: 'orange' },
      { id: 4, label: 'Out of Stock', value: String(outOfStock), icon: 'PackageX', color: 'red' },
    ];
  }, [formattedProducts]);

  const filteredData = useMemo(() => {
    let data = [...formattedProducts];
    if (searchQuery) data = data.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filters.supplier !== 'All Suppliers') data = data.filter(p => p.supplier === filters.supplier);
    if (filters.status !== 'All Status') data = data.filter(p => p.status.toLowerCase() === filters.status.toLowerCase());
    if (filters.category !== 'All Categories') data = data.filter(p => p.category === filters.category);
    if (filters.stockStatus === 'In Stock') data = data.filter(p => p.stock > 10);
    if (filters.stockStatus === 'Low Stock') data = data.filter(p => p.stock > 0 && p.stock <= 10);
    if (filters.stockStatus === 'Out of Stock') data = data.filter(p => p.stock === 0);
    if (filters.priceRange === 'Under £50') data = data.filter(p => p.price < 50);
    if (filters.priceRange === '£50 - £100') data = data.filter(p => p.price >= 50 && p.price <= 100);
    if (filters.priceRange === '£100 - £300') data = data.filter(p => p.price >= 100 && p.price <= 300);
    if (filters.priceRange === 'Over £300') data = data.filter(p => p.price > 300);
    const sorters = {
      price_desc: (a, b) => b.price - a.price,
      price_asc: (a, b) => a.price - b.price,
      name_asc: (a, b) => a.name.localeCompare(b.name),
      name_desc: (a, b) => b.name.localeCompare(a.name),
      stock_desc: (a, b) => b.stock - a.stock,
      stock_asc: (a, b) => a.stock - b.stock,
      newest: (a, b) => b.id - a.id,
      oldest: (a, b) => a.id - b.id,
    };
    data.sort(sorters[sortValue]);
    return data;
  }, [formattedProducts, searchQuery, filters, sortValue]);

  const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));

  // Find current sort label
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'name_asc', label: 'Name: A to Z' },
    { value: 'name_desc', label: 'Name: Z to A' },
    { value: 'stock_desc', label: 'Stock: High to Low' },
    { value: 'stock_asc', label: 'Stock: Low to High' },
  ];
  const sortLabel = sortOptions.find(o => o.value === sortValue)?.label;

  return (
    <div className="p-3 sm:p-6 bg-slate-50/30 min-h-screen space-y-4 sm:space-y-6">

      {/* ── Top Action Row (Responsive) ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1">
        {/* Left: CSV Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowImportModal(true)}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            <Upload size={15} />
            <span className=" xs:inline">Import CSV</span>
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-sm active:scale-95">
            <Download size={15} />
            <span className=" xs:inline">Export CSV</span>
          </button>
        </div>

        {/* Right: Sync + Add */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all shadow-sm active:scale-95">
            <RefreshCw size={15} />
            <span className=" xs:inline">Feed Sync</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold shadow-md shadow-blue-100 transition-all active:scale-95"
          >
            <Plus size={15} />
            <span>Add<span className=" xs:inline"> Product</span></span>
          </button>
        </div>
      </div>

      {/* ── Stat Cards (2 per row on mobile) ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {dynamicStats.map(stat => <ProductStatCard key={stat.id} {...stat} />)}
      </div>

      {/* ── Toolbar + Dropdowns ── */}
      <div className="relative">
        <ProductToolbar
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
          onFilterToggle={() => setShowFilter(!showFilter)}
          onSortToggle={() => setShowSort(!showSort)}
          sortLabel={sortLabel}
        />
        <div ref={filterRef}>
          <FilterSidebar
            isOpen={showFilter}
            filters={filters}
            onFilterChange={(key, val) => setFilters(prev => ({ ...prev, [key]: val }))}
          />
        </div>
        <div ref={sortRef}>
          <SortDropdown
            isOpen={showSort}
            currentSort={sortValue}
            onSortChange={(val) => { setSortValue(val); setShowSort(false); }}
          />
        </div>
      </div>

      {/* ── Table ── */}
      {productsLoading && productsItems.length === 0 ? (
        <div className="p-12 text-center text-gray-400 font-semibold bg-white rounded-2xl shadow-sm border border-gray-100 animate-pulse">
          Loading products...
        </div>
      ) : (
        <ProductsTable data={paginatedData} />
      )}

      {/* ── Pagination ── */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />

      {/* ── Modals ── */}
      <AddProductModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
      <ImportModal
        isOpen={showImportModal}
        onClose={() => setShowImportModal(false)}
      />
    </div>
  );
}

