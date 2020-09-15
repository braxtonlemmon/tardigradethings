import React from 'react';
import styled from 'styled-components';
import ShopFormContainer from './ShopFormContainer';
import { graphql, useStaticQuery } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  position: relative;
`;

const Description = styled.div`
  width: 90%;
  max-width: 500px;
  background: rgba(0, 0, 0, 0.07);
  padding: 5px 20px;
  border-radius: 15px;
  p {
    margin: 20px 0;
    line-height: 1.5em;
    &:first-child {
      margin: 20px 0 10px 0;
    }
  }
  li {
    list-style: circle;
    margin: 4px 0 4px 20px;
  }
`;

function ShopProducts() {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       shopifyProduct(title: { eq: "Peanut Butter Oats 10oz" }) {
  //         descriptionHtml
  //       }
  //       allShopifyProduct {
  //         edges {
  //           node {
  //             title
  //             shopifyId
  //             variants {
  //               title
  //               price
  //               shopifyId
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // );
  // const productOptions = data.allShopifyProduct.edges;
  // const description = data.shopifyProduct.descriptionHtml;
  // console.log(products);
  return (
    <Wrapper>
      <ShopFormContainer productOptions={productOptions} />
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </Wrapper>
  );
}

ShopProducts.propTypes = {};

export default ShopProducts;
