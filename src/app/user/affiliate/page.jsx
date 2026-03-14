'use client'
import { useState, useEffect } from 'react'
import { fetchAffiliateStats, fetchReferralLink, fetchRecentReferrals } from '@/services/userAffiliateService'
import AffiliateStatCard from '@/components/user-dashboard/user-affiliate/AffiliateStatCard'
import ReferralLinkCard from '@/components/user-dashboard/user-affiliate/ReferralLinkCard'
import RecentReferralsCard from '@/components/user-dashboard/user-affiliate/RecentReferralsCard'

export default function AffiliatePage() {
  const [stats, setStats] = useState([])
  const [referralLink, setReferralLink] = useState(null)
  const [referrals, setReferrals] = useState([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  // TODO: replace all state with API hooks when backend ready
  useEffect(() => {
    async function loadData() {
      try {
        const [st, link, refs] = await Promise.all([
          fetchAffiliateStats(),
          fetchReferralLink(),
          fetchRecentReferrals(),
        ]);
        setStats(st);
        setReferralLink(link);
        setReferrals(refs);
      } catch (error) {
        console.error("Failed to load affiliate data", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleCopyLink = async () => {
    if (!referralLink?.link) return;
    try {
      await navigator.clipboard.writeText(referralLink.link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      // TODO: track copy event via POST /api/user/affiliate/track-copy
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px] py-20">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Row 1: 3 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map(stat => (
          <AffiliateStatCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* Row 2: Referral Link */}
      <ReferralLinkCard
        referralLink={referralLink}
        copied={copied}
        onCopy={handleCopyLink}
      />

      {/* Row 3: Recent Referrals */}
      <RecentReferralsCard referrals={referrals} />
    </div>
  )
}