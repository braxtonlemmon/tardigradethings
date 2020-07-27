import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { HomeHeading } from '~/utils/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 100%;
`
const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

const ImgBox = styled.div`
  height: 400px;
  width: 300px;
  box-shadow: 0 0 3px grey;
  margin: 5px;
  border-radius: 10px;
  .dogstagram___img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`

function Dogstagram() {
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
  )
  const pictures = data.allInstaNode.edges

  return (
    <Wrapper>
      <HomeHeading>Dogstagram</HomeHeading>
      <Images>
        {pictures.map(({ node }) => (
          <ImgBox>
            <a href={`https://www.instagram.com/p/${node.id}/`} target="_blank">
              <Img
                className="dogstagram___img"
                fluid={node.localFile.childImageSharp.fluid}
                alt="blah"
              />
            </a>
          </ImgBox>
        ))}
      </Images>
    </Wrapper>
  )
}

Dogstagram.propTypes = {}

export default Dogstagram
