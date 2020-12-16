export interface PostsQueryResult {
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          slug: string
          date: string
        }
      }
    }[]
  }
}
