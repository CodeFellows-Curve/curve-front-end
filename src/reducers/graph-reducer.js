import tracks from '../components/graph/tracks.js'
const trackIds = Object.keys(tracks)

let initialState = {
  name: 'Daenerys Targaryen',
  title: 'Staff Engineer',
  milestoneByTrack: {
    // BUSINESS ACUMEN COMPETENCY --------------------
    MISSION_AND_VISION: 4,
    CUSTOMER_ORIENTATION: 3,

    // GROWTH MINDSET COMPETENCY --------------------
    ADAPTABILITY: 4,
    CURIOSITY: 3,
    CONSTANT_IMPROVEMENT: 2,
    HANDLING_AMBIGUITY: 1,
    INCLUSIVITY: 0,
    OPENNESS: 4,
    AMBITION_AND_INITIATIVE: 3,

    // LEADERSHIP COMPETENCY --------------------
    ACCOUNTABILITY: 4,
    INTEGRITY: 3,
    OWNERSHIP: 2,
    MENTORSHIP: 1,
    NETWORKING: 0,
    SUCCESSION: 4,
    HEALTH_AND_SAFETY: 3,
    CONFIDENCE: 2,
    CREDIBILITY: 1,

    // CRAFT COMPETENCY --------------------
    TECHNICAL: 1,
    PROCESS: 2,
    INNOVATION: 3,
    TOOL_PROFICIENCY: 4,

    // QUALITY COMPETENCY --------------------
    JUDGEMENT: 1,
    ROOT_CAUSE_RESOLUTION: 2,

    // COMMUNICATION COMPETENCY --------------------
    WRITING: 1,
    READING: 2,
    SPEAKING: 3,
    LISTENING: 4,

    // TEAMWORK COMPETENCY --------------------
    COLLABORATION: 4,

    // RESULTS COMPETENCY --------------------
    AGILE: 0,
    ORGANIZATIONAL: 1,
    CREATIVE: 2,
    PROJECT_EXECUTION: 3,
    ANALYTICAL_THINKING: 4,
    PRIORITIZATION: 3,
    PROBLEM_SOLVING: 2,
    INCREMENTAL_DELIVERY: 1,
    DECISION_MAKING: 0,
    APPROPRIATE_AUTONOMY: 1,
    PLANNING_AND_ESTIMATING: 2,
    DEPENDABILITY_AND_RELIABILITY: 3,
  },
  focusedTrackId: 'MISSION_AND_VISION',
}

export default (state = initialState, action) => {
  let { type, payload } = action

  switch (type) {
    case 'setFocusedTrackId':
      /*
    setFocusedTrackId(trackId) {
      let index = trackIds.indexOf(trackId)
      const focusedTrackId = trackIds[index]
      this.setState({ focusedTrackId })
    }
  */
      console.log('setFocusedTrackId REDUCER payload:--------', payload)
      //  console.log(payload)

      let trackId = payload
      let index = trackIds.indexOf(trackId)
      const focusedTrackId = trackIds[index]
      return { ...state, focusedTrackId }

    case 'shiftFocusedTrackId':
      // shiftFocusedTrack(delta) {
      //   let index = trackIds.indexOf(this.state.focusedTrackId)
      //   index = (index + delta + trackIds.length) % trackIds.length
      //   const focusedTrackId = trackIds[index]
      //   this.setState({ focusedTrackId })
      // }

      return stuff

    case 'shiftFocusedTrackMilestoneByDelta':
    //     (delta) {
    //   let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    //   let milestone = prevMilestone + delta
    //   if (milestone < 0) milestone = 0
    //   if (milestone > 5) milestone = 5
    //   this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone)
    // }

    default:
      return state
  }
}
