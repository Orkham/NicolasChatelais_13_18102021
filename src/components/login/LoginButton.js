import { checkUserId } from '../../services/service.fetch'

import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { store } from '../../App'

async function logIn() {
  const usernameValue = document.getElementById('username').value
  const passwordValue = document.getElementById('password').value
  checkUserId(usernameValue, passwordValue)
  store.dispatch({
    type: 'IS_LOADING',
  })
  //console.log(store.getState())
}

export default function LogInButton() {
  let history = useHistory()
  return (
    <Link
      className="sign-in-button"
      onClick={(e) => {
        e.preventDefault()
        logIn()
        history.push('/user')
      }}
      to="."
    >
      Sign In
    </Link>
  )
}
