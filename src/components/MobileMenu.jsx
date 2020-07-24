import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: 400px;
  transition: flex 250ms ease-in-out;
  flex: ${props => (props.isMenuOpen ? '1' : '0')};
  background: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    padding: 5px 10px;
  }
`

function MobileMenu({ isMenuOpen }) {
  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <p>yoasdfkjl</p>
      <p>yoasdfkjl</p>
      <p>yoasdfkjl</p>
      <p>yoasdfkjl</p>
      <p>yoasdfkjl</p>
      <p>yoasdfkjl</p>
      <p>yoasdfkjl</p>
      <p>yoasdfkjl</p>
      <p>yoasdfkjl</p>
    </Wrapper>
  )
}

export default MobileMenu
