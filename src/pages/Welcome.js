import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import UserPage from './UserPage'

export default function WelcomePage() {
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
