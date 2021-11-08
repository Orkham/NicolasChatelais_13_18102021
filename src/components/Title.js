import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { store } from '../App'

import { checkUserProfile, updateUserName } from '../services/service.fetch'

const StyledHeader = styled.header`
  color: #fff;
  margin-bottom: 2rem;
  padding-top: 1.4rem;
  h1 {
    margin-top: 0;
  }
  .edit-button {
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    margin: 0 1rem;
  }
  .edit-input {
    border-radius: 5px;
    border-color: #bec9d2;
    padding: 1rem;
    font-size: 1rem;
  }
`

function editName(firstName, lastName) {
  return (
    <div>
      <input
        className="edit-input"
        placeholder={firstName}
        id="firstName"
      ></input>
      <input
        className="edit-input"
        placeholder={lastName}
        id="lastName"
      ></input>
    </div>
  )
}

function saveId() {
  const firstNameValue = !document.getElementById('firstName').value
    ? !document.getElementById('firstName').placeholder
    : document.getElementById('firstName').value
  const lastNameValue = !document.getElementById('lastName').value
    ? document.getElementById('lastName').placeholder
    : document.getElementById('lastName').value
  console.log(typeof firstNameValue, lastNameValue)
  updateUserName(firstNameValue, lastNameValue)
}

export default function Title() {
  checkUserProfile()
  const isEditing = useSelector((state) => state.userReducer.isEditing)
  const userFirstName = useSelector((state) => state.userReducer.firstName)
  const userLastName = useSelector((state) => state.userReducer.lastName)

  return (
    <StyledHeader>
      <h1>
        Welcome back
        <br />
        {!isEditing ? (
          <div>
            {userFirstName} {userLastName} !
          </div>
        ) : (
          editName(userFirstName, userLastName)
        )}
      </h1>
      {!isEditing ? (
        <button
          className="edit-button"
          onClick={() => {
            store.dispatch({ type: 'EDIT_USER_ID' })
          }}
        >
          Edit Name
        </button>
      ) : (
        <div>
          <button className="edit-button" onClick={() => saveId()}>
            Save
          </button>
          <button className="edit-button">Cancel</button>
        </div>
      )}
    </StyledHeader>
  )
}
