import * as ACTIONS from '../actions/actions_types.js'

const stateInit = {
  connected: false,
  bonjour: true,
}

export default function reducer(state = stateInit, action) {
  
  if (action.type === ACTIONS.TEST) {
    return { ...state, bonjour: !state.bonjour }
  } else if (action.type === ACTIONS.SIGN_IN) {
    return { ...state, connected: !state.connected }
  } else {
    return state
  }
  
}
