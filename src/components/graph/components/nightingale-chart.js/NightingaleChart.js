import React from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'
import { categoryColorScale } from '../../constants'
// import tracks from '../../tracks.js'
import proficiencyArrayFn from '../../constants.js'

import { connect } from 'react-redux'
import * as actions from '../../../../actions/graph-actions.js'

const milestones = [0, 1, 2, 3, 4]
const width = 400
// "milestones" is an array of each level; [0, 1, 2, 3, 4]
const arcMilestones = milestones.slice(1) // we'll draw the '0' milestone with a circle, not an arc.



// Styles
const Figure = styled.figure`
  margin: 0;
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
      // This start and end angle are hard coded for now!! this is bad and we will change it once the wiring is done.
      .startAngle(-Math.PI / 41)
      .endAngle(Math.PI / 41)
      .padAngle(Math.PI / 200)
      .padRadius(0.45 * width)
      .cornerRadius(2)
  }
  

  render() {
    let proficiencyIds = proficiencyArrayFn(this.props.proficiencies.review)
    
    const currentMilestoneId = proficiencyIds[
      this.props.focusedProficiencyId]
    return (
      <Figure>
        <svg>
          <g transform={`translate(${width / 2},${width / 2}) rotate(-33.75)`}>
            {proficiencyIds.map((proficiencyId, i) => {
              const isCurrentProficiency = proficiencyId == this.props.focusedProficiencyId
              return (
                <g
                  key={proficiencyId}
                  transform={`rotate(${(i * 360) / proficiencyIds.length})`}
                >
                  {arcMilestones.map(milestone => {
                    const isCurrentMilestone =
                      isCurrentProficiency && milestone == currentMilestoneId
                    const isMet =
                      proficiencyIds[proficiencyId] >= milestone ||
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
                            proficiencyId,
                            milestone
                          )
                        }
                        d={this.arcFn(milestone)}
                        style={{
                          fill: isMet
                            ? categoryColorScale(proficiencyIds[proficiencyId])
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
                      fill: categoryColorScale(proficiencyIds[proficiencyId]),
                    }}
                    className={
                      'track-milestone ' +
                      (isCurrentProficiency && !currentMilestoneId
                        ? 'track-milestone-current'
                        : '')
                    }
                    onClick={() =>
                      this.props.handleTrackMilestoneChangeFn(proficiencyId, 0)
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
  proficiencies: state.graph.data.individual,
  focusedProficiencyId: state.graph.focusedProficiencyId,
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
