import React from 'react'


import NameInput from './NameInput'
import TitleSelector from './TitleSelector'
import DateSelector from './DateSelector'

import {
  eligibleTitles,
  trackIds,
  //  milestones,
  //  milestoneToPoints,
} from './constants'

import PointSummaries from './PointSummaries'
import LevelThermometer from './LevelThermometer'
import NightingaleChart from './NightingaleChart'
import TrackSelector from './TrackSelector'
import KeyboardListener from './KeyboardListener'
import Track from './Track'
import { connect } from 'react-redux'
import * as actions from '../../actions/graph-actions.js'

class Graph extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.graph



  // handleTrackMilestoneChange(trackId, milestone) {
  //   const milestoneByTrack = this.state.milestoneByTrack
  //   milestoneByTrack[trackId] = milestone

  //   const titles = eligibleTitles(milestoneByTrack)
  //   const title =
  //     titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title

  //   this.setState({ milestoneByTrack, focusedTrackId: trackId, title })
  // }

  // setFocusedTrackId(trackId) {
  //   let index = trackIds.indexOf(trackId)
  //   const focusedTrackId = trackIds[index]
  //   this.setState({ focusedTrackId })
  // }

  // shiftFocusedTrack(delta) {
  //   let index = trackIds.indexOf(this.state.focusedTrackId)
  //   index = (index + delta + trackIds.length) % trackIds.length
  //   const focusedTrackId = trackIds[index]
  //   this.setState({ focusedTrackId })
  // }

  // shiftFocusedTrackMilestoneByDelta(delta) {
  //   let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
  //   let milestone = prevMilestone + delta
  //   if (milestone < 0) milestone = 0
  //   if (milestone > 5) milestone = 5
  //   this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone)
   }

  render() {
    const { user } = this.props

    return (
      <>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <form>
              <NameInput />
              <TitleSelector />
              <DateSelector />
            </form>
            <PointSummaries />
            <LevelThermometer />
          <div style={{ flex: 0 }}>
            <NightingaleChart />
          </div>
        </div>
        </div>

        <TrackSelector />
        <KeyboardListener
        // selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
        // selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}

        // TODO: add actions and reducers for the two handler functions below:
        /*
        increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(
          this,
          1
        )}
        decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(
          this,
          -1
        )}
        */
        />
        <Track />
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  graph: state.graph,
})

const mapDispatchToProps = (dispatch, getState) => ({
  setFocused: payload => dispatch(actions.setFocusedTrackId(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph)
