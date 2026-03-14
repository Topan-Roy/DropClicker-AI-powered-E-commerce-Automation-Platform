// TODO: Replace with real API responses
export const planUsageData = {
  planName: 'free',
  usages: [
    { label: 'Products', percent: 40 },
    { label: 'Orders', percent: 80 },
    { label: 'AI Credits', percent: 10 },
  ],
};

export const aiCreditsPackages = [
  { id: 1, credits: 200, price: 8 },
  { id: 2, credits: 200, price: 8 },
  { id: 3, credits: 200, price: 8 },
];

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    originalPrice: 35,
    price: 28,
    period: 'month',
    discount: '20% OFF',
    tagline: 'Best for growing businesses.',
    isCurrent: true,
    features: ['1,000 Products Imported', '500 Orders/month', '200 AI Credits/month', 'Shopify Sync', 'Email Support'],
  },
  {
    id: 'growth',
    name: 'Growth',
    originalPrice: 55,
    price: 44,
    period: 'month',
    discount: '20% OFF',
    tagline: 'For scaling operations',
    isCurrent: false,
    isPopular: true,
    features: ['10,000 Products Imported', '2,500 Orders/month', '600 AI Credits/month', 'Shopify Sync', 'Priority Support'],
  },
  {
    id: 'pro',
    name: 'Pro',
    originalPrice: 110,
    price: 88,
    period: 'month',
    discount: '20% OFF',
    tagline: 'Best for enterprises',
    isCurrent: false,
    features: ['Unlimited Products', '10,000 Orders/month', '2,000 AI Credits/month', 'Shopify Sync', 'Priority Support', 'Dedicated Account Manager'],
  },
];

export const billingHistoryData = []; 
export const paymentMethodData = { brand: 'Visa', last4: '7775', expiry: '12/2027' };
export const payoutSettingsData = { bankName: 'Connect Your Bank Account', expiry: '12/2027' };