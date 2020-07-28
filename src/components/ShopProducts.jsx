import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import ShopFormContainer from './ShopFormContainer';
import { graphql, useStaticQuery } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  position: relative;
`;

function ShopProducts() {
  const data = useStaticQuery(
    graphql`
      query {
        allShopifyProduct {
          edges {
            node {
              id
              title
              handle
              productType
              description
              descriptionHtml
              shopifyId
              options {
                id
                name
                values
              }
              variants {
                id
                title
                price
                availableForSale
                shopifyId
                selectedOptions {
                  name
                  value
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              images {
                originalSrc
                id
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const products = data.allShopifyProduct.edges;

  return (
    <Wrapper>
      <h1>Peanut Butter Dog Treats</h1>
      <ShopFormContainer products={products} />
      <div>
        <p>details</p>
      </div>
    </Wrapper>
  );
}

ShopProducts.propTypes = {};

export default ShopProducts;
