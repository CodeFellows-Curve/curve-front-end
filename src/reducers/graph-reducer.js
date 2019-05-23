// CONSTANTS ----------------------------------------------------------------
// import initialState from './initial-state-change.js'
import tracks from '../components/graph/tracks.js'
import { bool } from 'prop-types';
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

// initialState.totalPoints = totalPointsFromMilestoneMap(
//   initialState.focusedTrackId
// )

let initialState = {
  user: {
    "name": "Nate",
      "review": [
        {
          "category": [
            {
              "categoryName": "Business Acumen",
              'isHidden': true,
              "overallScore": 1,
              "subcategory": [
                {
                  "subCategoryName": "Mission and Vision",
                  "score": 1
                },
                {
                  "subCategoryName": "Customer Orientation",
                  "score": 1
                }
              ]
            },
            {
              "categoryName": "Growth Mindset",
              "overallScore": 1,
              "subcategory": [
                {
                  "subCategoryName": "Adaptability",
                  "score": 1
                },
                {
                  "subCategoryName": "Curiousity",
                  "score": 1
                },
                {
                  "subCategoryName": "Constant Improvement",
                  "score": 1
                },
                {
                  "subCategoryName": "Handling Ambiguity",
                  "score": 1
                },
                {
                  "subCategoryName": "Inclusivity",
                  "score": 1
                },
                {
                  "subCategoryName": "Openness",
                  "score": 1
                },
                {
                  "subCategoryName": "Ambition and Initiative",
                  "score": 1
                }
              ]
            },
            {
              "categoryName": "Leadership",
              "overallScore": 1,
              "subcategory": [
                {
                  "subCategoryName": "Accountability",
                  "score": 1
                },
                {
                  "subCategoryName": "Integrity",
                  "score": 1
                },
                {
                  "subCategoryName": "Ownership",
                  "score": 1
                },
                {
                  "subCategoryName": "Mentorship",
                  "score": 1
                },
                {
                  "subCategoryName": "Networking",
                  "score": 1
                },
                {
                  "subCategoryName": "Succession",
                  "score": 1
                },
                {
                  "subCategoryName": "Health and Safety",
                  "score": 1
                },
                {
                  "subCategoryName": "Confidence",
                  "score": 1
                },
                {
                  "subCategoryName": "Credibility",
                  "score": 1
                }
              ]
            },
            {
              "categoryName": "Craft",
              "overallScore": 1,
              "subcategory": [
                {
                  "subCategoryName": "Technical",
                  "score": 1
                },
                {
                  "subCategoryName": "Process",
                  "score": 1
                },
                {
                  "subCategoryName": "Innovation",
                  "score": 1
                },
                {
                  "subCategoryName": "Tool Proficiency",
                  "score": 1
                }
              ]
            },
            {
              "categoryName": "Quality",
              "overallScore": 1,
              "subcategory": [
                {
                  "subCategoryName": "Judgement",
                  "score": 1
                },
                {
                  "subCategoryName": "Root Cause Resolution",
                  "score": 1
                }
              ]
            },
            {
              "categoryName": "Communication",
              "overallScore": 1,
              "subcategory": [
                {
                  "subCategoryName": "Writing",
                  "score": 1
                },
                {
                  "subCategoryName": "Reading",
                  "score": 1
                },
                {
                  "subCategoryName": "Speaking",
                  "score": 1
                },
                {
                  "subCategoryName": "Listening",
                  "score": 1
                }
              ]
            },
            {
              "categoryName": "Teamwork",
              "overallScore": 1,
              "subcategory": [
                {
                  "subCategoryName": "Collaboration",
                  "score": 1
                }
              ]
            },
            {
              "categoryName": "Results",
              "overallScore": 1,
              "subcategory": [
                {
                  "subCategoryName": "Agile",
                  "score": 1
                },
                {
                  "subCategoryName": "Organizational",
                  "score": 1
                },
                {
                  "subCategoryName": "Creative",
                  "score": 1
                },
                {
                  "subCategoryName": "Project Execution",
                  "score": 1
                },
                {
                  "subCategoryName": "Analytical Thinking",
                  "score": 1
                },
                {
                  "subCategoryName": "Prioritization",
                  "score": 1
                },
                {
                  "subCategoryName": "Problem Solving",
                  "score": 1
                },
                {
                  "subCategoryName": "Incremental Delivery",
                  "score": 1
                },
                {
                  "subCategoryName": "Decision Making",
                  "score": 1
                },
                {
                  "subCategoryName": "Appropriate Autonomy",
                  "score": 1
                },
                {
                  "subCategoryName": "Planning and Estimating",
                  "score": 1
                },
                {
                  "subCategoryName": "Dependability and Reliability",
                  "score": 1
                }
              ]
            }
          ]
        }
      ]
  },
}

// REDUCER FUNCTION -----------------------------------------------------------------
export default (state = initialState, action) => {
  let { type, payload } = action

  switch (type) {

    case 'isHidden':
      let boolean = payload
      return {...state.user.review.category[0], isHidden: boolean }

    // This case adds all the raw graphQL data for a single indidual to state
    case 'setIndividualsData':
      let graphQLRawData = payload
      return { ...state, user: graphQLRawData }

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
