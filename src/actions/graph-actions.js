// things to put in
//setFocusedTrackId
//shiftFocusedTrackId
//shiftFocusedTrack
// shiftFocusedTrackMilestoneByDelta
//

export const setFocusedTrackId = payload => {
  // console.log('PAYLOAD in graph-actions.js: ', payload)
  return {
    type: 'setFocusedTrackId',
    payload: payload,
  }
}
