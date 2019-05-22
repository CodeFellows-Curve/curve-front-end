import React, { Component } from 'react'
import { connect } from 'react-redux'
import { navigate } from 'gatsby'
import If from 'react-ifs'

import AuthService from '../utils/auth-service'
import * as a from '../actions/auth-actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { username: ``, password: `` }
    this.authService = new AuthService()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.login(this.state)
  }

  handleUpdate = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => console.log(this.state)
    )
  }
  componentDidMount() {
    if (!!this.props.loggedIn) {
      navigate(`/app/graph`)
    }
  }
  componentDidUpdate(prevProps) {
    if (!!this.props.loggedIn && !prevProps.loggedIn) {
      navigate(`/app/graph`)
    }
  }

  render() {
    if (!this.props.loggedIn) {
      this.authService.login()
    }

    return (
      <If condition={!this.props.loggedIn}>
        <h1>Log In*</h1>
        <form method="post" onSubmit={this.handleSubmit}>
          <label>
            Username
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <br />
          <input type="submit" value="Log in" />
          <br />
          <br />
          <small>
            *Pssst.... hardcoded login only:
            <br />
            username: john
            <br />
            password: johnny
          </small>
        </form>
      </If>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn })

const mapDispatchToProps = dispatch => ({
  login: credentials => dispatch(a.login(credentials)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
