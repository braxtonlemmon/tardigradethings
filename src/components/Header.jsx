import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import StoreContext from '~/context/StoreContext'
import styled from 'styled-components'
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
  padding: 10px 10px 10px 0;
  background: ${props => props.theme.colors.card};
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.6);
  z-index: 500;
  font-weight: bold;
  .dog-bone {
    height: 30px;
    transform: rotate(-30deg);
    transition: transform 600ms ease;
    &:hover {
      transform: rotate(30deg);
    }
    @media (min-width: 412px) {
      height: 40px;
    }
  }
`

const Group = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin: 0 3px;
    @media (min-width: 412px) {
      margin: 0 7px;
    }
  }
`

const HeaderLink = styled(Link)`
  color: ${props => props.theme.colors.dark};
  h1 {
    font-size: ${props => props.theme.fontSize.normal};
    max-width: 140px;
    line-height: 1.2em;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
    &:hover {
      color: ${props => props.theme.colors.darkLight};
    }
    @media (min-width: 412px) {
      font-size: ${props => props.theme.fontSize.medium};
      max-width: 180px;
    }
  }
`

const HeaderCart = styled.div`
  position: relative;
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  .qty {
    position: absolute;
    top: 7px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
  }
  .bag {
    height: 90%;
    width: 90%;
  }
  &:hover {
    color: ${props => props.theme.colors.darkLight};
  }
  @media (min-width: 412px) {
    height: 50px;
    width: 50px;
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
          <img
            className="dog-bone"
            src={logo}
            alt="peanut butter dog treat logo"
          />
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
