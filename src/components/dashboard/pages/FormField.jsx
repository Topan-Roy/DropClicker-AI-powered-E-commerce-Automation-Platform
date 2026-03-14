'use client'

export default function FormField({ label, children }) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-600 mb-1.5 font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}