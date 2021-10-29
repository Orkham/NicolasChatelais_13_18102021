const stateInit = {
  connected: false,
  token: '',
}

export default function loginReducer(state = stateInit, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        connected: true,
        token: action.payload.token,
      }
    case 'SIGN_OUT':
      return {
        connected: false,
        token: '',
      }
    default:
      return state
  }
}
