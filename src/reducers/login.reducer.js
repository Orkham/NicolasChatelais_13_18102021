import { stateInit } from '../App'

export default function reducer(state = stateInit, action) {
  switch (action.type) {
    case 'SIGN_IN':
      //console.log('connect')
      return {
        ...state,
        connected: true,
      }
    default:
      return state
  }
}
