'use client';
import { useState } from 'react';
import { generateBlogPost } from '@/services/engineeringService';
import BlogSettingsPanel from '@/components/user-dashboard/user-engineering/BlogSettingsPanel';
import BlogPreviewPanel from '@/components/user-dashboard/user-engineering/BlogPreviewPanel';

export default function EngineeringPage() {
  const [form, setForm] = useState({
    websiteUrl: '',
    targetKeyword: '',
    blogTitle: '',
    tone: 'Learn more',
    length: 'Learn more',
  });
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const updateForm = (field, val) => {
    setForm(f => ({ ...f, [field]: val }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: null }));
  };

  const validate = () => {
    const errs = {};
    if (!form.targetKeyword.trim()) errs.targetKeyword = 'Target keyword is required';
    return errs;
  };

  const handleGenerate = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    
    setGenerating(true);
    setResult(null);
    try {
      const res = await generateBlogPost(form);
      setResult(res);
    } finally {
      setGenerating(false);
    }
  };

  const isGenerateDisabled = !form.targetKeyword.trim() || generating;

  return (
    <div className="max-w-[1200px] mx-auto p-4 sm:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Blog Generator</h1>
        <p className="text-sm text-gray-500 mt-1">Create high-quality, SEO-ready blog posts in seconds.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 items-start">
        <BlogSettingsPanel
          form={form}
          onChange={updateForm}
          onGenerate={handleGenerate}
          generating={generating}
          errors={errors}
          disabled={isGenerateDisabled}
        />
        <BlogPreviewPanel
          generating={generating}
          result={result}
        />
      </div>
    </div>
  );
}