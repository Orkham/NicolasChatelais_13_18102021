export async function fetchDatas(email, password) {
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
  } catch {
    console.log('Vous êtes un nain posteur ! ')
  }
}
