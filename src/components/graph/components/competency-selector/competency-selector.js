import React from 'react'
import styled from 'styled-components'
import {competencyArrayFn} from '../../constants'

import { connect } from 'react-redux'
import * as actions from '../../../../actions/graph-actions.js'

class CompetencySelector extends React.Component {
  render() {
    let competencyIds = competencyArrayFn(this.props.proficiencies.review)
    return (
      <div>
        <style jsx>{`
          .competenct-selector-label {
            text-align: center;
            font-size: 42px;
          }`}
      </style>
             {competencyIds.map(competencyId => (
              <div
                key={competencyId}
                className="competency-selector-label"
                onClick={() => this.props.setFocused(competencyId)}
              >
                {competencyId}
              </div>
            ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  proficiencies: state.graph.data.individual,
  focusedProficiencyId: state.graph.focusedProficiencyId,
  tracks: state.graph.tracks,
  trackIds: state.graph.trackIds,
})

const mapDispatchToProps = (dispatch, getState) => ({
  setFocused: payload => dispatch(actions.setFocusedTrackId(payload)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompetencySelector)
