import { useEffect, useState } from 'react'
// import prajakta from './prajakta.png'
import FeatherIcon from 'feather-icons-react'
// import donateForIndia from './donate-for-india.png'
import { Link } from 'react-router-dom'
import { platformColorMap } from '../../../constants'
import { db } from '../../../firebase'
import { useAuth } from '../../../contexts/AuthContext'

const SocialPill = ({ data }) => {
  return (
    <div
      key={data.platform}
      className="bg-light-100 flex items-center rounded-lg border border-light-900"
    >
      <div className="p-2">
        <FeatherIcon
          icon={data.platform}
          stroke={platformColorMap[data.platform]}
          size={16}
        />
      </div>
      <div className="text-sm">@{data.handle}</div>
    </div>
  )
}

const ProfileView = () => {
  const { currentUser, signout } = useAuth()
  const [{ profileData, campaigns }, setData] = useState({
    profileData: {
      twitter: '',
      youtube: '',
      instagram: '',
      name: '',
    },
    campaigns: [],
  })

  useEffect(() => {
    ;(async () => {
      db.collection('influencer')
        .where('influencerUId', '==', currentUser.uid)
        .get()
        .then((querySnapshot) => {
          let influencerDoc
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            influencerDoc = {
              id: doc.id,
              ...doc.data(),
            }
          })
          db.collection('campaign')
            .where('influencerId', '==', currentUser.uid)
            .get()
            .then((querySnapshot) => {
              const influencerCampaigns = []
              querySnapshot.forEach((doc) => {
                influencerCampaigns.push({
                  id: doc.id,
                  ...doc.data(),
                })
              })
              setData({
                profileData: influencerDoc,
                campaigns: influencerCampaigns,
              })
            })
        })
    })()
  }, [currentUser?.uid])

  console.log('data', profileData)

  return (
    <div className="container mx-auto">
      <div className="px-5">
        <h2 className="font-bold text-2xl pb-2 pt-5">Profile</h2>
        <div className="flex items-center my-5">
          <div>
            <img
              src={profileData.profileImage}
              style={{
                width: 84,
                height: 84,
                borderRadius: '50%',
              }}
              alt="profile"
            />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-xl">{profileData.name}</h3>
            <h5 className="text-light-900 font-semibold">Influencer</h5>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {['youtube', 'twitter', 'instagram']
            .map((e) => ({
              handle: profileData[e],
              platform: e,
            }))
            .map((e) => {
              return <SocialPill data={e} />
            })}
        </div>
        <div>
          <h2 className="font-semibold text-lg mt-3">My Campaigns</h2>
          <div className="grid grid-cols-2 gap-2">
            {campaigns.map((e) => {
              return (
                <Link
                  to={`/influencer/stats/${e.id}`}
                  key={e.name}
                  className="my-3 px-2 bg-light-100 py-2 rounded-lg border-light-700 border"
                >
                  <img
                    className="border-light-700 border rounded-md"
                    src={e.bannerUrl}
                    alt={e.name}
                  />
                  <h3 className="text-sm font-medium my-2">{e.name}</h3>

                  {/* <div
                      className="bg-light-500 rounded-lg"
                      style={{ height: 10 }}
                    >
                      <div
                        className="bg-primary-900 h-full rounded-lg"
                        style={{
                          width: `${(100 * e.generated) / e.target}%`,
                        }}
                      ></div>
                    </div> */}
                  <p className="mt-2">
                    <span className="font-semibold">₹{e.target}</span>
                    <span className="text-xs text-light-900">&nbsp;target</span>
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex justify-end my-4">
          <button
            className="btn-primary-900 items-center light flex justify-between"
            onClick={() => {
              signout()
            }}
          >
            Sign out
            <FeatherIcon icon="log-out" className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileView
