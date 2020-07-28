import React from 'react';
// import styled from 'styled-components'
import { PageWrapper } from '~/utils/styles';
import Slider from '~/components/Slider';
import ShopProducts from '~/components/ShopProducts';

function Shop() {
  return (
    <PageWrapper>
      <h1>Shop</h1>
      <Slider />
      <ShopProducts />
    </PageWrapper>
  );
}

export default Shop;
