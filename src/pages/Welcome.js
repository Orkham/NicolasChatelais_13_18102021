import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import UserPage from './UserPage'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    top:0;
  }

  to {
    top: -20px
  }
`

const LoggoutMessageBand = styled.div`
  height: 20px;
  background: rgb(247, 153, 195);
  background: radial-gradient(
    circle,
    rgba(247, 153, 195, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  display: block;
  position: absolute;
  width: 100%;
  animation: 2s ${rotate} 2s 1 linear forwards;
`

function Band() {
  return (
    <LoggoutMessageBand className="logoutBand" id="hideMe">
      Vous êtes maintenant déconnecté.
    </LoggoutMessageBand>
  )
}

export default function WelcomePage() {
  const isUserLoggedIn = useSelector((state) => state.loginReducer.connected)
  const isLoading = useSelector((state) => state.loginReducer.isLoggingOut)

  return (
    <div>
      {!isUserLoggedIn ? (
        <div>
          {isLoading ? <Band /> : console.log('welcome')}
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
