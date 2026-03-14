import { affiliateStatsData, referralLinkData, recentReferralsData } from '@/data/userAffiliateData';

const delay = ms => new Promise(r => setTimeout(r, ms));

export async function fetchAffiliateStats() {
  await delay(300);
  return affiliateStatsData;
  // TODO: return fetch('/api/user/affiliate/stats').then(r => r.json())
}

export async function fetchReferralLink() {
  await delay(200);
  return referralLinkData;
  // TODO: return fetch('/api/user/affiliate/link').then(r => r.json())
}

export async function fetchRecentReferrals() {
  await delay(300);
  return recentReferralsData;
  // TODO: return fetch('/api/user/affiliate/referrals').then(r => r.json())
}