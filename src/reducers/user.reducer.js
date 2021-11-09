const stateInit = {
  email: '',
  firstName: '',
  lastName: '',
  createAt: '',
  updateAt: '',
  id: '',
  isEditing: false,
}

export default function userReducer(state = stateInit, action) {
  switch (action.type) {
    case 'GET_USER_DATAS':
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        createAt: action.payload.createAt,
        updateAt: action.payload.updateAt,
        id: action.payload.id,
      }
    case 'DELETE_USER_DATAS':
      return {
        stateInit,
      }
    case 'EDIT_USER_ID':
      return {
        ...state,
        isEditing: action.payload.isEditing,
      }
    case 'NEW_USER_ID':
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        isEditing: false,
      }
    default:
      return state
  }
}
