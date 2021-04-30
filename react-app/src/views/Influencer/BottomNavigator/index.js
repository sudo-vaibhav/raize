import { NavLink } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'
const BottomNavigator = () => {
  return (
    <div className="flex mx-auto bg-dark-900 justify-center fixed bottom-0 w-full text-light-900">
      {[
        {
          icon: 'bar-chart-2',
          name: 'My Stats',
          link: 'stats',
        },
        {
          icon: 'compass',
          name: 'New Campaign',
          link: 'explore-ngos',
        },
        {
          icon: 'bell',
          name: 'Notifications',
          link: 'notifications',
        },
        {
          icon: 'user',
          name: 'Profile',
          link: 'profile',
        },
      ].map((e) => {
        return (
          <NavLink
            key={e.icon}
            to={`/influencer/${e.link}`}
            className="p-3 flex flex-col items-center"
            activeClassName="text-primary-900"
          >
            <FeatherIcon icon={e.icon} />
            <p className="text-xs">{e.name}</p>
          </NavLink>
        )
      })}
    </div>
  )
}

export default BottomNavigator
