import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';

const slide = keyframes`
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
`;
const Container = styled.div`
  width: 300px;
  height: 400px;
  margin: 20px 0;
  border-radius: 15px;
  @media (min-width: 412px) {
    width: 400px;
    height: 400px;
  }
  @media (min-width: 768px) {
    height: 550px;
    width: 550px;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  .image {
    animation-delay: 0.1s;
    animation: ${slide} 0.8s;
    height: 100%;
    width: 100%;
    border-radius: 15px;
  }
`;

const FakeImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 50px black;
  z-index: 1;
  border-radius: 15px;
`;

const ButtonsBox = styled.div`
  display: ${props => (props.multiple === true ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  z-index: 15;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ArrowBox = styled.div`
  display: flex;
  width: 40%;
  height: 80%;
  align-items: center;
  justify-content: baseline;
  cursor: pointer;
  .image-slider___right {
    margin-left: auto;
  }
  .image-slider___button {
    color: rgba(255, 255, 255, 0.6);
    z-index: 16;
    height: 60px;
    width: 60px;
    @media (min-width: 600px) {
      height: 80px;
      width: 80px;
    }
  }
  &:hover .image-slider___button {
    color: white;
    transform: scale(1.05);
  }
`;

function ImageSlider() {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: { relativeDirectory: { eq: "slider" }, ext: { eq: ".jpg" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );
  const images = data.allFile.edges;
  const [index, setIndex] = useState(1);

  const length = images.length - 1;

  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1);
  };

  const handlePrevious = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1);
  };

  return (
    <Container>
      <ImgWrapper>
        <FakeImg></FakeImg>
        <Img
          className="image"
          fluid={images[index].node.childImageSharp.fluid}
          key={`image${index}`}
          alt={images[index].node.name}
        />
        <ButtonsBox multiple={images.length > 1}>
          <ArrowBox onClick={() => handlePrevious()}>
            <FaAngleLeft className="image-slider___button" />
          </ArrowBox>
          <ArrowBox onClick={() => handleNext()}>
            <FaAngleRight className="image-slider___button image-slider___right" />
          </ArrowBox>
        </ButtonsBox>
      </ImgWrapper>
    </Container>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.array,
};

export default ImageSlider;
