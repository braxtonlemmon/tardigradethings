import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.light};
  color: white;
  padding: 15px;
  text-align: center;
  letter-spacing: 2px;
  background: linear-gradient(#b98e52, #dfb27c);
  background: radial-gradient(#b98e52, #dfb27c);
  background: ${props => props.theme.colors.dark};
  line-height: 1.1em;
`

function PromoBanner() {
  return (
    <Wrapper>
      <h2>Subscribe for a recurring box and get 5% off!</h2>
    </Wrapper>
  )
}

export default PromoBanner
