import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.dark};
  padding: 15px;
  text-align: center;
  letter-spacing: 2px;
  background: ${props => props.theme.colors.promo};
  line-height: 1.1em;
`;

function PromoBanner() {
  return (
    <Wrapper>
      <h2>Subscribe for a recurring box and get 5% off!</h2>
    </Wrapper>
  );
}

export default PromoBanner;
