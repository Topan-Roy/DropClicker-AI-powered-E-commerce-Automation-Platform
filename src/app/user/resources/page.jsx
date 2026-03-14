'use client'
import { useState, useEffect } from 'react';
import { fetchResources, fetchContactInfo, submitContactForm } from '@/services/userResourcesService';
import ResourceCard from '@/components/user-dashboard/user-resources/ResourceCard';
import NeedMoreHelpBanner from '@/components/user-dashboard/user-resources/NeedMoreHelpBanner';
import ContactSection from '@/components/user-dashboard/user-resources/ContactSection';

export default function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const [res, contact] = await Promise.all([
          fetchResources(), 
          fetchContactInfo()
        ]);
        setResources(res);
        setContactInfo(contact);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleContactClick = () => {
    setShowContact(true);
    // Use timeout to ensure DOM is rendered before scrolling
    setTimeout(() => {
      const section = document.getElementById('contact-section');
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* SECTION 1: Resource Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {resources.map(r => (
          <ResourceCard key={r.id} resource={r} />
        ))}
      </div>

      {/* SECTION 2: Banner */}
      <NeedMoreHelpBanner onContactClick={handleContactClick} />

      {/* SECTION 3: Contact Form (Revealed on click) */}
      <div 
        id="contact-section" 
        className={`transition-all duration-700 ease-in-out ${
          showContact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none absolute'
        }`}
      >
        {showContact && (
          <ContactSection 
            contactInfo={contactInfo} 
            onSubmit={submitContactForm} 
          />
        )}
      </div>
    </div>
  );
}