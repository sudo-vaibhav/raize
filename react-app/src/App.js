import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Organization from './views/Organization'
import Influencer from './views/Influencer'
import HomePage from './views/HomePage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Navbar />
        </Route>
        <Route path="/organization">
          <Navbar />
        </Route>
      </Switch>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/organization" component={Organization} />
        <Route path="/influencer" component={Influencer} />
        {/* <Route path="/donate" component={} /> */}
      </Switch>
    </Router>
  )
}

export default App
