import { useState, useEffect } from 'react'
import axios from '../../../../helpers/axiosForAPI'
import TopDonations from '../../../../components/Organization/TopDonations'
import DonationAnalysis from './DonationAnalysis'
import SocialsSplit from './SocialsSplit'

const DashboardStats = ({ influencers, donations, ngoData, campaigns }) => {
  return (
    <div
      style={{
        height: 'calc(100vh - 146px)',
      }}
    >
      <div
        className="grid grid-cols-7 grid-rows-2 gap-8 pt-8 container mx-auto"
        style={{ maxHeight: '80vh' }}
      >
        <DonationAnalysis
          donationData={{
            donations,
          }}
          className="col-start-1 col-span-5 h-full pb-10"
        />
        <TopDonations
          className="row-span-2 col-start-6 col-span-2"
          influencers={influencers}
          donations={donations}
          campaigns={campaigns}
        />
        <SocialsSplit
          className="row-start-2 col-span-3 pb-10"
          donations={donations}
        />
      </div>
    </div>
  )
}

export default DashboardStats
