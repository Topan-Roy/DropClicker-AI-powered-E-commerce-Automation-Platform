import * as mock from '@/data/userBillingData';

const delay = ms => new Promise(r => setTimeout(r, ms));

export const fetchBillingData = async () => {
  await delay(600);
  return {
    usage: mock.planUsageData,
    aiPackages: mock.aiCreditsPackages,
    plans: mock.pricingPlans,
    history: mock.billingHistoryData,
    payment: mock.paymentMethodData,
    payout: mock.payoutSettingsData
  };
};