import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import WelcomePage from './pages/Welcome'
import SignInPage from './pages/SignInPage'
import UserPage from './pages/UserPage'
import { createStore } from 'redux'
import reducer from './reducers/login.reducer'
import * as ACTIONS from './actions/actions.js'

/*STORE*/

let store = createStore(reducer)
//console.log(store)
/* store.subscribe(function () {
  console.log(store.getState())
}) */

//store.dispatch(ACTIONS.testClick)
store.dispatch(ACTIONS.signIn)

function testButton(){
  store.dispatch(ACTIONS.testClick)
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
          <button onClick={testButton}>Test</button>
        </Route>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

/* async function fetchDatas() {
  const headers = {
    'Content-type': 'application/json',
  }
  const bodyRequest = JSON.stringify({
    email: 'tony@stark.com',
    password: 'password123',
  })
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    body: bodyRequest,
    headers: headers,
  })
  const userDatas = await response.json()
  console.log(userDatas.body.token)
}
fetchDatas() 
 */