import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SocialMedia from './SocialMedia';

const Wrapper = styled.div`
  background: ${props => props.theme.colors.bone};
  width: 100%;
  overflow: hidden;
  transition: max-height 300ms ease;
  max-height: 0;
  max-height: ${props => (props.isMenuOpen ? '400px' : '0')};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  p {
    padding: 5px 10px;
  }
`;

const MenuList = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px 20px;
  li {
    border-bottom: 1px solid ${props => props.theme.colors.dark};
    width: 100%;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
  }
  a {
    margin: 5px 0;
    padding: 15px 10px;
    color: ${props => props.theme.colors.dark};
    width: 100%;
    height: 100%;
  }
`;

const Social = styled.div`
  margin: 0 30px 0 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-self: center;
`;

function MobileMenu({ isMenuOpen }) {
  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <Social>
        <SocialMedia size={33} column />
      </Social>
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
      {/* <Social>
        <SocialMedia size={35} />
      </Social> */}
    </Wrapper>
  );
}

export default MobileMenu;
