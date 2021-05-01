import Card from '../../Card'
import FeatherIcon from 'feather-icons-react'
import { Link } from 'react-router-dom'
// import prajakta from '../../../views/Influencer/ProfileView/prajakta.png'
const TopDonor = ({ data, position, showButton, onInflucencerSelect }) => {
  return (
    <Card
      key={position}
      className="my-4 border-light-900 border"
      onClick={onInflucencerSelect}
    >
      <div className="flex justify-between items-center">
        <div className="flex">
          <img
            src={data.profileImage}
            style={{
              height: 43,
              width: 43,
            }}
            alt="profile"
          />
          <div className="ml-2">
            <h5 className="font-medium">
              <span className="text-light-900">#{position}</span> {data.name}
            </h5>
            <p className="text-sm text-light-900">
              <span className="text-primary-900">₹{data.amount}</span> generated
            </p>
          </div>
        </div>
        {showButton === true && (
          <div className="grid place-items-center">
            <Link className="bg-secondary-500 p-2 rounded-lg text-secondary-900">
              <FeatherIcon icon={'gift'} />
            </Link>
          </div>
        )}
      </div>
    </Card>
  )
}
const TopDonations = ({
  className = '',
  showButton,
  style,
  onInflucencerSelect,
  influencers,
  donations,
  campaigns,
}) => {
  const influencerAmounts = {}
  influencers.forEach((influencer) => {
    influencerAmounts[influencer.influencerUId] = 0
  })

  // console.log('influencers amounts', influencerAmounts)

  donations.forEach((donation) => {
    const sourceInfluencerId = campaigns.find(
      (e) => e.id === donation.campaignId,
    ).influencerId
    // console.log('influencer id while iterating donation', sourceInfluencerId)
    // console.log('donation amount', donation.amount, typeof donation.amount)
    influencerAmounts[sourceInfluencerId] += donation.amount
    // console.log('revised values of amounts', influencerAmounts)
  })

  influencers = influencers.map((e) => ({
    ...e,
    amount: influencerAmounts[e.influencerUId],
  }))

  influencers.sort((a, b) => {
    if (influencerAmounts[a.influencerUId] > influencerAmounts[b.influencerUId])
      return -1
    else if (
      influencerAmounts[a.influencerUId] < influencerAmounts[b.influencerUId]
    )
      return 1
    return 0
  })

  influencers = influencers.filter((e) => e.amount != 0).slice(0, 5)

  // console.log(influencers)

  return (
    <Card className={` ${className} overflow-y-auto`} style={style}>
      <h3 className="font-medium text-lg">Top Donors</h3>
      {influencers.map((e, i) => {
        return (
          <TopDonor
            position={i + 1}
            data={e}
            key={i}
            showButton={showButton}
            onInflucencerSelect={onInflucencerSelect}
          />
        )
      })}
    </Card>
  )
}

export default TopDonations
