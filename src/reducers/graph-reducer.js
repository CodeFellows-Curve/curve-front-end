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

let initialState = {
  userData:{
    name: 'Hannah Ingham',
    email: 'HannahTA@cf.com',
    date: 20190521,
    title: 'TA',

    coreCompetencies: {
      BUSINESS_ACUMEN: {
        title: 'Business Acumen',
        proficiencies: {
          MISSION_AND_VISION:{
            title: 'Mission and Vision Alignment',
            score: 4,
          },
          CUSTOMER_ORIENTATION:{
            title: 'Customer Orientation',
            score: 4,
          }
        }
      },
      GROWTH_MINDSET:{
        title: 'Growth Mindset',
        proficiencies: {
          ADAPTABILITY: {
            title: 'Adaptability',
            score: 4,
          },
          CURIOSITY: {
            title: 'Curiosity',
            score: 4,
          },
          CONSTANT_IMPROVEMENT: {
            title: 'Constant Improvement',
            score: 4,
          },
          HANDLING_AMBIGUITY: {
            title: 'Handling Ambiguity',
            score: 4,
          },
          INCLUSIVITY: {
            title: 'Inclusivity',
            score: 4,
          },
          OPENNESS: {
            title: 'Adaptability',
            score: 4,
          },
          AMBITION_AND_INITIATIVE: {
            title: 'Ambition and Initiative',
            score: 4,
          },
        }
      },
      LEADERSHIP:{
        title: 'Leadership',
        proficiencies: {
          ACCOUNTABILITY: {
            title: 'Accountability',
            score: 4,
          },
          INTEGRITY: {
            title: 'Integrity',
            score: 4,
          },
          OWNERSHIP: {
            title: 'Ownership',
            score: 4,
          },
          MENTORSHIP: {
            title: 'Mentorship',
            score: 4,
          },
          NETWORKING: {
            title: 'Networking',
            score: 4,
          },
          SUCCESSION: {
            title: 'Succession',
            score: 4,
          },
          HEALTH_AND_SAFETY: {
            title: 'Health and Safety',
            score: 4,
          },
          CONFIDENCE: {
            title: 'Confidence',
            score: 4,
          },
          CREDIBILITY: {
            title: 'Credibility',
            score: 4,
          },
        },
      },
      CRAFT:{
        title: 'Craft',
        proficiencies: {
          TECHNICAL: {
            title: 'Technical',
            score: 4,
          },
          PROCESS: {
            title: 'Process',
            score: 4,
          },
          INNOVATION: {
            title: 'Innovation',
            score: 4,
          },
          TOOL_PROFICIENCY: {
            title: 'Tool Proficiency',
            score: 4,
          },
        },
      },
      QUALITY:{
        title: 'Quality',
        proficiencies: {
          JUDGEMENT: {
            title: 'Judgement',
            score: 4,
          },
          ROOT_CAUSE_RESOLUTION: {
            title: 'Root Cause Resolution',
            score: 4,
          },
        },
      },
      COMMUNICATION:{
        title: 'Communication',
        proficiencies: {
          WRITING: {
            title: 'Writing',
            score: 4,
          },
          READING: {
            title: 'Reading',
            score: 4,
          },
          SPEAKING: {
            title: 'Speaking',
            score: 4,
          },
          LISTENING: {
            title: 'Listening',
            score: 4,
          },
        },
      },
      TEAMWORK:{
        title: 'Teamwork',
        proficiencies: {
          COLLABORATION: {
            title: 'Collaboration',
            score: 4,
          },
        },
      },
      RESULTS:{
        title: 'Results',
        proficiencies: {
          AGILE: {
            title: 'Agile',
            score: 4,
          },
          ORGANIZATIONAL: {
            title: 'Organizational',
            score: 4,
          },
          CREATIVE: {
            title: 'Creative',
            score: 4,
          },
          PROJECT_EXECUTION: {
            title: 'Project Execution',
            score: 4,
          },
          ANALYTICAL_THINKING: {
            title: 'Analytical Thinking',
            score: 4,
          },
          PRIORITIZATION: {
            title: 'Prioritization',
            score: 4,
          },
          PROBLEM_SOLVING: {
            title: 'Problem Solving',
            score: 4,
          },
          INCREMENTAL_DELIVERY: {
            title: 'Incremental Delivery',
            score: 4,
          },
          DECISION_MAKING: {
            title: 'Decision Making',
            score: 4,
          },
          APPROPRIATE_AUTONOMY: {
            title: 'Appropriate Autonomy',
            score: 4,
          },
          PLANNING_AND_ESTIMATING: {
            title: 'Planning and Estimating',
            score: 4,
          },
          DEPENDABILITY_AND_RELIABILITY: {
            title: 'Dependability and Reliability',
            score: 4,
          },
        },
      },
    }
  }
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
