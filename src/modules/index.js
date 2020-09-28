import { combineReducers } from "redux";
import countReducer from "./count";
import postReducer from "./post";

const rootReducer = combineReducers({ countReducer, postReducer });

export default rootReducer;
