import Header from '../components/Header'
import Footer from '../components/Footer'
import Title from '../components/Title'
import styled from 'styled-components'
import AccountDetails from '../components/AccountsDetails'


import { useSelector } from 'react-redux'
//import { store } from '../App'
import SignInPage from './SignInPage'

const StyledMain = styled.main`
  background-color: #12002b;
  margin-top: 0;
`

export default function UserPage() {
  const isLoadingState = useSelector((state) => state.loginReducer.isLoading)
  const isConnected = useSelector((state) => state.loginReducer.connected)
  //console.log(store.getState())
  if (isLoadingState) {
    return <h1>Patientez</h1>
  } else if (!isConnected) {
    /*gestion du redirect si mauvais mot de passe*/
    return <SignInPage />
    //return <h1>Vous n'êtes pas connecté.</h1>
  } else {
    return (
      <div>
        <Header />
        <StyledMain>
          <Title />
          <AccountDetails />
        </StyledMain>

        <Footer />
      </div>
    )
  }
}
