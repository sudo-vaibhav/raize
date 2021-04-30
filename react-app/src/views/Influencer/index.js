import { Switch, Route, useRouteMatch } from 'react-router-dom'
import BottomNavigator from './BottomNavigator'
import ProfileView from './ProfileView'
import InfluencerLogin from './InfluencerLogin'
import InfluencerSignup from './InfluencerSignup'
import Stats from './Stats'
import Notifications from './Notifications'
import NewCampaign from './NewCampaign'

const Influencer = () => {
  const { path } = useRouteMatch()
  return (
    <div className="bg-light-500 min-h-screen">
      <Switch>
        <Route path={`${path}/login`} exact>
          <InfluencerLogin />
        </Route>
        <Route path={`${path}/signup`} exact>
          <InfluencerSignup />
        </Route>
        <Route path={`${path}/`}>
          <Switch>
            <Route path={`${path}/profile`}>
              <ProfileView />
            </Route>
            <Route path={`${path}/notifications`}>
              <Notifications />
            </Route>
            <Route path={`${path}/new-campaign`}>
              <NewCampaign />
            </Route>
            <Route path={`${path}/stats`}>
              <Stats />
            </Route>
          </Switch>
          <BottomNavigator />
        </Route>
      </Switch>
    </div>
  )
}

export default Influencer
