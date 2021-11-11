import { checkUserId } from '../../services/service.fetch'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { store } from '../../App'

/**
 * collect user's inputs for checking connexion
 */
async function logIn() {
  const usernameValue = document.getElementById('username').value
  const passwordValue = document.getElementById('password').value
  checkUserId(usernameValue, passwordValue)
  store.dispatch({
    type: 'IS_LOADING',
  })
}

/**
 * handle user connexion tries and redirect to UserPage component
 */
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
