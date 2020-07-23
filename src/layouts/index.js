import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from '../components/Header'
import PromoBanner from '../components/PromoBanner'
import ContextProvider from '~/provider/ContextProvider'
import Footer from '../components/Footer'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`

const Layout = ({ children }) => {
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
          <>
            <PromoBanner />
            <Header siteTitle={data.site.siteMetadata.title} />
            {/* <Navigation siteTitle={data.site.siteMetadata.title} /> */}
            <Wrapper>{children}</Wrapper>
            <Footer />
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
