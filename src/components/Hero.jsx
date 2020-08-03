import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Button from './Button';

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
  @media (min-width: 768px) {
    height: 500px;
  }
  @media (min-width: 1000px) {
    height: 700px;
  }
`;

const DimLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3) 15%,
    rgba(0, 0, 0, 0.2) 80%,
    rgba(0, 0, 0, 0)
  );
  z-index: 11;
`;

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
  h1 {
    font-size: ${props => props.theme.fontSize.larger};
    color: white;
    max-width: 80%;
    margin-bottom: 20px;
    font-weight: bold;
    @media (min-width: 600px) {
      font-size: 2.5em;
    }
    @media (min-width: 700px) {
      font-size: 3em;
      max-width: 65%;
    }
    @media (min-width: 1000px) {
      font-size: 4em;
    }
  }
`;

function Hero() {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "2.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  // console.log(data);
  return (
    <Wrapper>
      <Img
        className="hero-image"
        fluid={data.fileName.childImageSharp.fluid}
        alt="hero image of peanut butter dog treats"
      />
      <DimLayer></DimLayer>
      <Info>
        <h1>Nutritious, homemade treats for happier pups!</h1>
        <Link to="/shop">
          <Button>buy now</Button>
        </Link>
      </Info>
    </Wrapper>
  );
}

export default Hero;
