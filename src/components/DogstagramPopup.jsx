import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
const moment = require('moment');

const slide = keyframes`
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
  cursor: pointer;
  /* overflow-y: scroll; */
`;

const Wrapper = styled.div`
  position: fixed;
  top: 30px;
  height: 90%;
  max-height: 700px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  width: 95%;
  max-width: 700px;
  padding: 15px 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  background: white;
  overflow-y: scroll;
  cursor: default;
  h2 {
    font-size: ${props => props.theme.fontSize.larger};
    margin-bottom: 10px;
    color: ${props => props.theme.colors.dark};
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 10px;
  background: blue;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  .dogstagram-popup-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    animation-delay: 0.1s;
    animation: ${slide} 0.8s;
  }
  @media (min-width: 412px) {
    height: 380px;
    width: 380px;
  }
  @media (min-width: 600px) {
    height: 430px;
    width: 430px;
  }
`;

const ButtonsBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  height: 100%;
  width: 100%;
  padding: 0 10px;
  display: flex;
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
    color: rgba(255, 255, 255, 0.9);
    z-index: 16;
    height: 40px;
    width: 40px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
  }
  &:hover .image-slider___button {
    color: white;
    transform: scale(1.05);
  }
`;

const InfoRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .insta-name {
    color: ${props => props.theme.colors.card};
    font-size: 0.9em;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.darkLight};
    }
  }
`;

const LogoBox = styled.div`
  height: 60px;
  width: 60px;
  margin: 5px 5px 5px 0;
  background: linear-gradient(to top right, #f99b4a, #ec5d4d, #c52e91);
  border-radius: 50%;
  padding: 2px;
  .dogstagram-popup-logo {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
`;

const Caption = styled.p`
  margin: 10px;
  padding-top: 10px;
  border-top: 1px solid ${props => props.theme.colors.light};
`;

const Date = styled.p`
  align-self: flex-start;
  margin: 10px;
  font-style: italic;
  padding-bottom: 15px;
`;

const Close = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 500;
  color: ${props => props.theme.colors.dark};
  &:hover {
    color: ${props => props.theme.colors.darkLight};
  }
`;

function DogstagramPopup({ pictures, handleClosePopup, selected }) {
  const data = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "insta-logo" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  );
  const [index, setIndex] = useState(selected);
  const length = pictures.length - 1;

  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1);
  };

  const handlePrevious = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1);
  };

  const formatDate = timestamp => {
    const time = parseInt(timestamp) * 1000;
    return moment(time).format('MMMM DD, YYYY');
  };

  console.log(pictures);
  return (
    <Container onClick={handleClosePopup} id="dogstagram-popup">
      <Wrapper onClick={e => e.stopPropagation()}>
        <h2>DOGSTAGRAM</h2>
        <ImageBox>
          <Img
            className="dogstagram-popup-image"
            fluid={pictures[index].node.localFile.childImageSharp.fluid}
            key={`dogstagram-slider-${index}`}
            alt="blah"
          />
          <ButtonsBox multiple={pictures.length > 1}>
            <ArrowBox onClick={() => handlePrevious()}>
              <FaAngleLeft className="image-slider___button" />
            </ArrowBox>
            <ArrowBox onClick={() => handleNext()}>
              <FaAngleRight className="image-slider___button image-slider___right" />
            </ArrowBox>
          </ButtonsBox>
        </ImageBox>
        <InfoRow>
          <a
            href={`https://www.instagram.com/p/${pictures[index].node.id}/`}
            target="_blank"
            rel="noreferrer"
          >
            <LogoBox>
              <Img
                className="dogstagram-popup-logo"
                fluid={data.file.childImageSharp.fluid}
                key="asdf"
                alt="kkkllll"
              />
            </LogoBox>
          </a>
          <a
            href={`https://www.instagram.com/p/${pictures[index].node.id}/`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="insta-name">@peanutbutterdogtreats</p>
          </a>
        </InfoRow>
        <Caption>{pictures[index].node.caption}</Caption>
        <Date>{formatDate(pictures[index].node.timestamp)}</Date>
        <Close onClick={handleClosePopup} size={30} />
      </Wrapper>
    </Container>
  );
}

DogstagramPopup.propTypes = {
  pictures: PropTypes.array,
  handleClosePopup: PropTypes.func,
};

export default DogstagramPopup;
