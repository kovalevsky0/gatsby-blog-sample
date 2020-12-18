export interface AllMarkdownRemark<Node> {
  allMarkdownRemark: {
    edges: {
      node: Node
    }[]
  }
}

export type PostsQueryResult = AllMarkdownRemark<{
  excerpt: string
  frontmatter: {
    title: string
    slug: string
    date: string
  }
}>

export interface PostLayoutProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}
