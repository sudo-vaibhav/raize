import { useEffect, useState } from 'react'
import prajakta from './prajakta.png'
import FeatherIcon from 'feather-icons-react'
import donateForIndia from './donate-for-india.png'
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
  const { currentUser } = useAuth()
  const [profileData, setProfileData] = useState({
    twitter: '',
    youtube: '',
    instagram: '',
    name: '',
  })
  useEffect(() => {
    ;(async () => {
      db.collection('influencer')
        .where('influencerUId', '==', currentUser.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setProfileData({ id: doc.id, ...doc.data() })
          })
        })
    })()
  }, [currentUser?.uid])

  console.log('data', profileData)

  return (
    currentUser && (
      <div className="container mx-auto">
        <div className="px-5">
          <h2 className="font-bold text-2xl pb-2 pt-5">Profile</h2>
          <div className="flex items-center my-5">
            <div>
              <img src={prajakta} width={84} height={84} alt="profile" />
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
              {[
                {
                  name: 'Oxygen tanks for patients',
                  generated: 120000,
                  target: 300000,
                  image: donateForIndia,
                },
                {
                  name: 'Help vaccinate street dogs',
                  generated: 360000,
                  target: 450000,
                  image: donateForIndia,
                },
              ].map((e) => {
                return (
                  <div
                    key={e.name}
                    className="my-3 px-2 bg-light-100 py-2 rounded-lg border-light-700 border"
                  >
                    <img
                      className="border-light-700 border rounded-md"
                      src={e.image}
                      alt={e.name}
                    />
                    <h3 className="text-sm font-medium my-2">{e.name}</h3>
                    <div
                      className="bg-light-500 rounded-lg"
                      style={{ height: 10 }}
                    >
                      <div
                        className="bg-primary-900 h-full rounded-lg"
                        style={{
                          width: `${(100 * e.generated) / e.target}%`,
                        }}
                      ></div>
                    </div>
                    <p className="mt-2">
                      <span className="font-semibold">₹{e.generated}</span>
                      <span className="text-xs text-light-900">
                        &nbsp;generated
                      </span>
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default ProfileView
