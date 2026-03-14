'use client';
import { Sparkles } from 'lucide-react';
import FromURLForm from './FromURLForm';
import ManualInputForm from './ManualInputForm';
import { generationTypes, visualStyles } from '@/data/magicStudioData';

export default function InputPanel({ 
  activeTab, onTabChange, urlForm, onUrlFormChange, 
  manualForm, onManualFormChange, onImageUpload, onGenerate, generating 
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
        <Sparkles size={18} className="text-blue-500" />
        <h2 className="text-lg font-bold text-gray-900">Input Details</h2>
      </div>

      {/* Tab Switcher */}
      <div className="bg-gray-100 p-1 rounded-xl flex gap-1 mb-6">
        <button
          onClick={() => onTabChange('url')}
          className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'url' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
          From URL
        </button>
        <button
          onClick={() => onTabChange('manual')}
          className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'manual' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Manual Input
        </button>
      </div>

      {activeTab === 'url' ? (
        <FromURLForm 
          form={urlForm} onChange={onUrlFormChange} 
          generationTypes={generationTypes} visualStyles={visualStyles} 
          onGenerate={onGenerate} generating={generating} 
        />
      ) : (
        <ManualInputForm 
          form={manualForm} onChange={onManualFormChange} onImageUpload={onImageUpload}
          generationTypes={generationTypes} visualStyles={visualStyles} 
          onGenerate={onGenerate} generating={generating} 
        />
      )}
    </div>
  );
}