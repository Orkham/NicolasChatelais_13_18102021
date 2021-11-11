import { store } from '../App'

export async function checkUserId(email, password) {
  const headers = {
    'Content-type': 'application/json',
  }
  const bodyRequest = JSON.stringify({
    email: email,
    password: password,
  })

  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    body: bodyRequest,
    headers: headers,
  }).catch((error) => {
    throw error
  })

  try {
    const userDatas = await response.json()
    const token = userDatas.body.token
    console.log(token)
    store.dispatch({
      type: 'SIGN_IN',
      payload: {
        token: token,
      },
    })
    localStorage.setItem('token', JSON.stringify(token))
  } catch {
    store.dispatch({ type: 'SIGN_OUT' })
    alert('Mot de passe ou adresse mail incorrect')
  }
}

export async function checkUserProfile() {
  const getToken = JSON.parse(localStorage.getItem('token'))
  const headers = {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + getToken,
  }

  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: headers,
  })
  const userProfile = await response.json()

  store.dispatch({
    type: 'GET_USER_DATAS',
    payload: {
      email: userProfile.body.email,
      firstName: userProfile.body.firstName,
      lastName: userProfile.body.lastName,
      createAt: userProfile.body.createAt,
      updateAt: userProfile.body.updateAt,
      id: userProfile.body.id,
    },
  })

  return userProfile
}

export async function updateUserName(firstNameValue, lastNameValue) {
  
  const getToken = JSON.parse(localStorage.getItem('token'))

  const headers = {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + getToken,
  }

  const bodyRequest = JSON.stringify({
    firstName: firstNameValue,
    lastName: lastNameValue,
  })

  await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    body: bodyRequest,
    headers: headers,
  })
  
}

export function isConnected() {
  const getToken = JSON.parse(localStorage.getItem('token'))
  if (getToken !== null) {
    console.log('coucou')
  }
}