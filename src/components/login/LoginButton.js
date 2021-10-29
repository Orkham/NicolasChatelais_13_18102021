import { checkUserId } from '../../services/service.fetch'

import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

async function logIn() {
  const usernameValue = document.getElementById('username').value
  const passwordValue = document.getElementById('password').value
  checkUserId(usernameValue, passwordValue)
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