import * as ACTIONS from '../actions/actions_types.js'

const stateInit = {
  connected: false,
  bonjour: true,
}

export default function reducer(state = stateInit, action) {
  let newState
  if (action.type === ACTIONS.TEST) {
    console.log('test')
    newState = state
  } else if (action.type === ACTIONS.SIGN_IN) {
    //console.log('sign-in')
    newState = state
  } else {
    newState = state
  }
  //console.log(action, newState)
  return newState
}
