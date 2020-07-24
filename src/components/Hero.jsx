import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  background: ${props => props.theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  p {
    width: 40%;
    max-width: 400px;
  }
`

function Hero() {
  return (
    <Wrapper>
      <h1>Nutritious, homemade treats for happier pups!</h1>
      <p>
        These goodies are made with all-natural oats and gluten-free peanut
        butter. No xylitol, no artificial preservatives, no artificial
        flavoring, doggy taste tested!{' '}
      </p>
      <button>Buy now!</button>
    </Wrapper>
  )
}

export default Hero
