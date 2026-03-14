'use client'

export default function PageSection({ title, children }) {
  return (
    <div className="mt-8">
      <h3 className="text-base font-bold text-gray-900 mb-4 tracking-tight">
        {title}
      </h3>
      {children}
    </div>
  );
}