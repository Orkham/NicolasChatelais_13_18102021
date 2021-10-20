import Header from '../components/Header'
import Footer from '../components/Footer'
import Title from '../components/Title'
import styled from 'styled-components'
import AccountDetails from '../components/AccountsDetails'

const StyledMain = styled.main`
  background-color: #12002b;
  margin-top: 0;
`

export default function UserPage() {
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
