import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { GrInstagram, GrFacebook, GrPinterest } from 'react-icons/gr'
import { FaFacebookMessenger } from 'react-icons/fa'

const Wrapper = styled.footer`
  width: 100%;
  padding: 20px;
  background: ${props => props.theme.colors.pb};
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
`

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
`

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.dark};
  .social-icon {
    height: 40px;
    width: 40px;
    &:hover {
      color: ${props => props.theme.colors.darkLight};
    }
  }
  a {
    margin: 0 15px;
  }
`

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
`

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
              <Link to="/">Food Law</Link>
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
      <SocialMedia>
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
      </SocialMedia>
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
  )
}

export default Footer
