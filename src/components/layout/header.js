import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import If from 'react-ifs'

import styled from 'styled-components'
import Logo from './logo'

import * as a from '../../actions/auth-actions'
import ReduxPOL from '../redux-pol'

const HeaderEl = styled.div`
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  /* checkbox */
  > input {
    /* To move the checkbox off-screen */
    left: -100vw;
    position: absolute;
    &:checked ~ header {
      > nav {
        left: 0;
        outline: none;
        box-shadow: 35px 0 70px rgba(0, 0, 0, 0.5);

        > label {
          z-index: 1001;
        }
        > ul {
          position: relative;
          z-index: 1000;
        }
      }
      > label.backdrop {
        background: rgba(0, 0, 0, 0.05);
        content: '';
        cursor: default;
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 998;
      }
    }
  }

  header {
    align-items: stretch;
    background: #e0e0e0;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0 0 1.45rem 0;
    width: 100%;

    /* checkbox label*/
    > label.menu-toggle {
      align-items: center;
      background: #53ec86;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 20vw;
    }

    /* logo and title container */
    > div {
      align-items: center;
      background: lightblue;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      padding: 0.3rem 0;
      width: 80vw;
      > svg {
        height: 40px;
        width: 40px;
      }
      > h1 {
        border: none;
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        > a {
          color: #000;
          margin: none;
          text-decoration: none;
        }
      }
    }

    > nav {
      height: 100vh;
      left: -200px;
      overflow-x: visible;
      position: absolute;
      top: 0;
      transition: left 0.2s ease, box-shadow 0.3s ease;
      z-index: 999;

      /* "close" button in the menu */
      > label {
        background: #ff5a5a;
        color: #fff;
        display: block;
        padding: 0.75em 15px;
        line-height: 1em;
        font-size: 1em;
        font-weight: bold;
        text-decoration: none;
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        &:hover {
          background: #fff;
          color: #ff5a5a;
          text-decoration: none;
        }
      }

      > ul {
        background: #fff;
        list-style: none;
        margin: 0;
        min-height: calc(100vh - 2.5em);
        padding: 2.5em 0 0;
        width: 200px;

        > li {
          > a {
            border-top: 1px solid #000;
            display: block;
            padding: 0.75em 15px;
            line-height: 1em;
            font-size: 1em;
            color: #000;
            text-decoration: none;
            &:hover,
            &:focus {
              text-decoration: none;
            }
          }
          /* Rainbow background colors on hover */
          &:nth-child(1) > a:hover {
            background: #fe9959;
          }
          &:nth-child(2) > a:hover {
            background: #fcd859;
          }
          &:nth-child(3) > a:hover {
            background: #9ef657;
          }
          &:nth-child(4) > a:hover {
            background: #5ecddd;
          }
          &:nth-child(5) > a:hover {
            background: #4655c7;
          }
          &:nth-child(6) > a:hover {
            background: #883dad;
          }
          &:last-child {
            > a {
              border-bottom: 1px solid #000;
            }
          }
        }
      }
    }
  }

  /* Desktop-width styles ---------------------------------------*/
  @media (min-width: 768px) {
    /* checkbox */
    > input {
      display: none;
    }

    > header {
      /* checkbox label*/
      > label.menu-toggle {
        display: none;
        > span {
          display: none;
        }
      }

      /* logo and title container */
      > div {
        > svg {
        }
        > h1 {
        }
      }

      > nav {
        position: relative;
        left: auto;
        top: auto;
        height: auto;
        ${'' /* for MS Edge scrollbar issue  */}
        overflow-y: auto;

        /* "close menu" button */
        > label {
          display: none;
          > span {
            display: none;
          }
        }

        /* list of nav links */
        > ul {
          display: flex;
          box-shadow: none;
          height: auto;
          width: auto;
          background: none;
          padding: 0;
          > li {
            > a {
              &:hover,
              &:focus {
                ${'' /* Remove background from off-canvas styling  */}
                background: none;
                color: #c00;
              }
            }
          }
        }
      }

      /* backdrop for menu */
      > label.backdrop {
      }
    }
  }
`

const Header = ({ loggedIn, logout, siteTitle }) => (
  <HeaderEl>
    <input id="main-menu-checkbox" type="checkbox" />
    <header>
      <label htmlFor="main-menu-checkbox" className="menu-toggle">
        <span className="sr-only">Menu</span>

        <span className="fa fa-bars" />
      </label>

      <div>
        <Logo />
        <h1 className="logo">
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <nav id="main-menu" role="navigation" className="main-menu">
        <label htmlFor="main-menu-checkbox" className="menu-close">
          <span className="sr-only">Close</span>
          <span className="fa fa-close" />
        </label>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/rubric">Rubric</Link>
          </li>

          <If condition={loggedIn}>
            <li>
              <Link to="/app/list/">All Users</Link>
            </li>

            <li>
              <a href="#logout" onClick={logout}>
                Logout
              </a>
            </li>
          </If>
        </ul>
      </nav>
      <label
        htmlFor="main-menu-checkbox"
        className="backdrop"
        tabIndex={-1}
        hidden
      />
    </header>
  </HeaderEl>
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
