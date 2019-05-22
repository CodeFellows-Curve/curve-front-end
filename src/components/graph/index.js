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
import NightingaleChart from './components/nightingale-chart.js/NightingaleChart'
import TrackSelector from './TrackSelector'
import KeyboardListener from './KeyboardListener'
import Track from './Track'
import { connect } from 'react-redux'
import * as actions from '../../actions/graph-actions.js'

// const profs = (arr) => {
//   let res = [];
//   let newArr = arr[0].category
//   newArr.forEach(item => {
//     item.subcategory.forEach(i => {
//       res.push(i.subCategoryName)
//     })
//   })
//   return res;
// }

class Graph extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.graph
  }
  render() {
    const { user } = this.props.user;

    return (
      <>
      <div>
        <span>Is anybody out there? {this.props.graph.name}</span>
        {/* {console.log('this is the review at 0:' , profs(this.props.graph.review))} */}
      </div>
      <NightingaleChart />
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  graph: state.graph.data.individual
})

const mapDispatchToProps = (dispatch, getState) => ({
  setFocused: payload => dispatch(actions.setFocusedTrackId(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph)
