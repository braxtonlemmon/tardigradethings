import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import StoreContext from '~/context/StoreContext'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { RiShoppingBagLine } from 'react-icons/ri'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 10px;
  background: ${props => props.theme.colors.card};
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.6);
  z-index: 500;

  .logo {
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }
`

const HeaderLink = styled(Link)`
  color: ${props => props.theme.colors.dark};
  h1 {
    font-size: ${props => props.theme.fontSize.medium};
    width: 150px;
    line-height: ${props => props.theme.fontSize.large};
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

function Header({ siteTitle }) {
  const [hasItems, quantity] = useQuantity()
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const logo = data.file.childImageSharp.fixed
  return (
    <Wrapper>
      <Img className="logo" fixed={logo} alt="dog treat logo" />
      <HeaderLink to="/">
        <h1>{siteTitle}</h1>
      </HeaderLink>
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
