import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";

const LIST_SETTINGS = 'LIST_SETTINGS';
//const EDIT_COMMENT = 'EDIT_COMMENT';
const ADD_SETTING = 'ADD_SETTING';
const DELETE_SETTING = 'DELETE_SETTING';
//const SINGLE_COMMENT = 'SINGLE_COMMENT';


const settingReducer = (state = [], action) => {
    switch (action.type) {

        case LIST_SETTINGS + SUCCESS_SUFFIX:
            return action.payload.data;

        case DELETE_SETTING:
            return state.filter((setting) => setting.id !== action.payload.setting.id);

        default:
            return state;
    }
};

export default settingReducer;

export const allUsers = () => ({

    type: LIST_SETTINGS,
    payload: {
        request: {
            url: 'https://localhost:5001/Settings',

        },
    },
});

export const addSetting = setting => {
    console.log(`${UserService.getUsername()} added the setting ${setting.id}`);
    return {
        type: ADD_SETTING,
        payload: {
            request: {
                url: 'C',
                method: HttpService.HttpMethods.POST,
                data: setting,
            },
        },
    }
};

export const deleteSetting = setting => {
   // console.log(`${UserService.getUsername()} deletes the comment ${comment.id}`);
    return {
        type: DELETE_SETTING,
        payload: {
            setting,
            request: {
                url: `https://localhost:5001/Settings/${setting.id}`,
                method: HttpService.HttpMethods.DELETE,
            },
        },
    }
};

////////////////////////////////////////////////////////////////

export const changes = () => ({

    type: LIST_SETTINGS,
    payload: {
      request: {
        url: 'https://localhost:5001/Settings',

      },
    },
  });
