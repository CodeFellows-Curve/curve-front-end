import React from 'react'

import { connect } from 'react-redux'
import * as actions from '../../actions/graph-actions.js'

class KeyboardListener extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', e => this.handleKeyDown(e)) // TK unlisten
  }

  handleKeyDown(e) {
    switch (e.code) {
      case 'ArrowUp':
        this.props.increaseFocusedMilestoneFn()
        e.preventDefault()
        break
      case 'ArrowRight':
        this.props.selectNextTrackFn()
        e.preventDefault()
        break
      case 'ArrowDown':
        this.props.decreaseFocusedMilestoneFn()
        e.preventDefault()
        break
      case 'ArrowLeft':
        this.props.selectPrevTrackFn()
        e.preventDefault()
        break
    }
  }

  render() {
    return null
  }
}

// export default KeyboardListener

const mapStateToProps = state => ({
  name: state.graph.name,
})

const mapDispatchToProps = (dispatch, getState) => ({
  selectNextTrackFn: payload => dispatch(actions.selectNextTrack(payload)),
  selectPrevTrackFn: payload => dispatch(actions.selectPrevTrack(payload)),
  // increaseFocusedMilestoneFn: payload =>
  //   dispatch(actions.increaseFocusedMilestone(payload)),
  // decreaseFocusedMilestoneFn: payload =>
  //   dispatch(actions.decreaseFocusedMilestone(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyboardListener)
