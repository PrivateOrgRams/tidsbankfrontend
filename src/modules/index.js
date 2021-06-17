import { combineReducers } from "redux";
import users from "./users";
import ineligibleperiod from "./ineligibleperiod"

export default  combineReducers({
 users, ineligibleperiod
});

