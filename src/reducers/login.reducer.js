const stateInit = {
  connected: false,
  token: '',
  isLoading: false,
  isLoggingOut: false,
}

export default function loginReducer(state = stateInit, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        connected: true,
        token: action.payload.token,
        isLoading: !state.isLoading,
      }
    case 'SIGN_OUT':
      return {
        stateInit,
      }
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    case 'IS_LOGGING_OUT':
      return {
        ...state,
        isLoggingOut: action.payload.isLoggingOut,
      }
    default:
      return state
  }
}
