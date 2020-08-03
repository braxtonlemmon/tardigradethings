import React from 'react';
// import styled from 'styled-components'
import { PageWrapper } from '~/utils/styles';
import Slider from '~/components/Slider';
import ShopProducts from '~/components/ShopProducts';
import SEO from '~/components/seo';
function Shop() {
  return (
    <>
      <SEO
        title="Shop"
        keywords={[
          'shop',
          'dog treats',
          'peanut butter',
          'subscription',
          'dogs',
        ]}
        description="Peanut Butter Dog Treats Shop"
      />
      ;
      <PageWrapper>
        <h1>Shop</h1>
        <Slider />
        <ShopProducts />
      </PageWrapper>
    </>
  );
}

export default Shop;
