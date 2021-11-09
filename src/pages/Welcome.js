import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
//import { store } from '../App'
import { useSelector } from 'react-redux'
import UserPage from './UserPage'
//import { isConnected } from '../services/service.fetch'

export default function WelcomePage() {
  //console.log(store.getState())
  //console.log(JSON.parse(localStorage.getItem('token')))
  //console.log(localStorage.getItem('token') !== null)
  //isConnected()
  //const isLocalStorageToken = localStorage.getItem('token') !== null
  //console.log(isLocalStorageToken)
  const isUserLoggedIn = useSelector((state) => state.loginReducer.connected)
  return (
    <div>
      {!isUserLoggedIn ? (
        <div>
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
