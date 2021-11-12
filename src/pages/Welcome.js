import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import UserPage from './UserPage'
import { store } from '../App'

function logoutConfirmation() {
  console.log('déconnexion en cours')
  setTimeout(() => {
    store.dispatch({
      type: 'IS_LOGGING_OUT',
      payload: {
        isLoggingOut: false,
      },
    })
    console.log('déconnexion validée')
    return <Band display={'none'} />
  }, 2000)
  return <Band display={'flex'} />
}

function Band(props) {
  return <div display={props.display}>Vous êtes maintenant déconnecté.</div>
}

export default function WelcomePage() {
  const isUserLoggedIn = useSelector((state) => state.loginReducer.connected)
  const isLoading = useSelector((state) => state.loginReducer.isLoading)
  console.log(store.getState())
  return (
    <div>
      {!isUserLoggedIn ? (
        <div>
          {isLoading ? logoutConfirmation() : console.log('welcome')}
          <Header />
          <Hero />
          <Features />
          <Footer />
        </div>
      ) : (
        <UserPage />
      )}
    </div>
  )
}
