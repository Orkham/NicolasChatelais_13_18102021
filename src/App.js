import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import WelcomePage from './pages/Welcome'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
/* async function fetchDatas(){
  const headers = {
    'Content-type': 'application/json',
  }
  const bodyRequest = JSON.stringify({
    "email": "tony@stark.com",
    "password": "password123"
  })
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    body: bodyRequest,
    headers: headers
  })
  const userDatas = await response.json()
  console.log(userDatas.body.token)
}
fetchDatas() */
