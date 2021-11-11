import Header from '../components/Header'
import Footer from '../components/Footer'
import Title from '../components/Title'
import styled from 'styled-components'
import AccountDetails from '../components/AccountsDetails'
import { useSelector } from 'react-redux'
import SignInPage from './SignInPage'

const StyledMain = styled.main`
  background-color: #12002b;
  margin-top: 0;
`

/**
 *
 * @returns UserPage from the data of the store (loading and connected)
 */
export default function UserPage() {
  const isLoadingState = useSelector((state) => state.loginReducer.isLoading)
  const isConnected = useSelector((state) => state.loginReducer.connected)

  if (isLoadingState) {
    return <h1>Patientez</h1>
  } else if (!isConnected) {
    /*gestion du redirect si mauvais mot de passe*/
    return <SignInPage />
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
