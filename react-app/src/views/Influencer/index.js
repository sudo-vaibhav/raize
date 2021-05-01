import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import BottomNavigator from './BottomNavigator'
import ProfileView from './ProfileView'
import InfluencerLogin from './InfluencerLogin'
import InfluencerSignup from './InfluencerSignup'
import Stats from './Stats'
import Notifications from './Notifications'
import ExploreNGOs from './ExploreNGOs'
import StartCampaign from './StartCampaign'
import { useAuth } from '../../contexts/AuthContext'

const Influencer = () => {
  const { path } = useRouteMatch()
  const { currentUser } = useAuth()
  return (
    <div className="bg-light-500 min-h-screen">
      <Switch>
        <Route path={`${path}/login`} exact>
          {currentUser ? (
            <Redirect to={'/influencer/profile'} />
          ) : (
            <InfluencerLogin />
          )}
        </Route>
        <Route path={`${path}/signup`} exact>
          {currentUser ? (
            <Redirect to={'/influencer/profile'} />
          ) : (
            <InfluencerSignup />
          )}
        </Route>
        <Route>
          <Switch>
            <Route path={`${path}/stats/:campaignId?`}>
              {currentUser ? <Stats /> : <Redirect to={'/influencer/login'} />}
            </Route>
            <Route path={`${path}/profile`}>
              {currentUser ? (
                <ProfileView />
              ) : (
                <Redirect to={'/influencer/login'} />
              )}
            </Route>
            <Route path={`${path}/notifications`}>
              {currentUser ? (
                <Notifications />
              ) : (
                <Redirect to={'/influencer/login'} />
              )}
            </Route>
            <Route path={`${path}/explore-ngos`}>
              {currentUser ? (
                <ExploreNGOs />
              ) : (
                <Redirect to={'/influencer/login'} />
              )}
            </Route>
            <Route path={`${path}/start-campaign/:ngoId`}>
              {currentUser ? (
                <StartCampaign />
              ) : (
                <Redirect to={'/influencer/login'} />
              )}
            </Route>
            <Route exact>
              {currentUser ? (
                <Redirect to={`${path}/profile`} />
              ) : (
                <Redirect to={`${path}/login`} />
              )}
            </Route>
          </Switch>
          <BottomNavigator />
        </Route>
      </Switch>
    </div>
  )
}

export default Influencer
