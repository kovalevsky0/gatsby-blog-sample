import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import logo from "../images/yellow-book.svg"

const HeaderContainer = styled.div`
  background: #333;
  margin-bottom: 1.45rem;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem 0;
  display: flex;
  align-items: center;

  img {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
  }

  h1 {
    margin: 0 0 0 15px;

    a {
      color: #f4f4f4;
    }
  }
`

const Header = ({ siteTitle = "" }) => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">
        <img src={logo} alt="Logo" style={{ width: "100px" }} />
      </Link>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
