const initialState = {
  users:[],
  editUser: {},
  showAdd: false,
  showModal: false,
  showDelete: false,
  deleteId: null,
}

const uxReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ux/getUsers':
      return {
        ...state,
        users: action.payload.users,
        showModal: false,
        showDelete: false,
        showAdd:false,
      }
      case 'ux/editUser':
        return {
          ...state,
          editUser: action.payload.editUser,
          showModal: true
        }
      case 'ux/deleteUser':
      return {
        ...state,
        showDelete: true
      }
      case 'ux/closeModal':
      return {
        ...state,
        showModal: false,
        showDelete: false,
        showAdd:false,
      }
      case 'ux/promptDelete':
      return {
        ...state,
          deleteId: action.payload.deleteId,
          showDelete: true
      }
      case 'ux/promptAdd':
      return {
        ...state,
          showAdd: true
      }
    default:
      return state
  }
}

export default uxReducer