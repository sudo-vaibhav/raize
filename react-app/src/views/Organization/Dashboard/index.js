import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import DashboardStats from './DashboardStats'
import LiveAnalytics from './LiveAnalytics'
import GiftNFTs from './GiftNFTs'

const Dashboard = () => {
  const { url, path } = useRouteMatch()
  return (
    <div className=" container mx-auto">
      <div className="flex">
        {[
          {
            name: 'Dashboard',
            link: '',
          },
          {
            name: 'Live Analytics',
            link: 'live-analytics',
          },
          {
            name: 'Gift NFTs',
            link: 'gift-nfts',
          },
        ].map((e) => {
          return (
            <NavLink
              key={e.name}
              to={`${url}/${e.link}`}
              className="p-5"
              activeClassName="text-dark-700 border-b-4 border-dark-700"
              exact
            >
              <h3 className="font-semibold text-lg">{e.name}</h3>
            </NavLink>
          )
        })}
      </div>
      <Switch>
        <Route path={`${path}`} exact>
          <DashboardStats />
        </Route>
        <Route path={`${path}/live-analytics`} exact>
          <LiveAnalytics />
        </Route>
        <Route path={`${path}/gift-nfts`} exact>
          <GiftNFTs />
        </Route>
      </Switch>
    </div>
  )
}

export default Dashboard
