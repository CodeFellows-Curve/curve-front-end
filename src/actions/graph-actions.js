// things to put in
//setFocusedTrackId
//shiftFocusedTrackId
//shiftFocusedTrack
// shiftFocusedTrackMilestoneByDelta
//

// Action to add graphQL query data to state
export const setIndividualsData = payload => {
  // console.log('PAYLOAD in graph-actions.js: ', payload)
  return {
    type: 'setIndividualsData',
    payload: payload,
  }
}

export const setFocusedTrackId = payload => {
  // console.log('PAYLOAD in graph-actions.js: ', payload)
  return {
    type: 'setFocusedTrackId',
    payload: payload,
  }
}

export const handleTrackMilestoneChange = payload => {
  // console.log('PAYLOAD in graph-actions.js: ', payload)
  return {
    type: 'handleTrackMilestoneChange',
    payload: payload,
  }
}

export const setTitle = payload => {
  // console.log('PAYLOAD in graph-actions.js: ', payload)
  return {
    type: 'setTitle',
    payload: payload,
  }
}

export const NameInputChange = payload => {
  // console.log('PAYLOAD in graph-actions.js: ', payload)
  return {
    type: 'NameInputChange',
    payload: payload,
  }
}

// selectNextTrack
export const selectNextTrack = payload => {
  // console.log('PAYLOAD in graph-actions.js: ', payload)
  console.log('select NEXT track --------------------')
  return {
    type: 'shiftFocusedTrack',
    payload: 1,
  }
}

// selectPrevTrack
export const selectPrevTrack = payload => {
  // console.log('PAYLOAD in graph-actions.js: ', payload)
  return {
    type: 'shiftFocusedTrack',
    payload: -1,
  }
}
