import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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

const PostsList = () => {
  const data = useStaticQuery<PostsQueryResult>(POSTS_LIST_QUERY)

  return data.allMarkdownRemark.edges.map(({ node }) => (
    <article key={node.frontmatter.slug}>
      <Link to={`/posts${node.frontmatter.slug}`}>
        <h2>{node.frontmatter.title}</h2>
      </Link>
      <p>
        <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
      </p>
      <p>
        {node.excerpt}{" "}
        <Link to={`/posts${node.frontmatter.slug}`}>Read more</Link>
      </p>
    </article>
  ))
}

export default PostsList
