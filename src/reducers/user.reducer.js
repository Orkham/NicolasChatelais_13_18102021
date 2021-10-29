const stateInit = {
  email: '',
  firstName: '',
  lastName: '',
  createAt: '',
  updateAt: '',
  id: '',
}

export default function userReducer(state = stateInit, action) {
  switch (action.type) {
    case 'GET_USER_DATAS':
      return {
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        createAt: action.payload.createAt,
        updateAt: action.payload.updateAt,
        id: action.payload.id,
      }
    case 'DELETE_USER_DATAS':
      return {
        state,
      }
    default:
      return state
  }
}
