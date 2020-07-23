import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from '../components/Header'
import PromoBanner from '../components/PromoBanner'

import ContextProvider from '~/provider/ContextProvider'

import Navigation from '~/components/Navigation'

const Wrapper = styled.div`
  margin: 0 auto;
`

const Container = styled.div``

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
            <Wrapper>
              {children}
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </Wrapper>
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
