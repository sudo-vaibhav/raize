import checkerboardImage from './org-home.png'
import { Link } from 'react-router-dom'
const OrganizationHome = () => {
  return (
    <div
      className="bg-dark-500 text-light-100 w-full h-full overflow-y-hidden"
      style={{
        height: 'calc(100vh - 73px)',
        backgroundImage: `url(${checkerboardImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'right bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto ">
        <div className="lg:w-1/2 py-5 items-center">
          <h1
            className="md:text-3xl lg:text-6xl my-5 flex-grow "
            style={{
              lineHeight: 1.3,
            }}
          >
            Help Someone whenever you can.
            <br />
            You can always help Someone
          </h1>
          <div className="flex-grow my-10">
            <Link
              to={`/organization/dashboard`}
              className="btn-primary-900 text-xl"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
      {/* <img className="w-full mt-5" src={checkerboardImage} alt="checkerboard" /> */}
    </div>
  )
}
export default OrganizationHome
