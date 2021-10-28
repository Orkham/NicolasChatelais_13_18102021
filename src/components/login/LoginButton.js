import { checkUserId } from '../../services/service.fetch'
import { store } from '../../App'
/*import { useDispatch } from 'react-redux'
import { SIGN_IN } from '../../actions/actions' */

import { Link } from 'react-router-dom'

function logIn() {
  const usernameValue = document.getElementById('username').value
  const passwordValue = document.getElementById('password').value
  checkUserId(usernameValue, passwordValue)
}

export default function LogInButton() {
  console.log(store.getState().connected)
  return (
    <Link
      className="sign-in-button"
      onClick={(e) => {
        e.preventDefault()
        logIn()
      }}
      to="/user"
    >
      Sign In
    </Link>
  )
}
