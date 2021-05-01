import FeatherIcon from 'feather-icons-react'
import { NavLink, useHistory } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'

const Sidebar = () => {
  const history = useHistory()
  const { signout } = useAuth()
  return (
    <div
      className="col-start-1 col-span-1 bg-dark-700 text-light-100 flex flex-col justify-center items-center"
      style={{
        height: 'calc(100vh - 73px)',
      }}
    >
      {[
        {
          iconName: 'home',
          link: '',
        },
        // {
        //   iconName: 'mail',
        //   link: 'feed',
        // },
        {
          iconName: 'bar-chart-2',
          link: 'dashboard',
        },
        {
          iconName: 'log-out',
          link: 'signup',
          onClick: () => {
            signout()
            history.push('/organization/signup')
          },
        },
      ].map((e) => {
        // if (e.onClick) {
        //   e.onClick()
        // }
        return (
          <NavLink
            to={`/organization/${e.link}`}
            exact
            key={e.iconName}
            onClick={e.onClick || (() => {})}
            className="py-5"
            activeClassName="text-primary-900 border-l-4 border-primary-900 w-full grid place-items-center"
          >
            <FeatherIcon icon={e.iconName} size={25} />
          </NavLink>
        )
      })}
    </div>
  )
}

export default Sidebar
