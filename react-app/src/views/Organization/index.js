import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Dashboard from './Dashboard'
import OrganizationHome from './OrganizationHome'
import Sidebar from './Sidebar'
import Donate from './Donate'
import OrganizationLogin from './OrganizationLogin'
import OrganizationSignup from './OrganizationSignup'
import OrganizationSettings from './OrganizationSettings'

const Organization = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/login`} exact>
        <OrganizationLogin />
      </Route>
      <Route path={`${path}/signup`} exact>
        <OrganizationSignup />
      </Route>
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
              <Route path="/organization/donate" component={Donate} />
              <Route path="/organization" exact component={OrganizationHome} />
            </Switch>
          </main>
        </div>
      </Route>
    </Switch>
  )
}

export default Organization
