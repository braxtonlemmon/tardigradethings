import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import StoreContext from '~/context/StoreContext'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import { AiOutlineShopping } from 'react-icons/ai'
import Hamburger from './Hamburger'
import logo from '../images/dog-bone.svg'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 10px 0;
  background: ${props => props.theme.colors.card};
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.6);
  z-index: 500;
  font-weight: bold;
  .logo {
    /* border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4); */
    transform: rotate(-45deg);
  }
  .dog-bone {
    height: 40px;
    transform: rotate(-30deg);
    transition: transform 600ms ease;
    &:hover {
      transform: rotate(30deg);
    }
  }
`

const Group = styled.div`
  display: flex;
  & > * {
    margin: 0 7px;
  }
  align-items: center;
`

const HeaderLink = styled(Link)`
  color: ${props => props.theme.colors.dark};
  h1 {
    font-size: ${props => props.theme.fontSize.medium};
    width: 170px;
    line-height: 1.2em;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
    &:hover {
      color: ${props => props.theme.colors.darkLight};
    }
  }
`

const HeaderCart = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .qty {
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .bag {
    height: 85%;
    width: 85%;
  }
  &:hover {
    color: ${props => props.theme.colors.darkLight};
  }
`

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

function Header({ siteTitle, handleMenuClick, isMenuOpen }) {
  const [hasItems, quantity] = useQuantity()
  return (
    <Wrapper>
      <Group>
        <HeaderLink to="/">
          <img className="dog-bone" src={logo} alt="logo" />
        </HeaderLink>
        <HeaderLink to="/">
          <h1>{siteTitle}</h1>
        </HeaderLink>
      </Group>
      <Group>
        <HeaderLink className="cart" to="/cart">
          <HeaderCart>
            <AiOutlineShopping className="bag" />
            {hasItems && <div className="qty">{quantity}</div>}
          </HeaderCart>
        </HeaderLink>
        <Hamburger handleMenuClick={handleMenuClick} isMenuOpen={isMenuOpen} />
      </Group>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  handleMenuClick: PropTypes.func,
}

Header.defaultPropts = {
  siteTitle: '',
}

export default Header
