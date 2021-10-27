import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import WelcomePage from './pages/Welcome'
import SignInPage from './pages/SignInPage'
import UserPage from './pages/UserPage'
import { createStore } from 'redux'
import reducer from './reducers/login.reducer'
/* import * as ACTIONS from './actions/actions.js' */

/*STORE*/

export let store = createStore(reducer)
//console.log(store)

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/sign-in">
          <SignInPage store={store} />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

