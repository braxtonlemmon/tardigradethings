import React from 'react';
import styled from 'styled-components';
import { GrInstagram, GrFacebook, GrPinterest } from 'react-icons/gr';
import { FaFacebookMessenger, FaGoogle } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.dark};
  .social-icon {
    height: ${props => `${props.size}px`};
    width: ${props => `${props.size}px`};
    &:hover {
      color: ${props => props.theme.colors.darkLight};
    }
  }
  a {
    margin: 0 15px;
  }
`;

function SocialMedia({ size }) {
  return (
    <Wrapper size={size}>
      <a
        href="http://instagram.com/peanutbutterdogtreats"
        target="_blank"
        rel="noreferrer"
      >
        <GrInstagram className="social-icon" />
      </a>
      <a
        href="https://www.facebook.com/peanutbuttertreats/"
        target="_blank"
        rel="noreferrer"
      >
        <GrFacebook className="social-icon" />
      </a>
      <a
        href="https://www.pinterest.com/peanutbuttertreats/"
        target="_blank"
        rel="noreferrer"
      >
        <GrPinterest className="social-icon" />
      </a>
      <a
        href="https://m.me/peanutbuttertreats"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookMessenger className="social-icon" />
      </a>
      <a
        href="https://g.page/peanutbutterdogtreats"
        target="_blank"
        rel="noreferrer"
      >
        <FaGoogle className="social-icon" />
      </a>
    </Wrapper>
  );
}

export default SocialMedia;
