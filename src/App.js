import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import WelcomePage from './pages/Welcome'
import SignInPage from './pages/SignInPage'
import UserPage from './pages/UserPage'
import { combineReducers, createStore } from 'redux'
import reducer from './reducers/login.reducer'
import userReducer from './reducers/user.reducer'
/* import * as ACTIONS from './actions/actions.js' */

/*STORE*/

const rootReducer = combineReducers({
  userReducer: userReducer,
  loginReducer: reducer,
})
//console.log(rootReducer)

export let store = createStore(rootReducer)
//console.log(store.getState())

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

