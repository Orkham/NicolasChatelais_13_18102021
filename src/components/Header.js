import React from 'react'
import logo from '../assets/img/argentBankLogo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { store } from '../App'
import { useSelector } from 'react-redux'

//import { useHistory } from 'react-router-dom'

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    .router-link-exact-active {
      color: #42b983;
    }
  }
  .main-nav-item {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
  .main-nav-logo {
    display: flex;
    align-items: center;
  }
  .main-nav-logo-image {
    max-width: 100%;
    width: 200px;
  }
  .fa-user-circle {
    margin-right: 0.5rem;
  }
`

export default function Header() {
  //console.log(store.getState())
  //console.log(JSON.parse(localStorage.getItem('token')))
  const isUserLoggedIn = useSelector((state) => state.loginReducer.connected)
  //console.log(isUserLoggedIn)
  //let history = useHistory()
  return (
    <StyledHeader className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!isUserLoggedIn ? (
          <Link className="main-nav-item" to="/sign-in">
            <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
            Sign In
          </Link>
        ) : (
          <Link
            className="main-nav-item"
            onClick={() => {
              store.dispatch({ type: 'SIGN_OUT' })
              store.dispatch({ type: 'DELETE_USER_DATAS' })
            }}
            to="/"
          >
            <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
            Sign Out
          </Link>
        )}
      </div>
    </StyledHeader>
  )
}
