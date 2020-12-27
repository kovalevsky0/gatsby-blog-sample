import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { PostsQueryResult } from "../types"

const POSTS_LIST_QUERY = graphql`
  query BlogPostsList {
    allMarkdownRemark(
      limit: 8
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "DD.MM.YYYY")
          }
        }
      }
    }
  }
`

const PostBlock = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  background: #fdfdfd;

  &:hover {
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.1);
  }

  & > a {
    color: #333;
    text-decoration: none;
    border-bottom: 3px solid rgba(51, 51, 51, 0.55);
    display: inline-block;

    h2 {
      margin: 0;
    }
  }
`

const PostsList = () => {
  const data = useStaticQuery<PostsQueryResult>(POSTS_LIST_QUERY)

  return (
    <>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostBlock key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>
            <time dateTime={node.frontmatter.date}>
              {node.frontmatter.date}
            </time>
          </p>
          <p>
            {node.excerpt}{" "}
            <Link to={`/posts${node.frontmatter.slug}`}>Read more</Link>
          </p>
        </PostBlock>
      ))}
    </>
  )
}

export default PostsList
