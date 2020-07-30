import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SocialMedia from './SocialMedia';

const Wrapper = styled.footer`
  width: 100%;
  padding: 20px 0;
  background: ${props => props.theme.colors.bone};
  margin-top: 15px;
  & > * {
    margin: 0 auto;
    padding: 15px 0;
    width: 85%;
    border-bottom: 1px solid ${props => props.theme.colors.dark};
  }
  a:hover {
    color: ${props => props.theme.colors.darkLight};
  }
`;

const SiteLinks = styled.div`
  display: flex;
  justify-content: space-around;
  h3 {
    border-bottom: 1px solid black;
    padding-bottom: 5px;
  }
  li {
    padding-top: 15px;
  }
  max-width: 700px;
`;

const Legal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: none;
  text-align: center;
  & > * {
    margin: 10px 0;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <SiteLinks>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cottage">Food Law</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping</Link>
            </li>
            <li>
              <Link to="/refunds">Refunds</Link>
            </li>
          </ul>
        </div>
      </SiteLinks>
      <SocialMedia size={33} />
      <Legal>
        <p>
          Web development by
          <a
            href="https://www.braxtonlemmon.com"
            target="_blank"
            rel="noreferrer"
          >
            <span> Braxton Lemmon</span>
          </a>
        </p>
        <p>
          © {new Date().getFullYear()} Peanut Butter Dog Treats. All rights
          reserved.
        </p>
      </Legal>
    </Wrapper>
  );
}

export default Footer;
