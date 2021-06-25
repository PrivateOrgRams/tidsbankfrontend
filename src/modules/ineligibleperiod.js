import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";

const LIST_INELIGIBLEPERIODS = 'LIST_INELIGIBLEPERIODS';
//const EDIT_COMMENT = 'EDIT_COMMENT';
const ADD_INELIGIBLEPERIOD = 'ADD_INELIGIBLEPERIOD';
const DELETE_INELIGIBLEPERIOD = 'DELETE_INELIGIBLEPERIOD';
//const SINGLE_COMMENT = 'SINGLE_COMMENT';


const ineligibleperiodReducer = (state = [], action) => {
    switch (action.type) {

        case LIST_INELIGIBLEPERIODS + SUCCESS_SUFFIX:
            return action.payload.data;

        case DELETE_INELIGIBLEPERIOD:
            return state.filter((ineligibleperiod) => ineligibleperiod.id !== action.payload.ineligibleperiod.id);

        default:
            return state;
    }
};

export default ineligibleperiodReducer;

export const allIneligiblePeriod = () => ({

    type: LIST_INELIGIBLEPERIODS,
    payload: {
        request: {
            url: 'https://localhost:5001/ineligible',

        },
    },
});

//Post method
export const addIneligibleperiod = ineligibleperiod => {
   // console.log(`${UserService.getUsername()} added the ineligibleperiod ${ineligibleperiod.id}`);
    return {
        type: ADD_INELIGIBLEPERIOD,
        payload: {
            request: {
                url: 'https://localhost:5001/ineligible',
                method: HttpService.HttpMethods.POST,
                data: ineligibleperiod,
            },
        },
    }
};

export const deleteIneligibleperiod = ineligibleperiod => {
   // console.log(`${UserService.getUsername()} deletes the ineligibleperiod ${ineligibleperiod.id}`);
    return {
        type: DELETE_INELIGIBLEPERIOD,
        payload: {
            ineligibleperiod,
            request: {
                url: `https://localhost:5001/ineligible/${ineligibleperiod.id}`,
                method: HttpService.HttpMethods.DELETE,
            },
        },
    }
};

////////////////////////////////////////////////////////////////

