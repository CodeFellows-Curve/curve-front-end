import graphDataProcessor from '../utils/graph-data-processor.js'

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

const categoryIds = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

const categoryPointsFromMilestoneMap = milestoneMap => {
  let pointsByCategory = new Map()
  trackIds.forEach(trackId => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(
      categoryId,
      currentPoints + milestoneToPoints(milestone)
    )
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
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
  graphQLRawData: null,
  name: 'John Cokos',
  title: 'JavaScript Instructor',
  milestoneByTrack: {
    // BUSINESS ACUMEN COMPETENCY --------------------
    MISSION_AND_VISION: 4,
    CUSTOMER_ORIENTATION: 2,

    // GROWTH MINDSET COMPETENCY --------------------
    ADAPTABILITY: 3,
    CURIOSITY: 4,
    CONSTANT_IMPROVEMENT: 2,
    HANDLING_AMBIGUITY: 3,
    INCLUSIVITY: 1,
    OPENNESS: 1,
    AMBITION_AND_INITIATIVE: 1,

    // LEADERSHIP COMPETENCY --------------------
    ACCOUNTABILITY: 1,
    INTEGRITY: 4,
    OWNERSHIP: 3,
    MENTORSHIP: 2,
    NETWORKING: 2,
    SUCCESSION: 2,
    HEALTH_AND_SAFETY: 0,
    CONFIDENCE: 4,
    CREDIBILITY: 3,

    // CRAFT COMPETENCY --------------------
    TECHNICAL: 4,
    PROCESS: 3,
    INNOVATION: 2,
    TOOL_PROFICIENCY: 4,

    // QUALITY COMPETENCY --------------------
    JUDGEMENT: 3,
    ROOT_CAUSE_RESOLUTION: 2,

    // COMMUNICATION COMPETENCY --------------------
    WRITING: 1,
    READING: 2,
    SPEAKING: 3,
    LISTENING: 3,

    // TEAMWORK COMPETENCY --------------------
    COLLABORATION: 2,

    // RESULTS COMPETENCY --------------------
    AGILE: 0,
    ORGANIZATIONAL: 2,
    CREATIVE: 3,
    PROJECT_EXECUTION: 1,
    ANALYTICAL_THINKING: 1,
    PRIORITIZATION: 1,
    PROBLEM_SOLVING: 1,
    INCREMENTAL_DELIVERY: 3,
    DECISION_MAKING: 4,
    APPROPRIATE_AUTONOMY: 4,
    PLANNING_AND_ESTIMATING: 2,
    DEPENDABILITY_AND_RELIABILITY: 3,
  },
  focusedTrackId: 'MISSION_AND_VISION',
  totalPoints: 96,
  categoryPoints: [
    { categoryId: 'Business Acumen', points: 6 },
    { categoryId: 'Growth Mindset', points: 15 },
    { categoryId: 'Leadership', points: 21 },
    { categoryId: 'Craft', points: 13 },
    { categoryId: 'Quality', points: 5 },
    { categoryId: 'Communication', points: 9 },
    { categoryId: 'Teamwork', points: 2 },
    { categoryId: 'Results', points: 25 },
  ],
  eligibleTitles: [
    'JavaScript Instructor',
    'Bald Person',
    'Former CDK Employee',
  ],
  tracks,
  trackIds,
}

// initialState.totalPoints = totalPointsFromMilestoneMap(
//   initialState.focusedTrackId
// )

// REDUCER FUNCTION -----------------------------------------------------------------
export default (state = initialState, action) => {
  let { type, payload } = action

  switch (type) {
    // This case adds all the raw graphQL data for a single indidual to state
    case 'setIndividualsData':
      console.log('setIndividualsData ----------------')

      let graphQLRawData = payload
      let formattedData = graphDataProcessor(graphQLRawData)
      return {
        ...formattedData,
        tracks: state.tracks,
        trackIds: state.trackIds,
        graphQLRawData,
      }

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

      // Update category points
      const categoryPoints = categoryPointsFromMilestoneMap(
        state.milestoneByTrack
      )

      return {
        ...state,
        focusedTrackId: trackId,
        title,
        totalPoints,
        categoryPoints,
      }

    case 'NameInputChange':
      return { ...state, name: payload }

    case 'setTitle':
      /*
      setTitle(title) {
        let titles = eligibleTitles(this.state.milestoneByTrack)
        title = titles.indexOf(title) == -1 ? titles[0] : title
        this.setState({ title })
      */
      let newTitle = payload
      let availableTitles = eligibleTitles(state.milestoneByTrack)
      newTitle =
        availableTitles.indexOf(newTitle) == -1 ? availableTitles[0] : newTitle

      return { ...state, title: newTitle }

    case 'shiftFocusedTrack':
      /*
      shiftFocusedTrack(delta) {
        let index = trackIds.indexOf(this.state.focusedTrackId)
        index = (index + delta + trackIds.length) % trackIds.length
       const focusedTrackId = trackIds[index]
       this.setState({ focusedTrackId })
      }
      */
      let delta = payload
      let idx = trackIds.indexOf(state.focusedTrackId)
      idx = (idx + delta + trackIds.length) % trackIds.length
      let newFocusedTrackId = trackIds[idx]
      return { ...state, focusedTrackId: newFocusedTrackId }

    case 'shiftFocusedTrackMilestone':
      /*
    shiftFocusedTrackMilestoneByDelta(delta) {
     let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
     let milestone = prevMilestone + delta
     if (milestone < 0) milestone = 0
     if (milestone > 5) milestone = 5
     this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone)
    }
   */
      let change = payload
      let prevMilestone = state.milestoneByTrack[state.focusedTrackId]
      let newMilestoneValue = prevMilestone + change
      if (newMilestoneValue < 0) newMilestoneValue = 0
      if (newMilestoneValue > 5) newMilestoneValue = 5
      // Somehow Dispatch 'handleTrackMilestoneChange' somehow with parameters (state.focusedTrackId, newMilestone)

      // TODO: fix this anti-pattern. We're calling an action within a reducer. There are better ways to do this, like with an event listener or some middleware to allow "asyncDispatch". Google "calling an action within a reducer, redux"
      return {}

    default:
      return state
  }
}
