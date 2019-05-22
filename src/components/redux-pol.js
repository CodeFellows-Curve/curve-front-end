import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReduxPOL extends Component {
  render() {
    return (
      <div>
        Logged In:{' '}
        <span style={{ color: 'orange' }}>
          {this.props.loggedIn ? 'true' : 'false'}
        </span>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn })

export default connect(
  mapStateToProps,
  null
)(ReduxPOL)
