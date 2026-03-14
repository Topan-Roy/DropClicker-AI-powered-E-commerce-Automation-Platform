// TODO: replace all with real API responses when backend is ready
export const affiliateStatsData = [
  {
    id: 1,
    label: 'Total Earnings',
    value: '£85,420',
    icon: 'DollarSign',
    color: 'blue',
    trend: null,
  },
  {
    id: 2,
    label: 'Pending Payout',
    value: '£5,420',
    icon: 'Clock',
    color: 'yellow',
    trend: '+12',
  },
  {
    id: 3,
    label: 'Total Referrals',
    value: '85,420',
    icon: 'Users2',
    color: 'green',
    trend: '+12',
  },
];

export const referralLinkData = {
  link: 'https://preview--dropclicker.base44.app/?ref=shuvo634',
  // TODO: generate dynamically from GET /api/user/affiliate/link
};

export const recentReferralsData = []; 
// TODO: fetch from GET /api/user/affiliate/referrals