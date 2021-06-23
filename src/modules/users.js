import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";

export const LIST_USERS = 'LIST_USERS';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

const usersReducer = (state = [], action) => {
  switch (action.type) {

    case LIST_USERS + SUCCESS_SUFFIX:
      return action.payload.data;

    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload.user.id);

    default:
      return state;
  }
};

export default usersReducer;

export const allUsers = () => ({

  type: LIST_USERS,
  payload: {
    request: {
      url: 'https://localhost:5001/user',

    },
  },
});
export const addUser = user => {console.log(user.id)
  console.log(`${UserService.getUsername()} added the user ${user.id}`);
  return {
    type: ADD_USER,
    payload: {
      request: {
        url: 'https://localhost:5001/user',
        method: HttpService.HttpMethods.POST,
        data: user,
      },
    },
  }
};

// export const editUser = user => {console.log(user.id)
//   console.log(`${UserService.getUsername()} added the user ${user.id}`);
//   return {
//     type: ADD_USER,
//     payload: {
//       request: {
//         url: 'https://localhost:5001/api/Users/Status',
//         method: HttpService.HttpMethods.POST,
//         data: user,
//       },
//     },
//   }
// };


export const editUser = user => {console.log(user.id)
  console.log(`${UserService.getUsername()} added the user ${user.id}`);
  return {
    type: ADD_USER,
    payload: {
      request: {
        url: 'https://localhost:5001/user',
        method: HttpService.HttpMethods.Patch,
        data: user,
      },
    },
  }
};

export const deleteUser = user => {
  console.log(`${UserService.getUsername()} deletes the user ${user.id}`);
  return {
    type: DELETE_USER,
    payload: {
      user,
      request: {
        url: `https://localhost:5001/user/${user.id}`,
        method: HttpService.HttpMethods.DELETE,
      },
    },
  }
};
////////////////////////////////////////////////////////////////
export const changes = () => ({

  type: LIST_USERS,
  payload: {
    request: {
      url: 'https://localhost:5001/user',

    },
  },
});
