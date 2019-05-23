import React from 'react'
import styled from 'styled-components'

// import { connect } from 'react-redux'
// import * as actions from '../../actions/graph-actions.js'

// import { eligibleTitles } from './constants'

const Input = styled.input`
    margin: 1em 1em;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 20px;
  min-width: 300px;
`

class DateSelector extends React.Component {
  render() {
    // const titles = eligibleTitles(this.props.milestoneByTrack)
    // const titles = this.props.eligibleTitles

    return (
      <Input
        Type={Date}
        value={this.props.currentDate}
        onChange={e => this.props.setDateFn(e.target.value)}
      >
    </Input>
    )
  }
}

// export default TitleSelector

// const mapStateToProps = state => ({
//   milestoneByTrack: state.graph.milestoneByTrack,
//   currentTitle: state.graph.currentTitle,
//   eligibleTitles: state.graph.eligibleTitles,

//   // categoryPoints: state.graph.categoryPoints,
// })

// const mapDispatchToProps = (dispatch, getState) => ({
//   setTitleFn: payload => dispatch(actions.setTitle(payload)),
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TitleSelector)
export default DateSelector;
