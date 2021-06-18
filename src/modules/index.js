import { combineReducers } from "redux";
import users from "./users";
import ineligibleperiod from "./ineligibleperiod"
import requests from "./requests"

export default  combineReducers({
 users, ineligibleperiod , requests
});

