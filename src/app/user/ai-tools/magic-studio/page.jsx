'use client';
import { useState } from 'react';
import InputPanel from '@/components/user-dashboard/user-magic-studio/InputPanel';
import PreviewPanel from '@/components/user-dashboard/user-magic-studio/PreviewPanel';
import { generateFromURL, generateFromManual } from '@/services/magicStudioService';

export default function MagicStudioPage() {
  const [activeTab, setActiveTab] = useState('url');
  
  const [urlForm, setUrlForm] = useState({
    url: '',
    generationType: 'Announcement title',
    visualStyle: 'Learn more',
  });

  const [manualForm, setManualForm] = useState({
    productImage: null,
    productImagePreview: null,
    productTitle: '',
    description: '',
    generationType: 'Announcement title',
    visualStyle: 'Learn more',
  });

  const [generating, setGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState(null);

  const handleGenerate = async () => {
    setGenerating(true);
    setGeneratedResult(null);
    try {
      let result;
      if (activeTab === 'url') {
        result = await generateFromURL(urlForm);
      } else {
        result = await generateFromManual(manualForm);
      }
      setGeneratedResult(result);
    } catch (error) {
      console.error("Generation failed", error);
    } finally {
      setGenerating(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setManualForm(f => ({
        ...f,
        productImage: file,
        productImagePreview: ev.target.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-[1140px] mx-auto">
        <h1 className="text-2xl font-black text-gray-900 mb-8">Magic Studio</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 items-start">
          <InputPanel
            activeTab={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
              setGeneratedResult(null);
            }}
            urlForm={urlForm}
            onUrlFormChange={(field, val) => setUrlForm(f => ({ ...f, [field]: val }))}
            manualForm={manualForm}
            onManualFormChange={(field, val) => setManualForm(f => ({ ...f, [field]: val }))}
            onImageUpload={handleImageUpload}
            onGenerate={handleGenerate}
            generating={generating}
          />
          
          <PreviewPanel
            generating={generating}
            result={generatedResult}
            activeTab={activeTab}
          />
        </div>
      </div>
    </div>
  );
}