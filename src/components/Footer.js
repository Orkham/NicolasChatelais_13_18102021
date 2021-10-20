import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2rem 0 1.5rem;
`

export default function Footer() {
  return (
    <StyledFooter>
      <p class="footer-text">Copyright 2020 Argent Bank</p>
    </StyledFooter>
  )
}
