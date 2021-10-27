import { useDispatch } from 'react-redux'
//import { store } from '../../App'
import { fetchDatas } from '../../services/service.fetch'

function logIn(e) {
  const usernameValue = document.getElementById('username').value
  const passwordValue = document.getElementById('password').value
  fetchDatas(usernameValue, passwordValue)
}

export default function LogInButton() {
  const dispatch = useDispatch()

  return (
    <button
      className="sign-in-button"
      onClick={(e) => {
        e.preventDefault()
        logIn()
        dispatch({ type: 'ACTIONS.SIGN_IN' })
      }}
    >
      Sign In
    </button>
  )
}
