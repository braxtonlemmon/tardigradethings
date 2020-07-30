import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '~/utils/styles';
import { graphql, useStaticQuery } from 'gatsby';

const Body = styled.div`
  padding: 20px;
  line-height: 1.5em;
`;

function Refunds() {
  const data = useStaticQuery(
    graphql`
      query {
        allShopifyShopPolicy {
          edges {
            node {
              title
              body
            }
          }
        }
      }
    `
  );

  return (
    <PageWrapper>
      <h1>{data.allShopifyShopPolicy.edges[0].node.title}</h1>
      <Body
        dangerouslySetInnerHTML={{
          __html: data.allShopifyShopPolicy.edges[0].node.body,
        }}
      ></Body>
    </PageWrapper>
  );
}

export default Refunds;
