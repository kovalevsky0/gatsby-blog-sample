import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { PostsQueryResult } from "../types"

const POST_QUERY = graphql`
  query BlogPostsMap {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const PostsMap = () => {
  const { allMarkdownRemark } = useStaticQuery<PostsQueryResult>(POST_QUERY)

  return (
    <>
      <aside>
        <h2>See Also</h2>
        {allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.frontmatter.slug}>
            <Link to={`/posts${node.frontmatter.slug}`}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
          </div>
        ))}
      </aside>
    </>
  )
}

export default PostsMap
