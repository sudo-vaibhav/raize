import { Switch, Route, useRouteMatch } from 'react-router-dom'
import BottomNavigator from './BottomNavigator'
import ProfileView from './ProfileView'
import InfluencerLogin from './InfluencerLogin'
import InfluencerSignup from './InfluencerSignup'
import Stats from './Stats'
import Notifications from './Notifications'
import ExploreNGOs from './ExploreNGOs'
import StartCampaign from './StartCampaign'

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
        <Route>
          <Switch>
            <Route path={`${path}/stats/:campaignId?`}>
              <Stats />
            </Route>
            <Route path={`${path}/profile`}>
              <ProfileView />
            </Route>
            <Route path={`${path}/notifications`}>
              <Notifications />
            </Route>
            <Route path={`${path}/explore-ngos`}>
              <ExploreNGOs />
            </Route>
            <Route path={`${path}/start-campaign/:ngoId`}>
              <StartCampaign />
            </Route>
          </Switch>
          <BottomNavigator />
        </Route>
      </Switch>
    </div>
  )
}

export default Influencer
