import { GatsbyNode } from "gatsby"
import path from "path"
import { AllMarkdownRemark } from "./src/types"

const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const results = await graphql<
    AllMarkdownRemark<{
      frontmatter: {
        slug: string
      }
    }>
  >(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  results.data?.allMarkdownRemark.edges.forEach(
    ({
      node: {
        frontmatter: { slug },
      },
    }) => {
      createPage({
        path: `/posts${slug}`,
        component: path.resolve("./src/components/PostLayout.tsx"),
        context: {
          slug,
        },
      })
    }
  )
}

exports.createPages = createPages
