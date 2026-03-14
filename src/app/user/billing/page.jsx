'use client'
import { useState, useEffect } from 'react';
import { fetchBillingData } from '@/services/userBillingService';
import AICreditsCard from '@/components/user-dashboard/user-billing/AICreditsCard';
import PricingPlans from '@/components/user-dashboard/user-billing/PricingPlans';
import BillingHistoryCard from '@/components/user-dashboard/user-billing/BillingHistoryCard';
import PaymentMethodCard from '@/components/user-dashboard/user-billing/PaymentMethodCard';
import PayoutSettingsCard from '@/components/user-dashboard/user-billing/PayoutSettingsCard';
import CompletePaymentModal from '@/components/user-dashboard/user-billing/CompletePaymentModal';
import PlanUsageCard from '@/components/user-dashboard/user-billing/PlanUsageCard';

export default function UserBillingPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchBillingData().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  const handleOpenPayment = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  if (loading) return <div className="p-10 animate-pulse text-blue-600 font-bold">Loading Billing Dashboard...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 bg-gray-50/30 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanUsageCard planUsage={data.usage} />
        <AICreditsCard 
          packages={data.aiPackages} 
          onBuy={() => { setSelectedPlan({ name: 'AI Credits', price: 8 }); setIsModalOpen(true); }} 
        />
      </div>

      <PricingPlans plans={data.plans} onGetStarted={handleOpenPayment} />
      
      <BillingHistoryCard history={data.history} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PaymentMethodCard method={data.payment} />
        <PayoutSettingsCard settings={data.payout} />
      </div>

      <CompletePaymentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        plan={selectedPlan} 
      />
    </div>
  );
}