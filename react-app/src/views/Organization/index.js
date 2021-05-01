import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Dashboard from './Dashboard'
import OrganizationHome from './OrganizationHome'
import Sidebar from './Sidebar'
import Donate from './Donate'
import OrganizationLogin from './OrganizationLogin'
import OrganizationSignup from './OrganizationSignup'
import OrganizationSettings from './OrganizationSettings'

import { Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const Organization = () => {
  const { path } = useRouteMatch()
  const { currentUser } = useAuth()
  return (
    <Switch>
      {/* {currentUser ? ( */}

      <Route path={`${path}/login`} exact>
        {currentUser ? (
          <Redirect to={'/organization'} />
        ) : (
          <OrganizationLogin />
        )}
      </Route>
      <Route path={`${path}/signup`} exact>
        {currentUser ? (
          <Redirect to={'/organization'} />
        ) : (
          <OrganizationSignup />
        )}
      </Route>

      <Route path={`${path}/donate/:donationCode`} component={Donate} />

      {currentUser ? (
        <Route path={`${path}/`}>
          <div className="grid grid-cols-18">
            <Sidebar />
            <main className="col-start-2 col-end-19">
              <Switch>
                <Route path="/organization/dashboard" component={Dashboard} />
                <Route
                  path="/organization/settings"
                  component={OrganizationSettings}
                />
                <Route
                  path="/organization"
                  exact
                  component={OrganizationHome}
                />
              </Switch>
            </main>
          </div>
        </Route>
      ) : (
        <Redirect to={'/organization/login'} />
      )}
    </Switch>
  )
}

export default Organization
