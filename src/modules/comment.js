import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";

const LIST_COMMENTS = 'LIST_COMMENTS';
//const EDIT_COMMENT = 'EDIT_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
//const SINGLE_COMMENT = 'SINGLE_COMMENT';


const commentReducer = (state = [], action) => {
    switch (action.type) {

        case LIST_COMMENTS + SUCCESS_SUFFIX:
            return action.payload.data;

        case DELETE_COMMENT:
            return state.filter((comment) => comment.id !== action.payload.comment.id);

        default:
            return state;
    }
};

export default commentReducer;

export const allUsers = () => ({

    type: LIST_COMMENTS,
    payload: {
        request: {
            url: 'https://localhost:5001/comment',

        },
    },
});
export const addComment = comment => {
    console.log(`${UserService.getUsername()} added the comment ${comment.id}`);
    return {
        type: ADD_COMMENT,
        payload: {
            request: {
                url: 'https://localhost:5001/comment',
                method: HttpService.HttpMethods.POST,
                data: comment,
            },
        },
    }
};
export const deleteComment = comment => {
    console.log(`${UserService.getUsername()} deletes the comment ${comment.id}`);
    return {
        type: DELETE_COMMENT,
        payload: {
            comment,
            request: {
                url: `https://localhost:5001/comment/${comment.id}`,
                method: HttpService.HttpMethods.DELETE,
            },
        },
    }
};


////////////////////////////////////////////////////////////////
export const changes = () => ({

    type: LIST_COMMENTS,
    payload: {
      request: {
        url: 'https://localhost:5001/comment',
  
      },
    },
  });
  