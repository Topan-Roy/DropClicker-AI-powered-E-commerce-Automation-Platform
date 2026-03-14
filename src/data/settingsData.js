// TODO: replace all with GET /settings API response on mount
export const settingsTabs = ['Billing', 'AI & Credits', 'Sync', 'Notifications', 'Security'];

export const initialSettingsData = {
  billing: {
    platformFee: '',
    stripePayments: true,
  },
  aiCredits: {
    freePlanCredits: 5,
    starterPlanCredits: 50,
    growthPlanCredits: 200,
    proPlanCredits: '',
  },
  sync: {
    syncInterval: '',
    automaticSync: true,
  },
  notifications: {
    emailNotifications: true,
    newUserWelcomeEmail: true,
  },
  security: {
    maintenanceMode: false,
  },
};