import { useState, useEffect } from 'react'
import axios from '../../../../helpers/axiosForAPI'
import TopDonations from '../../../../components/Organization/TopDonations'
import { useAuth } from '../../../../contexts/AuthContext'
import { db } from '../../../../firebase'
import DonationAnalysis from './DonationAnalysis'
import SocialsSplit from './SocialsSplit'

const DashboardStats = () => {
  const [{ influencers, donations, ngoData, campaigns }, setData] = useState({
    influencers: [],
    donations: [],
    ngoData: {},
    campaigns: [],
  })
  const { currentUser } = useAuth()

  useEffect(() => {
    ;(async () => {
      // setDonationData(await axios.get('/donations'))

      db.collection('ngo')
        .where('orgUId', '==', currentUser.uid)
        .get()
        .then((querySnapshot) => {
          let organizationDoc
          querySnapshot.forEach((doc) => {
            organizationDoc = { id: doc.id, ...doc.data() }
          })

          // console.log(organizationDoc)
          db.collection('campaign')
            .where('orgUId', '==', organizationDoc.id)
            .get()
            .then((querySnapshot) => {
              const orgCampaigns = []
              querySnapshot.forEach((doc) => {
                orgCampaigns.push({
                  id: doc.id,
                  ...doc.data(),
                })
              })

              // console.log('my campaigns', orgCampaigns)

              db.collection('donation')
                .where(
                  'campaignId',
                  'in',
                  orgCampaigns.map((o) => o.id),
                )
                .get()
                .then((querySnapshot) => {
                  const orgDonations = []
                  querySnapshot.forEach((doc) => {
                    orgDonations.push({
                      id: doc.id,
                      ...doc.data(),
                    })
                  })

                  db.collection('influencer')
                    .get()
                    .then((querySnapshot) => {
                      const influencers = []
                      querySnapshot.forEach((doc) => {
                        influencers.push({
                          ...doc.data(),
                          id: doc.id,
                        })
                      })

                      // console.log('influceners', influencers)

                      setData({
                        influencers,
                        donations: orgDonations,
                        campaigns: orgCampaigns,
                        ngoData: organizationDoc,
                      })
                    })

                  // console.log('my donations', orgDonations)
                })
            })
        })
    })()
  }, [currentUser.uid])
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
