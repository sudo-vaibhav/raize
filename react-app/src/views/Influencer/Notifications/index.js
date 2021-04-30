import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import diamond from '../../../trinity/diamond.svg'

const Notifications = () => {
  return (
    <div className="container mx-auto pb-20">
      <div className="px-5">
        <h2 className="font-bold text-2xl pb-2 pt-5">Notifications</h2>
        {[1, 2, 3].map((e) => {
          return (
            <Card className="flex items-center my-3">
              <div style={{ width: 29 }}>
                <img src={diamond} className="w-100" alt="notification" />
              </div>
              <div className="ml-4 flex-grow">
                <h6 className="font-medium text-light-900">NFT GIFT</h6>
                <p>
                  You just recieved a Gift from{' '}
                  <span className="font-semibold">Hemkunt NGO</span>
                  <div className="text-primary-900 font-medium">
                    Click here to check it out
                  </div>
                </p>
              </div>
            </Card>
          )
        })}
        <h6 className="font-semibold text-light-900 text-center w-3/4 mx-auto">
          There are still countless people who can use your help.{' '}
          <Link to={'/influencer/new-campaign'} className="text-primary-900">
            Start a fundraiser
          </Link>
        </h6>
      </div>
    </div>
  )
}

export default Notifications
