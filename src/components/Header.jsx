import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import StoreContext from '~/context/StoreContext'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { RiShoppingBagLine } from 'react-icons/ri'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 20px 10px;
  background: green;
  z-index: 500;
`

const HeaderLink = styled(Link)`
  color: white;
`

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

function Header({ siteTitle }) {
  const [hasItems, quantity] = useQuantity()

  return (
    <Wrapper>
      <HeaderLink to="/">{siteTitle}</HeaderLink>
      <HeaderLink to="/cart">
        {hasItems && <span>{quantity}</span>}
        <RiShoppingBagLine />
      </HeaderLink>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultPropts = {
  siteTitle: '',
}

export default Header
