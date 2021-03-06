import React from 'react'
import styled from 'styled-components'
import { milestones, categoryColorScale } from './constants'
import tracks from './tracks.js'

import { connect } from 'react-redux'
import * as actions from '../../actions/graph-actions.js'

const TrackDiv = styled.div`
  margin: 0 0 20px 0;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  h2 {
    margin: 0 0 10px 0;
  }
  p {
    &.track-description {
      margin-top: 0;
      padding-bottom: 20px;
      border-bottom: 2px solid #ccc;
    }
  }
  table {
    border-spacing: 3px;
  }
  td {
    line-height: 50px;
    width: 50px;
    text-align: center;
    background: #eee;
    font-weight: bold;
    font-size: 24px;
    border-radius: 3px;
    cursor: pointer;
  }
  ul {
    line-height: 1.5em;
  }
`

class Track extends React.Component {
  render() {
    const track = tracks[this.props.focusedTrackId]
    const currentMilestoneId = this.props.milestoneByTrack[
      this.props.focusedTrackId
    ]
    const currentMilestone = track.milestones[currentMilestoneId - 1]
    return (
      <TrackDiv className="track">
        <h2>{track.displayName}</h2>
        <p className="track-description">{track.description}</p>
        <div style={{ display: 'flex' }}>
          <table style={{ flex: 0, marginRight: 50 }}>
            <tbody>
              {milestones
                .slice()
                .reverse()
                .map(milestone => {
                  const isMet = milestone <= currentMilestoneId
                  return (
                    <tr key={milestone}>
                      <td
                        onClick={() =>
                          this.props.handleTrackMilestoneChangeFn(
                            this.props.focusedTrackId,
                            milestone
                          )
                        }
                        style={{
                          border: `4px solid ${
                            milestone === currentMilestoneId
                              ? '#000'
                              : isMet
                              ? categoryColorScale(track.category)
                              : '#eee'
                          }`,
                          background: isMet
                            ? categoryColorScale(track.category)
                            : undefined,
                        }}
                      >
                        {milestone}
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
          {currentMilestone ? (
            <div style={{ flex: 1 }}>
              <h3>{currentMilestone.summary}</h3>
              <h4>Example behaviors:</h4>
              <ul>
                {currentMilestone.signals.map((signal, i) => (
                  <li key={i}>{signal}</li>
                ))}
              </ul>
              <h4>Example tasks:</h4>
              <ul>
                {currentMilestone.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </TrackDiv>
    )
  }
}

const mapStateToProps = state => ({
  milestoneByTrack: state.graph.milestoneByTrack,
  focusedTrackId: state.graph.focusedTrackId,
})

const mapDispatchToProps = (dispatch, getState) => ({
  handleTrackMilestoneChangeFn: (...payload) =>
    dispatch(actions.handleTrackMilestoneChange(payload)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track)

// export default Track
