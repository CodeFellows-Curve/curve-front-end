import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import If from 'react-ifs'

import * as a from '../../actions/auth-actions'
import ReduxPOL from '../redux-pol'

const navLink = { color: 'white', marginRight: 6 }

const Header = ({ loggedIn, logout, siteTitle }) => (
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
          marginBottom: 5,
          width: '50%',
        }}
      >
        <Link to="/" style={navLink}>
          Home
        </Link>
        <Link to="/about" style={navLink}>
          About
        </Link>
        <Link to="/rubric" style={navLink}>
          Rubric
        </Link>
        <If condition={loggedIn}>
          <Link to="/app/secret-swapi/" style={navLink}>
            Remote GraphQL Query
          </Link>

          <a href="#logout" onClick={logout} style={navLink}>
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

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn })

const mapDispatchToProps = dispatch => ({
  logout: callback => dispatch(a.logout(callback)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
