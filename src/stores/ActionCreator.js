import listActions from "./ActionType"

// UX
export const getUsers = () => {
  return async (dispatch, getState) => {
    const res = await fetch('https://dummyjson.com/users')
    const { users } = await res.json()
    dispatch({type:listActions.getUsers, payload:{users}})
  }
}

export const editUsers = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch('https://dummyjson.com/users/'+id)
    const editUser = await res.json()
    console.log(editUser, 'di action creator')
    dispatch({type:listActions.editUser, payload:{editUser}})
  }
}

export const closeModal = () => {
  return async (dispatch, getState) => {
    dispatch({type:listActions.closeModal})
  }
}

export const putUser = (id, user) => {
  return async (dispatch, getState) => {
    // const res = await fetch('https://dummyjson.com/users/'+id, {
    //   method: 'PUT', /* or PATCH */
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     email: user.email,
    //   })
    // })
    // const editedUser = await res.json()
    // console.log(editedUser)
    const users = getState().uxReducer.users
    const newUsers = users.map((obj) => {
      if (obj.id === id) {
        return user;
      }
      return obj;
    });
    console.log(newUsers)
    dispatch({type:listActions.getUsers, payload:{users:newUsers}})
  }
}

export const promptDelete = (id) => {
  return async (dispatch, getState) => {
    dispatch({type:listActions.promptDelete, payload:{deleteId:id}})
  }
}

export const promptAdd = (id) => {
  return async (dispatch, getState) => {
    dispatch({type:listActions.promptAdd})
  }
}

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    // const res = await fetch('https://dummyjson.com/users/'+id, {
    //   method: 'DELETE'
    // })
    // const deletedUser = await res.json()
    // console.log(deletedUser)
    const users = getState().uxReducer.users
    const newUsers = users.filter(user => user.id !== id);
    dispatch({type:listActions.getUsers, payload:{users:newUsers}})
  }

}

export const addUser = (newUser) => {
  return async (dispatch, getState) => {
    // const res = await fetch('https://dummyjson.com/users/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newUser)
    // })
    // const addedUser = await res.json()
    // console.log(addedUser)
    const users = getState().uxReducer.users
    const newUsers = [...users, {id:users.length+1, ...newUser}];
    dispatch({type:listActions.getUsers, payload:{users:newUsers}})
  }
}

export const handleSearch = (search) => {
  return async (dispatch, getState) => {
    const newUsers = users.filter(user => (user.firstName == search || user.lastName == search || user.email == search));
    dispatch({type:listActions.getUsers, payload:{users:newUsers}})
  }
}