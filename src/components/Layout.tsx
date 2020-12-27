import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import Header from "./Header"
import PostsMap from "./PostsMap"

import "./layout.css"

const LayoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Description = styled.div`
  padding: 1.5rem 1rem;
  font-style: italic;
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
      file(relativePath: { regex: "/bg.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const props = useSpring({
    from: {
      height: 400,
    },
    to: { height: location.pathname === "/" ? 500 : 0 },
  })

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <animated.div style={{ overflow: "hidden", ...props }}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </animated.div>
      <LayoutContainer>
        <Description>{data.site.siteMetadata?.description}</Description>
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
