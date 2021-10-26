import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { store } from '../App'
import * as ACTIONS from '../actions/actions.js'
import Input from './login/input.js'

const StyledSignInForm = styled.div`
  .bg-dark {
    background-color: #12002b;
    padding: 3rem 0;
  }
  .sign-in-content {
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    padding: 2rem;
  }
  .sign-in-icon {
    font-size: 5rem;
  }
  .sign-in-button {
    display: block;
    width: 100%;
    padding: 8px 0;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
  }
  .input-remember {
    display: flex;
  }

  .input-remember label {
    margin-left: 0.25rem;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
  }

  .input-wrapper label {
    font-weight: bold;
  }

  .input-wrapper input {
    padding: 5px;
    font-size: 1.2rem;
  }
`

function logIn(e) {
  e.preventDefault()
  store.dispatch(ACTIONS.signIn)
  console.log(store.getState())
  let usernameValue = document.getElementById('username')
  let passwordValue = document.getElementById('password')
  /* console.log(usernameValue.value)
  console.log(passwordValue.value) */
  if (usernameValue.value === '123' && passwordValue.value === '123') {
    console.log('connecté !')
  }
}

export default function SignInForm(props) {
  //console.log(props.store.getState())
  return (
    <StyledSignInForm>
      <main className="bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="sign-in-icon"
          ></FontAwesomeIcon>
          <h1>Sign In</h1>
          <form>
            <Input
              htmlForValue="username"
              type="text"
              id="username"
              labelTitle="Username"
            />
            <Input
              htmlForValue="password"
              type="password"
              id="password"
              labelTitle="Password"
            />

            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="sign-in-button" onClick={logIn}>
              Sign In
            </button>
          </form>
        </section>
      </main>
    </StyledSignInForm>
  )
}
