import { resourcesData, contactData } from '@/data/userResourcesData';

const delay = ms => new Promise(r => setTimeout(r, ms));

export async function fetchResources() {
  await delay(300);
  return resourcesData;
  // TODO: return fetch('/api/user/resources').then(r => r.json())
}

export async function fetchContactInfo() {
  await delay(200);
  return contactData;
  // TODO: return fetch('/api/contact-info').then(r => r.json())
}

export async function submitContactForm(formData) {
  await delay(1200); // Simulate network latency
  console.log('Form Submitted:', formData);
  return { success: true };
  // TODO: return fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) }).then(r => r.json())
}