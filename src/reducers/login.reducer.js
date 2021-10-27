import * as ACTIONS from '../actions/actions_types.js'

const stateInit = {
  connected: false,
  firstName: '',
  lastName: '',
  email: '',
}

export default function reducer(state = stateInit, action) {
  if (action.type === ACTIONS.SIGN_IN) {
    return { ...state, connected: !state.connected }
  } else {
    return state
  }
}
