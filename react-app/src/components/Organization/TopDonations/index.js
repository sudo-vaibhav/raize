import Card from '../../Card'
import FeatherIcon from 'feather-icons-react'
import { Link } from 'react-router-dom'
import prajakta from '../../../views/Influencer/ProfileView/prajakta.png'
const TopDonor = ({ position }) => {
  return (
    <Card key={position} className="my-4 border-light-900 border">
      <div className="flex justify-between items-center">
        <div className="flex">
          <img
            src={prajakta}
            style={{
              height: 43,
              width: 43,
            }}
          />
          <div className="ml-2">
            <h5 className="font-medium">
              <span className="text-light-900">#{position}</span> Prajakta
            </h5>
            <p className="text-sm text-light-900">
              <span className="text-primary-900">₹12,00,000</span> generated
            </p>
          </div>
        </div>
        <div className="grid place-items-center">
          <Link className="bg-secondary-500 p-2 rounded-lg text-secondary-900">
            <FeatherIcon icon={'gift'} />
          </Link>
        </div>
      </div>
    </Card>
  )
}
const TopDonations = ({ className = '' }) => {
  return (
    <Card className={` ${className} overflow-y-auto`}>
      <h3 className="font-medium text-lg">Top Donors</h3>
      {[1, 2, 3, 4, 5].map((e) => {
        return <TopDonor position={e} />
      })}
    </Card>
  )
}

export default TopDonations
