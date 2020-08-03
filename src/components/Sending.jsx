import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 25%;
  width: 200px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  /* 50% { transform: rotate(250deg); } */
  100% { transform: rotate(360deg); }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Spinner = styled.div`
  position: absolute;
  top: 0;
  border: 30px double ${props => props.theme.colors.card};
  border-top: 30px solid ${props => props.theme.colors.card};
  border-radius: 50%;
  width: 200px;
  height: 200px;
  animation: ${spin} 2s linear infinite;
  z-index: 5;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  color: black;
`;

function Sending() {
  return (
    <Wrapper>
      <Container>
        <Spinner></Spinner>
        <Blur>
          <p>Sending</p>
        </Blur>
      </Container>
    </Wrapper>
  );
}

export default Sending;
