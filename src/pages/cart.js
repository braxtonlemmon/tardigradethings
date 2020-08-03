import React from 'react';
import Cart from '~/components/Cart';
import { PageWrapper } from '~/utils/styles';
import SEO from '~/components/seo';

const CartPage = () => (
  <>
    <SEO
      title="Cart"
      keywords={[
        'cart',
        'items',
        'dog treats',
        'peanut butter',
        'subscription',
        'dogs',
      ]}
      description="Peanut Butter Dog Treats Shopping Cart"
    />
    <PageWrapper>
      <h1>Your Cart</h1>
      <Cart />
    </PageWrapper>
  </>
);

export default CartPage;
