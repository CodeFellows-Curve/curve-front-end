const initialState = {
  loggedIn: true,
  user: {
    username: null,
    name: null,
    email: null,
  },
}

export default (state = initialState, action) => {
  const { user, type } = action
  switch (type) {
    case 'LOGIN':
      return Object.assign({}, state, { loggedIn: true, user })
    case 'LOGOUT':
      return Object.assign({}, state, {
        loggedIn: false,
        user: initialState.user,
      })
    default:
      return state
  }
}
