import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '~/utils/styles';
import { graphql } from 'gatsby';

const Post = styled.div`
  width: 90%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.colors.darkLight};
  &:last-child {
    border-bottom: none;
  }
  h2 {
    font-size: ${props => props.theme.fontSize.large};
    margin-bottom: 15px;
    text-align: center;
  }

  .blog-date {
    margin-bottom: 15px;
  }
  .blog-content {
    line-height: 1.5em;
    color: #666666;
  }
  p {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  p img {
    margin: 10px auto;
  }
  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  span img {
    margin: 0 auto;
    padding: 5px;
  }
  ul {
    margin: 15px 0;
  }
  li {
    list-style: disc;
    margin-left: 15px;
  }
  img {
    max-width: 90% !important;
  }
`;
function Blog({ data }) {
  const articles = data.allShopifyArticle.edges;

  return (
    <PageWrapper>
      <h1>Blog</h1>
      {articles.map(article => (
        <Post>
          <h2>{article.node.title}</h2>
          <p className="blog-date">{article.node.publishedAt}</p>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: article.node.contentHtml }}
          ></div>
        </Post>
      ))}
    </PageWrapper>
  );
}

export default Blog;

export const query = graphql`
  query BlogPageQuery {
    allShopifyArticle(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          title
          content
          excerpt
          seo {
            title
            description
          }
          tags
          contentHtml
          publishedAt(formatString: "MMMM DD, YYYY")
          image {
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
  }
`;
