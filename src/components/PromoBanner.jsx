import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: yellow;
  padding: 15px;
  text-align: center;
`

function PromoBanner() {
  return (
    <Wrapper>
      <h2>Subscribe for a recurring box and save 5%!</h2>
    </Wrapper>
  )
}

export default PromoBanner
