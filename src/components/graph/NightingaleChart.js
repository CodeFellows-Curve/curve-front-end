import React from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'
import { trackIds, milestones, categoryColorScale } from './constants'
// import tracks from './tracks.js'

import { connect } from 'react-redux'
import * as actions from '../../actions/graph-actions.js'

// TODO: Currently will not render without this odd .pop(). Make it not need this
trackIds.pop()

const width = 400
// "milestones" is an array of each level; [0, 1, 2, 3, 4, 5]
const arcMilestones = milestones.slice(1) // we'll draw the '0' milestone with a circle, not an arc.

// Styles
const Figure = styled.figure`
  margin: 0;
  text-align: center;
  svg {
    width: ${width}px;
    height: ${width}px;
  }
  .track-milestone {
    fill: #eee;
    cursor: pointer;
  }
  .track-milestone-current,
  .track-milestone:hover {
    stroke: #000;
    stroke-width: 4px;
    stroke-linejoin: round;
  }
`

class NightingaleChart extends React.Component {
  constructor(props) {
    super(props)

    this.colorScale = d3.scaleSequential(d3.interpolateWarm).domain([0, 5])

    this.radiusScale = d3
      .scaleBand()
      .domain(arcMilestones)
      .range([0.15 * width, 0.45 * width])
      .paddingInner(0.1)

    this.arcFn = d3
      .arc()
      .innerRadius(milestone => this.radiusScale(milestone))
      .outerRadius(
        milestone => this.radiusScale(milestone) + this.radiusScale.bandwidth()
      )
      .startAngle(-Math.PI / trackIds.length)
      .endAngle(Math.PI / trackIds.length)
      .padAngle(Math.PI / 200)
      .padRadius(0.45 * width)
      .cornerRadius(2)
  }

  render() {
    // console.log('trackIDs ---------------', trackIds)
    // console.log('IN NIGHTENGALE', Object.keys(this.props.tracks))
    const currentMilestoneId = this.props.milestoneByTrack[
      this.props.focusedTrackId
    ]
    return (
      <Figure>
        <svg>
          <g transform={`translate(${width / 2},${width / 2}) rotate(-33.75)`}>
            {trackIds.map((trackId, i) => {
              {/* console.log('current trackId ----------',trackId) */}
              const isCurrentTrack = trackId == this.props.focusedTrackId
              return (
                <g
                  key={trackId}
                  transform={`rotate(${(i * 360) / trackIds.length})`}
                >
                  {arcMilestones.map(milestone => {
                    const isCurrentMilestone =
                      isCurrentTrack && milestone == currentMilestoneId
                    const isMet =
                      this.props.milestoneByTrack[trackId] >= milestone ||
                      milestone == 0
                    return (
                      <path
                        key={milestone}
                        className={
                          'track-milestone ' +
                          (isMet ? 'is-met ' : ' ') +
                          (isCurrentMilestone ? 'track-milestone-current' : '')
                        }
                        onClick={() =>
                          this.props.handleTrackMilestoneChangeFn(
                            trackId,
                            milestone
                          )
                        }
                        d={this.arcFn(milestone)}
                        style={{
                          fill: isMet
                            ? categoryColorScale(this.props.tracks[trackId].category)
                            : undefined,
                        }}
                      />
                    )
                  })}
                  <circle
                    r="4"
                    cx="0"
                    cy="-50"
                    style={{
                      fill: categoryColorScale(this.props.tracks[trackId].category),
                    }}
                    className={
                      'track-milestone ' +
                      (isCurrentTrack && !currentMilestoneId
                        ? 'track-milestone-current'
                        : '')
                    }
                    onClick={() =>
                      this.props.handleTrackMilestoneChangeFn(trackId, 0)
                    }
                  />
                </g>
              )
            })}
          </g>
        </svg>
      </Figure>
    )
  }
}

const mapStateToProps = state => ({
  milestoneByTrack: state.graph.milestoneByTrack,
  focusedTrackId: state.graph.focusedTrackId,
  tracks: state.competencies
})

const mapDispatchToProps = (dispatch, getState) => ({
  setFocused: payload => dispatch(actions.setFocusedTrackId(payload)),
  handleTrackMilestoneChangeFn: (...payload) =>
    dispatch(actions.handleTrackMilestoneChange(payload)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NightingaleChart)
