import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Dogstagram from '../components/Dogstagram'
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

function IndexPage({ data }) {
  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
      <ProductGrid />
      <Link to="/page-2/">Go to page 2</Link>
      <Dogstagram />
    </>
  )
}

export default IndexPage
