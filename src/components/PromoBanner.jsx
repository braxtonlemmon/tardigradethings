import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.light};
  padding: 15px;
  text-align: center;
  background: linear-gradient(#b98e52, #dfb27c);
`

function PromoBanner() {
  return (
    <Wrapper>
      <h2>Subscribe for a recurring box and get 5% off!</h2>
    </Wrapper>
  )
}

export default PromoBanner
