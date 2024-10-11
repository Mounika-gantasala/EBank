import {Route, Switch} from 'react-router-dom'

// import Home from './components/Home'

import Login from './components/Login'

import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exactpath="/ebank/login" component={Login} />
      <Route exactpath="/" />
      <NotFound />
    </Switch>
  </div>
)
export default App
