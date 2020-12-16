import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { PostsQueryResult } from "../types"

const Posts = () => {
  const { allMarkdownRemark } = useStaticQuery<PostsQueryResult>(graphql`
    query BlogPosts {
      allMarkdownRemark {
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
  `)

  return (
    <>
      <aside>
        <h1>Posts</h1>
        {allMarkdownRemark.edges.map(({ node }, index) => (
          <div key={index}>
            <h3>{node.frontmatter.title}</h3>
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
