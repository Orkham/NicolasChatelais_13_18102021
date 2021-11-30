import { store } from '../App'


/**
 * check the validity between identifier and password then create a token and save it in the local-storage and redux-store
 * @param {string} email user's identifier
 * @param {string} password user's password
 */
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

/**
 * 
 * @returns the user's profile to create the user's page if there's a token previously created in the local-storage
 */
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


/**
 * save the new user's identity in the db
 * @param {string} firstNameValue 
 * @param {string} lastNameValue 
 */
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

