import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const ImgBox = styled.div`
  height: 300px;
  width: 300px;
  box-shadow: 0 0 3px grey;
  margin: 5px;
  .dogstagram___img {
    width: 100%;
    height: 100%;
  }
`

function Dogstagram() {
  const data = useStaticQuery(
    graphql`
      query {
        allInstaNode(limit: 6, sort: { fields: timestamp, order: DESC }) {
          edges {
            node {
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
  )
  const pictures = data.allInstaNode.edges

  return (
    <Wrapper>
      {pictures.map(({ node }) => (
        <ImgBox>
          <Img
            className="dogstagram___img"
            fluid={node.localFile.childImageSharp.fluid}
            alt="blah"
          />
        </ImgBox>
      ))}
    </Wrapper>
  )
}

Dogstagram.propTypes = {}

export default Dogstagram
