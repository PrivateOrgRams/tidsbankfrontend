import { combineReducers } from "redux";
import users from "./users";
import ineligibleperiod from "./ineligibleperiod"
import request from "./requests"

export default  combineReducers({
 users, ineligibleperiod,request
});

