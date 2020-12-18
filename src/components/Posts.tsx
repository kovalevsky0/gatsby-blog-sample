import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { PostsQueryResult } from "../types"

const POST_QUERY = graphql`
  query BlogPosts {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "DD-MM-YYYY")
          }
        }
      }
    }
  }
`

const Posts = () => {
  const { allMarkdownRemark } = useStaticQuery<PostsQueryResult>(POST_QUERY)

  return (
    <>
      <aside>
        <h1>Posts</h1>
        {allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.frontmatter.slug}>
            <h3>
              <Link to={`/posts${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h3>
            <p>
              Date:{" "}
              <time dateTime={node.frontmatter.date}>
                {node.frontmatter.date}
              </time>
            </p>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </aside>
    </>
  )
}

export default Posts
