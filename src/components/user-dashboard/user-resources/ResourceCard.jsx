'use client'
import * as Icons from 'lucide-react';

export default function ResourceCard({ resource }) {
  const IconComponent = Icons[resource.typeIcon] || Icons.BookOpen;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-blue-50 text-blue-500 rounded-lg p-1.5 w-8 h-8 flex items-center justify-center">
            <IconComponent size={18} />
          </div>
          <span className="text-sm text-gray-500 font-medium">{resource.type}</span>
        </div>
        <Icons.ExternalLink size={16} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
      </div>
      
      <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
        {resource.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
        {resource.description}
      </p>
    </div>
  );
}