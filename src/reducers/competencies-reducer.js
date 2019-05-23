import tracks from '../components/graph/tracks.js'

import formatMarkdownData from '../utils/markdown-data-processor.js'

// const initialState = {}
const initialState = tracks


// export default (state = initialState, action) => {
//   const { data, type } = action
//   switch (type) {
//     case 'PULL_COMPETENCIES':
//       return data
//     default:
//       return state
//   }
// }

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'PULL_COMPETENCIES':
      let competenciesFromMarkdown = formatMarkdownData({ data: payload })
      console.log('competenciesFromMarkdown',competenciesFromMarkdown)
      console.log('tracks',tracks)

      return competenciesFromMarkdown

    default:
      return state
  }
}
