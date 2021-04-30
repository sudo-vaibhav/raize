import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import DashboardStats from './DashboardStats'
import LiveAnalytics from './Analytics'
import GiftNFTs from './GiftNFTs'

const Dashboard = () => {
  const { url, path } = useRouteMatch()
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          {[
            {
              name: 'Donations',
              link: '',
            },
            {
              name: 'Analytics',
              link: 'analytics',
            },
            {
              name: 'Gift NFTs',
              link: 'gift-nfts',
            },
          ].map((e) => {
            return (
              <NavLink
                key={e.name}
                to={`/organization/dashboard/${e.link}`}
                className="p-5"
                activeClassName="text-dark-700 border-b-4 border-dark-700"
                exact
              >
                <h3 className="font-semibold text-lg">{e.name}</h3>
              </NavLink>
            )
          })}
        </div>
      </div>
      <div className="bg-light-500">
        <Switch>
          <Route path={`${path}`} exact>
            <DashboardStats />
          </Route>
          <Route path={`${path}/analytics`} exact>
            <LiveAnalytics />
          </Route>
          <Route path={`${path}/gift-nfts`} exact>
            <GiftNFTs />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default Dashboard
