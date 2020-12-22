import React from "react"
import { graphql } from "gatsby"

import Layout from "./Layout"
import { PostLayoutProps } from "../types"

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
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
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      ></div>
    </Layout>
  )
}

export default PostLayout
