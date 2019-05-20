import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { handleLogin /*, isLoggedIn*/ } from '../utils/auth'

class Login extends Component {
  state = { username: ``, password: `` }

  handleSubmit = e => {
    e.preventDefault()
    handleLogin(this.state)
    navigate(`/app/graph`)
  }

  handleUpdate = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      // () => console.log(this.state)
    )
  }

  render() {
    /**
    if (isLoggedIn()) {
      navigate(`/app/graph`)
    }
    **/
    return (
      <>
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
      </>
    )
  }
}

export default Login
