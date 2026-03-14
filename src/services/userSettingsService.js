import { initialProfileData, initialNotificationData, initialIntegrationsData, initialSecurityData } from '@/data/userSettingsData';

const delay = ms => new Promise(r => setTimeout(r, ms));

export async function fetchUserProfile() {
  await delay(300); return initialProfileData;
}

export async function fetchNotificationSettings() {
  await delay(200); return initialNotificationData;
}

export async function fetchIntegrationsSettings() {
  await delay(200); return initialIntegrationsData;
}

export async function fetchSecuritySettings() {
  await delay(200); return initialSecurityData;
}

export async function saveProfile(data) {
  await delay(600); return { success: true };
}

export async function saveNotifications(data) {
  await delay(400); return { success: true };
}

export async function connectShopify(domain) {
  await delay(800); return { success: true };
}

export async function saveSecurity(data) {
  await delay(400); return { success: true };
}