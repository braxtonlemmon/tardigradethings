import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  #nav-icon3 {
    width: 36px;
    height: 30px;
    /* border: 1px solid black; */
    position: relative;
    margin: 0 auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  #nav-icon3 span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: ${props => props.theme.colors.dark};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon3 span:nth-child(1) {
    top: 0px;
  }

  #nav-icon3 span:nth-child(2),
  #nav-icon3 span:nth-child(3) {
    top: 12px;
  }

  #nav-icon3 span:nth-child(4) {
    top: 24px;
  }

  #nav-icon3 span:nth-child(1) {
    ${props =>
      props.open &&
      css`
        top: 18px;
        width: 0%;
        left: 50%;
      `}
  }

  #nav-icon3 span:nth-child(2) {
    ${props =>
      props.open &&
      css`
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      `}
  }

  #nav-icon3 span:nth-child(3) {
    ${props =>
      props.open &&
      css`
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      `}
  }

  #nav-icon3 span:nth-child(4) {
    ${props =>
      props.open &&
      css`
        top: 18px;
        width: 0%;
        left: 50%;
      `}
  }
`

function Hamburger({ handleMenuClick, isMenuOpen }) {
  return (
    <Wrapper onClick={handleMenuClick} open={isMenuOpen}>
      <div id="nav-icon3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Wrapper>
  )
}

export default Hamburger
