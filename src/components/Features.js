import React from 'react'
import styled from 'styled-components'
import iconChat from '../assets/img/icon-chat.png'
import iconMoney from '../assets/img/icon-money.png'
import iconSecurity from '../assets/img/icon-security.png'

const StyledFeature = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
  }
  .feature-icon {
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
  }

  .feature-item {
    flex: 1;
    padding: 2.5rem;
  }

  .feature-item-title {
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`
/**
 * 
 * @returns content for Welcome Page
 */
export default function Features() {
  return (
    <StyledFeature>
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src={iconChat} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      <div className="feature-item">
        <img src={iconMoney} alt="Money Icon" className="feature-icon" />
        <h3 className="feature-item-title">More savings means higher rates</h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      <div className="feature-item">
        <img src={iconSecurity} alt="Security Icon" className="feature-icon" />
        <h3 className="feature-item-title">Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </div>
    </StyledFeature>
  )
}
