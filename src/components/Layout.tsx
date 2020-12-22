import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

import Header from "./Header"
import PostsMap from "./PostsMap"

import "./layout.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {data.site.siteMetadata?.description && (
          <p>{data.site.siteMetadata?.description}</p>
        )}
        <main>{children}</main>
        {location.pathname.includes("/posts") && <PostsMap />}
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
