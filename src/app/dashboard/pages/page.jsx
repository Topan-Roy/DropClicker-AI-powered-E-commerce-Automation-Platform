'use client'

import { useState } from 'react'
import { LayoutTemplate, Monitor } from 'lucide-react'
import { homePageData } from '@/data/pagesData'
import PageSection from '@/components/dashboard/pages/PageSection'
import FormField from '@/components/dashboard/pages/FormField'


export default function PagesPage() {
  // TODO: replace useState initial value with API response data from GET /pages/home
  const [form, setForm] = useState({
    headline: homePageData.heroSection.headline,
    subHeadline: homePageData.heroSection.subHeadline,
    ctaButtonText: homePageData.heroSection.ctaButtonText,
    ctaLink: homePageData.heroSection.ctaLink,
    sectionTitle: homePageData.featuresIntro.sectionTitle,
    sectionDescription: homePageData.featuresIntro.sectionDescription,
  })

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    console.log('Saving form data:', form)
    // TODO: PATCH /pages/home with form data state
  }

  const inputStyles = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all";
  const textareaStyles = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all resize-y";

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 max-w-3xl mx-auto">
        
        {/* Page Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Page Management</h1>
            <p className="text-sm text-gray-400 mt-0.5">Edit content for your landing pages</p>
          </div>
          <div className="bg-purple-50 text-purple-500 border border-purple-200 rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1.5">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <span>CMS</span>
          </div>
        </div>

        {/* Home Page Identity Row */}
        <div className="mt-6 flex items-center gap-3 pb-5 border-b border-gray-100">
          <div className="bg-blue-100 rounded-xl p-2 w-10 h-10 flex items-center justify-center">
            <Monitor className="text-blue-500" size={20} />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-900">Home Page</h2>
            <p className="text-sm text-gray-400">Edit content for your landing pages</p>
          </div>
        </div>

        {/* Hero Section */}
        <PageSection title="Hero Section">
          <FormField label="Headline">
            <input 
              type="text"
              placeholder="Announcement title"
              className={inputStyles}
              value={form.headline}
              onChange={(e) => handleChange('headline', e.target.value)}
            />
          </FormField>

          <FormField label="Sub headline">
            <textarea 
              rows={4}
              placeholder="Announcement message"
              className={textareaStyles}
              value={form.subHeadline}
              onChange={(e) => handleChange('subHeadline', e.target.value)}
            />
          </FormField>

          <div className="grid grid-cols-2 gap-4">
            <FormField label="CTA Button Text">
              <input 
                type="text"
                placeholder="Enter your note here..."
                className={inputStyles}
                value={form.ctaButtonText}
                onChange={(e) => handleChange('ctaButtonText', e.target.value)}
              />
            </FormField>
            <FormField label="CTA Link">
              <input 
                type="text"
                placeholder="Enter your note here..."
                className={inputStyles}
                value={form.ctaLink}
                onChange={(e) => handleChange('ctaLink', e.target.value)}
              />
            </FormField>
          </div>
        </PageSection>

        {/* Features Intro Section */}
        <PageSection title="Features Intro">
          <FormField label="Section Title">
            <input 
              type="text"
              placeholder="Announcement title"
              className={inputStyles}
              value={form.sectionTitle}
              onChange={(e) => handleChange('sectionTitle', e.target.value)}
            />
          </FormField>

          <FormField label="Section Description">
            <textarea 
              rows={5}
              placeholder="Leverage our suite of AI tools..."
              className={textareaStyles}
              value={form.sectionDescription}
              onChange={(e) => handleChange('sectionDescription', e.target.value)}
            />
          </FormField>
        </PageSection>

        {/* Save Button */}
        <div className="flex justify-end mt-8">
          <button 
            onClick={handleSave}
            className="bg-blue-600 text-white rounded-xl px-6 py-2.5 text-sm font-medium hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-100 cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}