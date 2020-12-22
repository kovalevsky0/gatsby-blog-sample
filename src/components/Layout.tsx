import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useLocation } from "@reach/router"
import styled from "styled-components"

import Header from "./Header"
import PostsMap from "./PostsMap"

import "./layout.css"

const LayoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

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
      file(relativePath: { regex: "/bg-post/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Img fluid={data.file.childImageSharp.fluid}></Img>
      <LayoutContainer>
        <p>{data.site.siteMetadata?.description}</p>
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
      </LayoutContainer>
    </>
  )
}

export default Layout
