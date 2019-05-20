import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import If from 'react-ifs'
import { isLoggedIn, logout } from '../../utils/auth'

import ReduxPOL from '../redux-pol'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        <Link to="/" style={{ color: `white` }}>
          Home
        </Link>
        <Link to="/about" style={{ color: `white` }}>
          About
        </Link>
        <Link to="/rubric" style={{ color: `white` }}>
          Rubric
        </Link>
        <If condition={isLoggedIn()}>
          <a href="#logout" onClick={logout} style={{ color: `white` }}>
            Logout
          </a>
        </If>
      </nav>
      <ReduxPOL />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
