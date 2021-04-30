import checkerboardImage from './checkerboard.svg'
import { Link } from 'react-router-dom'
const OrganizationHome = () => {
  return (
    <div
      className="bg-dark-500 text-light-100 w-full h-full overflow-y-hidden"
      style={{
        height: 'calc(100vh - 73px)',
      }}
    >
      <div className="container mx-auto text-center">
        <div className="flex py-5 items-center">
          <h1 className="text-3xl flex-grow">
            Help Someone whenever you can.
            <br />
            You can always help Someone
          </h1>
          <div className="flex-grow">
            <Link to={`/organization/dashboard`} className="btn-primary-900">
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
      <img className="w-full mt-5" src={checkerboardImage} alt="checkerboard" />
    </div>
  )
}
export default OrganizationHome
