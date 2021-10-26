import Header from '../components/Header'
import Footer from '../components/Footer'
import SignInForm from '../components/SignInForm'

export default function SignInPage(props) {
  return (
    <div>
      <Header />
      <SignInForm store={props.store} />
      <Footer />
    </div>
  )
}
