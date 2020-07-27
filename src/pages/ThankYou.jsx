import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  padding: 0 15px;
  .thank-you-intro {
    margin: 15px;
    text-align: center;
  }
`

function ThankYou() {
  return (
    <Wrapper>
      <h1>Thank you!</h1>
      <p className="thank-you-intro">
        Your message is on its way. I will get back to you soon. Now back to the
        kitchen!{' '}
      </p>
    </Wrapper>
  )
}

export default ThankYou
