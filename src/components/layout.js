import React from "react"
import { Link } from "gatsby"

import classes from './buttonStyle.module.css'

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        
        <footer>
          <a
            href="https://mobile.twitter.com/joelgroy"
            target="_blank"
            rel="noopener noreferrer">twitter</a>{' '}
          &bull;{' '}
          <a
            href="https://github.com/teamkinex"
            target="_blank"
            rel="noopener noreferrer">github</a>{' '}
          &bull;{' '}
          <a
            href="mailto:joel.prc17cs006@student.providence.edu.in"
            target="_blank"
            rel="noopener noreferrer">Mail</a>
        </footer>
      </div>
    )
  }
}

export default Layout
