import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  /* height: 400px; */
  /* transition: flex 250ms ease-in-out;
  flex: ${props => (props.isMenuOpen ? '1' : '0')}; */
  transition: max-height 300ms ease;
  max-height: 0;
  max-height: ${props => (props.isMenuOpen ? '400px' : '0')};
  background: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    padding: 5px 10px;
  }
`

const MenuList = styled.ul`
  width: 100%;
  background: ${props => props.theme.colors.bone};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px 20px;
  li {
    border-bottom: 1px solid ${props => props.theme.colors.dark};
    width: 50%;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
  }
  li:last-child {
    border-bottom: none;
  }
  a {
    margin: 5px 0;
    padding: 15px 10px;
    color: ${props => props.theme.colors.dark};
    width: 100%;
    height: 100%;
  }
`

function MobileMenu({ isMenuOpen }) {
  useEffect(() => {
    const body = document.querySelector('body')
    isMenuOpen
      ? (body.style.overflow = 'hidden')
      : (body.style.overflow = 'visible')
  }, [isMenuOpen])

  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <MenuList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </MenuList>
    </Wrapper>
  )
}

export default MobileMenu
