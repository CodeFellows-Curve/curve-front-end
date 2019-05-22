import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import * as actions from '../../actions/graph-actions.js'

import { eligibleTitles } from './constants'

const Select = styled.select`
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 20px;
  min-width: 300px;
`

class TitleSelector extends React.Component {
  render() {
    // const titles = eligibleTitles(this.props.milestoneByTrack)
    const titles = this.props.eligibleTitles

    return (
      <Select
        value={this.props.currentTitle}
        onChange={e => this.props.setTitleFn(e.target.value)}
      >
        {titles.map(title => (
          <option key={title}>{title}</option>
        ))}
      </Select>
    )
  }
}

// export default TitleSelector

const mapStateToProps = state => ({
  milestoneByTrack: state.graph.milestoneByTrack,
  currentTitle: state.graph.currentTitle,
  eligibleTitles: state.graph.eligibleTitles,

  // categoryPoints: state.graph.categoryPoints,
})

const mapDispatchToProps = (dispatch, getState) => ({
  setTitleFn: payload => dispatch(actions.setTitle(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleSelector)
