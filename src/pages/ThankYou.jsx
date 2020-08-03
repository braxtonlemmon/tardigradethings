import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '~/utils/styles';
import SEO from '~/components/seo';

const Wrapper = styled(PageWrapper)`
  .thank-you-intro {
    margin: 15px;
    text-align: center;
  }
`;

function ThankYou() {
  return (
    <>
      <SEO
        title="Thank You"
        keywords={['dog treats', 'peanut butter', 'subscription', 'dogs']}
        description="Thank You Page of Peanut Butter Dog Treats"
      />
      ;
      <Wrapper>
        <h1>Thank you!</h1>
        <p className="thank-you-intro">
          Your message is on the way. I will get back to you soon!{' '}
        </p>
      </Wrapper>
    </>
  );
}

export default ThankYou;
