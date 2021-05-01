import { useState } from 'react'
import Card from '../../../components/Card'
import { platformColorMap } from '../../../constants'
import FeatherIcon from 'feather-icons-react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { db } from '../../../firebase'
import { useAuth } from '../../../contexts/AuthContext'

import { useEffect } from 'react'
import { useParams, Redirect, useHistory } from 'react-router'
import SocialCard from './SocialCard'
import getSocialsData from './getSocialsData'

const Stats = () => {
  let { campaignId } = useParams()

  const history = useHistory()

  let [
    { campaignsData, selectedCampaign, donations, selectedCampaignData },
    setData,
  ] = useState({
    campaignsData: null,
    selectedCampaign: campaignId,
    donations: [],
  })
  const { currentUser } = useAuth()

  useEffect(() => {
    console.log(currentUser.uid)
    db.collection('campaign')
      .where('influencerId', '==', currentUser.uid)
      .orderBy('createdAt', 'desc')
      .get()
      .then((querySnapshot) => {
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() })
        })
        console.log(docs)
        // if(docs.length===0)
        let selectedCampaign = campaignId || (docs.length && docs[0].id)

        db.collection('donation')
          .where('campaignId', '==', selectedCampaign)
          .get()
          .then((querySnapshot) => {
            let donationsDocs = []
            querySnapshot.forEach((doc) => {
              donationsDocs.push({ id: doc.id, ...doc.data() })
            })

            console.log('donations', donationsDocs)

            setData({
              campaignsData: docs,
              selectedCampaign,
              selectedCampaignData: docs.find((e) => {
                return e.id === selectedCampaign
              }),
              donations: donationsDocs,
            })
          })
      })
  }, [campaignId, currentUser.uid])

  const { platformWise, baseLine, total } = getSocialsData(
    campaignsData || [],
    selectedCampaign,
    donations,
  )

  return (
    <div className="px-5 container mx-auto">
      <div className="w-3/4">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </div>
      {campaignsData && campaignsData.length !== 0 ? (
        <>
          <div className="flex items-center">
            <h2 className="font-bold text-lg pb-2 pt-5 w-1/2 px-2">
              {selectedCampaignData.name}
            </h2>
            <div className="flex-grow px-2 w-1/2">
              <div className="flex items-center">
                <select
                  className="w-full p-2 rounded-full"
                  value={selectedCampaignData.id}
                  onChange={(e) => {
                    campaignId = e.target.value
                    history.push(`/influencer/stats/${e.target.value}`)
                  }}
                >
                  {campaignsData.map((e) => {
                    return (
                      <>
                        <option key={e.id} value={e.id}>
                          {e.name}
                        </option>
                      </>
                    )
                  })}
                </select>
                <Link to="/influencer/explore-ngos">
                  <FeatherIcon
                    icon="plus-circle"
                    className="ml-3 text-primary-900"
                  />
                </Link>
              </div>
            </div>
          </div>
          <Card>
            <h3 className="text-xl font-bold">
              ₹{total}
              <span className="text-sm text-light-900">&nbsp;generated</span>
            </h3>
            <div
              style={{ height: 16 }}
              className="bg-light-500 flex rounded-lg my-3 rounded-lg"
            >
              {Object.keys(platformWise).map((e, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      width: `${(100 * platformWise[e]) / baseLine}%`,
                      backgroundColor: platformColorMap[e],
                    }}
                    className={
                      idx === 0
                        ? 'rounded-l-lg'
                        : idx === 2
                        ? 'rounded-r-lg'
                        : ''
                    }
                  ></div>
                )
              })}
            </div>
          </Card>
          <div className="flex justify-between my-5">
            <h4 className="text-lg font-semibold">Know your socials</h4>
          </div>
          {Object.keys(platformWise).map((e, idx) => {
            return (
              <SocialCard
                key={idx}
                name={e}
                amount={platformWise[e]}
                total={total}
                selectedCampaignData={selectedCampaignData}
              />
            )
          })}
        </>
      ) : campaignsData === null ? null : (
        <Redirect to={'/influencer/explore-ngos'} />
      )}
    </div>
  )
}
export default Stats
