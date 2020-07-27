import React from 'react'
import styled from 'styled-components'
import { PageWrapper } from '~/utils/styles'

const Wrapper = styled(PageWrapper)`
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
        Your message is on the way. I will get back to you soon!{' '}
      </p>
    </Wrapper>
  )
}

export default ThankYou
