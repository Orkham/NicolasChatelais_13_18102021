import { SIGN_IN } from '../actions/actions'
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
  })
  try {
    const userDatas = await response.json()
    console.log('Token : ', userDatas.body.token)
    store.dispatch(SIGN_IN)
  } catch {
    alert('Mot de passe ou adresse mail incorrect')
  }
}
