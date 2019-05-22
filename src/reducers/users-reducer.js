const initialState = {}

export default (state = initialState, action) => {
  const { data, type } = action
  switch (type) {
    case 'PULL_USERS':
      return data
    default:
      return state
  }
}
