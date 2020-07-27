import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`

const DimLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4) 20%,
    rgba(0, 0, 0, 0.4) 80%,
    rgba(0, 0, 0, 0)
  );
  z-index: 11;
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  p {
    width: 70%;
    max-width: 400px;
    color: white;
    font-size: ${props => props.theme.fontSize.medium};
    font-weight: bold;
    line-height: 1.4em;
  }
  p::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background: inherit;
    background-attachment: fixed;
    filter: blur(12px);
    transform: scale(2);
    width: 100%;
    height: 100%;
  }
  h1 {
    font-size: ${props => props.theme.fontSize.larger};
    color: white;
    max-width: 80%;
    margin-bottom: 20px;
    font-weight: bold;
  }
`

function Hero() {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Wrapper>
      <Img
        className="hero-image"
        fluid={data.fileName.childImageSharp.fluid}
        alt="hero"
      />
      <DimLayer></DimLayer>
      <Info>
        <h1>Nutritious, homemade treats for happier pups!</h1>
        {/* <p>
          These goodies are made with all-natural oats and gluten-free peanut
          butter. No xylitol, no artificial preservatives, no artificial
          flavoring, doggy taste tested!{' '}
        </p> */}
        {/* <p>All-natural and doggy taste-tested!</p> */}
        <button>Buy now!</button>
      </Info>
    </Wrapper>
  )
}

export default Hero
