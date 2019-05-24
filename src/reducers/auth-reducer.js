const initialState = {
  user: {},
}

export default (state = initialState, action) => {
  const { user, type } = action
  switch (type) {
    case 'LOGIN':
      return Object.assign({}, state, { user })
    case 'LOGOUT':
      return Object.assign({}, state, { user: {} })
    default:
      return state
  }
}
