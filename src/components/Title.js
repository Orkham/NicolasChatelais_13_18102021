import React from 'react'
import styled from 'styled-components'

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
  }
`

export default function Title() {
  return (
    <StyledHeader>
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button className="edit-button">Edit Name</button>
    </StyledHeader>
  )
}
