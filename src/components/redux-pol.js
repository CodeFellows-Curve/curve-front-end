import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as a from '../actions/pol'

class ReduxPOL extends Component {
  render() {
    return (
      <div>
        Redux Proof of Life: {this.props.pol}{' '}
        <button onClick={this.props.doPol}>Dispatch</button>
      </div>
    )
  }
}

const mapStateToProps = ({ pol }) => ({ pol })

const mapDispatchToProps = dispatch => ({
  doPol: () => dispatch(a.pol()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxPOL)
