import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import PromoBanner from '../PromoBanner'
import StoreContext from '~/context/StoreContext'
import styled from 'styled-components'
import Header from '../Header'

const Wrapper = styled.header`
  width: 100%;
  position: sticky;
`

const Navigation = ({ siteTitle }) => {
  return (
    <Wrapper>
      <PromoBanner />
      <Header siteTitle={siteTitle} />
    </Wrapper>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
