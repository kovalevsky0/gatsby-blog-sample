import React from "react"
import { graphql } from "gatsby"

import Layout from "./Layout"
import { PostLayoutProps } from "../types"

export const query = graphql`
  query BlogPost {
    markdownRemark(frontmatter: { slug: { eq: "/greetings-post" } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

const PostLayout = ({ data: { markdownRemark } }: PostLayoutProps) => {
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <p>
        <time dateTime={markdownRemark.frontmatter.date}>
          {markdownRemark.frontmatter.date}
        </time>
      </p>
      <div>{markdownRemark.html}</div>
    </Layout>
  )
}

export default PostLayout
