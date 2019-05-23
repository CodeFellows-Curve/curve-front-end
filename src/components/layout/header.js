import React from 'react'
import { Provider } from "react-redux";
import { connect } from 'react-redux'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import If from 'react-ifs'

import styled from 'styled-components'
import Logo from './logo'

import * as a from '../../actions/auth-actions'
import authService from '../../utils/auth-service'


// TODO: Move all this styling for the header and mobile site-menu into a separate file. Consider using something else besides styled components for this piece. It's already in a scss format below;
const HeaderEl = styled.div`

  // * {
  //   box-sizing: inherit;
    
  // }
  // *:before {
  //   box-sizing: inherit;
  // }
  // *:after {
  //   box-sizing: inherit;
  // }

  header {
    background: #9053c7;
    background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
    background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
    background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
    background: linear-gradient(-135deg, #c850c0, #4158d0);
    align-items: stretch;
    ${'' /* background: #e0e0e0; */}
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
      ${'' /* background: lightblue; */}
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
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-bottom: 1.45rem;

    /* checkbox */
    > input {
      display: none;
    }

    > header {
      margin: 0;
      width:100%;
      > label.menu-toggle {
        display: none;
        > span {
          display: none;
        }
      }

      /* logo and title container */
      > div {
        padding: 0;
        width: 100%;
        > svg {
        }
        > h1 {
        }
      }

      > nav {
        ${'' /* background: red; */}
        position: relative;
        left: auto;
        top: auto;
        height: 50px;
        width: 100%;
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
          background: none;
          box-shadow: none;
          display: flex;
          height: 50px;
          padding: 0;
          width: auto;
          > li {
            align-items: center;
            display: flex;
            flex-flow: column nowrap;
            height: inherit;
            justify-content: center;
            > a {
              border: none;
              &:hover,
              &:focus {
              }
            }
            &:last-child {
              > a {
                border-bottom: none;
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

const Header = ({ logout, siteTitle }) => (
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
              <If condition={authService.isAuthenticated()}>
                <Link to="/app/graph">Home</Link>
              </If>
              <If condition={!authService.isAuthenticated()}>
                <Link to="/">Home</Link>
              </If>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/docs">Docs</Link>
            </li>

            {/* <li>
            <Link to="/rubric">Rubric</Link>
          </li> */}

            <If condition={authService.isAuthenticated()}>
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

const mapDispatchToProps = dispatch => ({
  logout: callback => dispatch(a.logout(callback)),
})

export default connect(
  null,
  mapDispatchToProps
)(Header)
