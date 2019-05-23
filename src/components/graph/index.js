import React from 'react'


import NameInput from './NameInput'
import TitleSelector from './TitleSelector'

import {
  eligibleTitles,
  trackIds,
  //  milestones,
  //  milestoneToPoints,
} from './constants'

import PointSummaries from './PointSummaries'
import LevelThermometer from './LevelThermometer'
import NightingaleChart from './components/nightingale-chart/NightingaleChart'
import CompetencySelector from './components/competency-selector/competency-selector.js'
import KeyboardListener from './KeyboardListener'
import Track from './Track'
import { connect } from 'react-redux'
import * as actions from '../../actions/graph-actions.js'

class Graph extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.graph
  }
  render() {

    return (
      <>
      <div>
        <span>Is anybody out there?</span>
        {console.log('Line 35 in graph index', this.props.graph.review[0].category)}
      </div>
      {/* <NightingaleChart /> */}
      <CompetencySelector />
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  graph: state.graph.user
})

const mapDispatchToProps = (dispatch, getState) => ({
  setFocused: payload => dispatch(actions.setFocusedTrackId(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph)
