import FeatherIcon from 'feather-icons-react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
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
        {
          iconName: 'mail',
          link: 'feed',
        },
        {
          iconName: 'bar-chart-2',
          link: 'dashboard',
        },
        {
          iconName: 'settings',
          link: 'settings',
        },
      ].map((e) => {
        return (
          <NavLink
            to={`/organization/${e.link}`}
            exact
            key={e.iconName}
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
