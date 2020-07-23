import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.footer`
  width: 100%;
  padding: 20px;
  background: blue;
  margin-top: 15px;
`

function Footer() {
  return (
    <Wrapper>
      <p>
        © {new Date().getFullYear()} Peanut Butter Dog Treats. All rights
        reserved.
      </p>
      <p>
        Web development by
        <a href="https://www.braxtonlemmon.com" target="_blank">
          Braxton Lemmon
        </a>
      </p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/refunds">Refunds</Link>
        </li>
        <li>
          <Link to="/shipping">Shipping</Link>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Footer
