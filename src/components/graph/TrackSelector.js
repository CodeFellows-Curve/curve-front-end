import React from 'react'
import { trackIds, categoryIds, categoryColorScale } from './constants'
import styled from 'styled-components'
// import tracks from './tracks.js'

import { connect } from 'react-redux'
import * as actions from '../../actions/graph-actions.js'

class TrackSelector extends React.Component {
  render() {
    return (
      <>
      <table>
        <style jsx>{`
          table {
            width: 100%;
            border-spacing: 3px;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .track-selector-value {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 9px;
          }
        `}</style>
        <tbody>
          <tr>
            {this.props.trackIds.map(trackId => (
              <td
                key={trackId}
                className="track-selector-label"
                onClick={() => this.props.setFocused(trackId)}
              >
                {this.props.tracks[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {this.props.trackIds.map(trackId => (
              <td
                key={trackId}
                className="track-selector-value"
                style={{
                  border:
                    '4px solid ' +
                    (trackId == this.props.focusedTrackId
                      ? '#000'
                      : categoryColorScale(
                          this.props.tracks[trackId].category
                        )),
                  background: categoryColorScale(
                    this.props.tracks[trackId].category
                  ),
                }}
                onClick={() => this.props.setFocused(trackId)}
              >
                {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      </>
    )
  }
}

const mapStateToProps = state => ({
  milestoneByTrack: state.graph.milestoneByTrack,
  focusedTrackId: state.graph.focusedTrackId,
  tracks: state.graph.tracks,
  trackIds: state.graph.trackIds,
})

const mapDispatchToProps = (dispatch, getState) => ({
  setFocused: payload => dispatch(actions.setFocusedTrackId(payload)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackSelector)
