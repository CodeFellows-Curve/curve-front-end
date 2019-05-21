// CONSTANTS ----------------------------------------------------------------
import tracks from '../components/graph/tracks.js'
const trackIds = Object.keys(tracks)
const titles = [
  { label: 'Engineer I', minPoints: 0, maxPoints: 16 },
  { label: 'Engineer II', minPoints: 17, maxPoints: 35 },
  { label: 'Senior Engineer', minPoints: 36, maxPoints: 57 },
  { label: 'Group Lead', minPoints: 36, maxPoints: 57 },
  { label: 'Staff Engineer', minPoints: 58, maxPoints: 89 },
  { label: 'Senior Group Lead', minPoints: 58, maxPoints: 89 },
  { label: 'Principal Engineer', minPoints: 90 },
  { label: 'Director of Engineering', minPoints: 90 },
]

// HELPER FUNCTIONS ------------------------------------------------------------
const milestoneToPoints = milestone => {
  switch (milestone) {
    case 0:
      return 0
    case 1:
      return 1
    case 2:
      return 3
    case 3:
      return 6
    case 4:
      return 12
    // case 5:
    //   return 20
    default:
      return 0
  }
}

const totalPointsFromMilestoneMap = milestoneMap =>
  trackIds
    .map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => sum + addend, 0)

const eligibleTitles = milestoneMap => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles
    .filter(
      title =>
        (title.minPoints === undefined || totalPoints >= title.minPoints) &&
        (title.maxPoints === undefined || totalPoints <= title.maxPoints)
    )
    .map(title => title.label)
}

// INITIAL STATE -----------------------------------------------------------------
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
  totalPoints: 111,
}
// initialState.totalPoints = totalPointsFromMilestoneMap(
//   initialState.focusedTrackId
// )

// REDUCER FUNCTION -----------------------------------------------------------------
export default (state = initialState, action) => {
  let { type, payload } = action

  switch (type) {
    case 'setFocusedTrackId':
      let index = trackIds.indexOf(payload)
      const focusedTrackId = trackIds[index]
      return { ...state, focusedTrackId }

    case 'handleTrackMilestoneChange':
      let [trackId, milestone] = payload
      const milestoneByTrack = state.milestoneByTrack
      milestoneByTrack[trackId] = milestone

      const titles = eligibleTitles(milestoneByTrack)
      const title = titles.indexOf(state.title) === -1 ? titles[0] : state.title

      // Update total points
      const totalPoints = totalPointsFromMilestoneMap(state.milestoneByTrack)

      return { ...state, focusedTrackId: trackId, title, totalPoints }

    case 'shiftFocusedTrackId':
      // shiftFocusedTrack(delta) {
      //   let index = trackIds.indexOf(this.state.focusedTrackId)
      //   index = (index + delta + trackIds.length) % trackIds.length
      //   const focusedTrackId = trackIds[index]
      //   this.setState({ focusedTrackId })
      // }

      return {}

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
