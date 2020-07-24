import React from 'react'
import { Link } from 'gatsby'
import Dogstagram from '../components/Dogstagram'
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import Hero from '~/components/Hero'

function IndexPage({ data }) {
  return (
    <>
      <SEO
        title="Home"
        keywords={['dog treats', 'peanut butter', 'subscription', 'dogs']}
      />
      <Hero />
      <ProductGrid />
      <Dogstagram />
    </>
  )
}

export default IndexPage
