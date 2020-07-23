import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

function IndexPage({ data }) {
  const pics = data.allInstaNode.edges
  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
      <ProductGrid />
      <Link to="/page-2/">Go to page 2</Link>
      <div>
        {pics.map(({ node }) => {
          return <Img fluid={node.localFile.childImageSharp.fluid} alt="blah" />
        })}
      </div>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allInstaNode(limit: 6, sort: { fields: timestamp, order: DESC }) {
      edges {
        node {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
