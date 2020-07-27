import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from '../components/Header'
import PromoBanner from '../components/PromoBanner'
import ContextProvider from '~/provider/ContextProvider'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  width: 100%;
  min-height: 100vh;
`

const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`

const Layout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <ContextProvider>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <Container>
            <PromoBanner />
            <Header
              siteTitle={data.site.siteMetadata.title}
              handleMenuClick={handleMenuClick}
              isMenuOpen={isMenuOpen}
            />
            <Main>{children}</Main>
            <Footer />
          </Container>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
