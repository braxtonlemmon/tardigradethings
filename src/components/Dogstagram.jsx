import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { HomeHeading } from '~/utils/styles';
import DogstagramPopup from './DogstagramPopup';
import { FaInstagram } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 100%;
`;
const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px;
  width: 100%;

  max-width: 1000px;
`;

const ImgBox = styled.div`
  position: relative;
  height: 150px;
  width: 150px;
  box-shadow: 0 0 3px grey;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
  .dogstagram___img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  @media (min-width: 660px) {
    height: 300px;
    width: 300px;
  }
`;

const DimLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 200ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 1;
  }
`;

const InstaLogo = styled(FaInstagram)`
  color: rgba(255, 255, 255, 0.8);
`;

function Dogstagram() {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const data = useStaticQuery(
    graphql`
      query {
        allInstaNode(limit: 6, sort: { fields: timestamp, order: DESC }) {
          edges {
            node {
              id
              timestamp
              caption
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const pictures = data.allInstaNode.edges;

  const handleClick = (e, index) => {
    setSelected(index);
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <HomeHeading>Dogstagram</HomeHeading>
      <Images>
        {pictures.map(({ node }, index) => (
          <ImgBox onClick={e => handleClick(e, index)}>
            <Img
              className="dogstagram___img"
              fluid={node.localFile.childImageSharp.fluid}
              alt="blah"
            />
            <DimLayer>
              <InstaLogo size={60} />
            </DimLayer>
          </ImgBox>
        ))}
      </Images>
      {isOpen && (
        <DogstagramPopup
          pictures={pictures}
          handleClosePopup={handleClosePopup}
          selected={selected}
        />
      )}
    </Wrapper>
  );
}

Dogstagram.propTypes = {};

export default Dogstagram;
