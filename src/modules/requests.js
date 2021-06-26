import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
//import UserService from "../services/UserService";
const LIST_REQUESTS = 'LIST_REQUESTS';
//const EDIT_COMMENT = 'EDIT_COMMENT';
const ADD_REQUEST = 'ADD_REQUEST';
const DELETE_REQUEST = 'DELETE_REQUEST';
//const SINGLE_COMMENT = 'SINGLE_COMMENT';


const requestReducer = (state = [], action) => {
    switch (action.type) {

        case LIST_REQUESTS + SUCCESS_SUFFIX:
            return action.payload.data;

        case DELETE_REQUEST:
            return state.filter((request) => request.id !== action.payload.request.id);

        default:
            return state;
    }
};

export default requestReducer;

export const allRequests = () => ({

    type: LIST_REQUESTS,
    payload: {
        request: {
            url: 'https://localhost:5001/request',

        },
    },
});

// export const addRequest = request => {
//     console.log(`${UserService.getUsername()} added the request ${request.id}`);
//     return {
//         type: ADD_REQUEST,
//         payload: {
//             request: {
//                 url: 'https://localhost:5001/Requests',
//                 method: HttpService.HttpMethods.POST,
//                 data: request,
//             },
//         },
//     }
// };


export const addRequest = request => {
  return {
      type: ADD_REQUEST,
      payload: {
          request: {
              url: 'https://localhost:5001/request',
              method: HttpService.HttpMethods.POST,
              validateStatus: function (status) {
                if (status===400) {
                } else {
                  return status
                }
               return status ; // default
              },
              data: request,
          },
      },
  }
};






export const deleteRequest = request => {
   // console.log(`${UserService.getUsername()} deletes the request ${request.id}`);
    return {
        type: DELETE_REQUEST,
        payload: {
            request,
            request: {
                url: `https://localhost:5001/request/${request.id}`,
                method: HttpService.HttpMethods.DELETE,
            },
        },
    }
};


