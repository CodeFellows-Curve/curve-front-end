import * as d3 from 'd3'
import tracks from './tracks.js'

export const milestones = [0, 1, 2, 3, 4]

export const milestoneToPoints = milestone => {
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

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

// SOURCE: https://codefellows.github.io/common_curriculum/career_coaching/Professional_Competencies

export const trackIds = Object.keys(tracks)

export const categoryIds = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = milestoneMap => {
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

export const totalPointsFromMilestoneMap = milestoneMap =>
  trackIds
    .map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => sum + addend, 0)

export const categoryColorScale = d3
  .scaleOrdinal()
  .domain(categoryIds)
  .range([
    '#FF5A5A', // BUSINESS ACUMEN
    '#FE9959', // GROWTH MINDSET
    '#FCD859', // LEADERSHIP
    '#9EF657', // CRAFT
    '#53EC86', // QUALITY
    '#5ECDDD', // COMMUNICATION
    '#4655C7', // TEAMWORK
    '#883DAD', // RESULTS
  ])

export const titles = [
  { label: 'Engineer I', minPoints: 0, maxPoints: 16 },
  { label: 'Engineer II', minPoints: 17, maxPoints: 35 },
  { label: 'Senior Engineer', minPoints: 36, maxPoints: 57 },
  { label: 'Group Lead', minPoints: 36, maxPoints: 57 },
  { label: 'Staff Engineer', minPoints: 58, maxPoints: 89 },
  { label: 'Senior Group Lead', minPoints: 58, maxPoints: 89 },
  { label: 'Principal Engineer', minPoints: 90 },
  { label: 'Director of Engineering', minPoints: 90 },
]

export const eligibleTitles = milestoneMap => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles
    .filter(
      title =>
        (title.minPoints === undefined || totalPoints >= title.minPoints) &&
        (title.maxPoints === undefined || totalPoints <= title.maxPoints)
    )
    .map(title => title.label)
}


// Exporting proficiencyId array
// const proficiencyId = (obj) => {

// }
//ToDo: Refactor to have a better time and space efficiency
const proficiencyArrayFn = (arr) => {
  let res = [];
  let newArr = arr[0].category
  newArr.forEach(item => {
    item.subcategory.forEach(i => {
      res.push(i.subCategoryName)
    })
  })
  return res;
}

export default proficiencyArrayFn;