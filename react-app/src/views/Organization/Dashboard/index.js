import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DashboardStats from './DashboardStats'
import LiveAnalytics from './Analytics'
import GiftNFTs from './GiftNFTs'
import { db } from '../../../firebase'
import { useAuth } from '../../../contexts/AuthContext'

const Dashboard = () => {
  const { path } = useRouteMatch()

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
    <>
      <div className="container mx-auto">
        <div className="flex">
          {[
            {
              name: 'Donations',
              link: '',
            },
            {
              name: 'Analytics',
              link: 'analytics',
            },
            {
              name: 'Gift NFTs',
              link: 'gift-nfts',
            },
          ].map((e) => {
            return (
              <NavLink
                key={e.name}
                to={`/organization/dashboard/${e.link}`}
                className="p-5"
                activeClassName="text-dark-700 border-b-4 border-dark-700"
                exact
              >
                <h3 className="font-semibold text-lg">{e.name}</h3>
              </NavLink>
            )
          })}
        </div>
      </div>
      <div className="bg-light-500">
        <Switch>
          <Route path={`${path}`} exact>
            <DashboardStats
              {...{ influencers, donations, ngoData, campaigns }}
            />
          </Route>
          <Route path={`${path}/analytics`} exact>
            <LiveAnalytics
              {...{ influencers, donations, ngoData, campaigns }}
            />
          </Route>
          <Route path={`${path}/gift-nfts`} exact>
            <GiftNFTs {...{ influencers, donations, campaigns, ngoData }} />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default Dashboard
