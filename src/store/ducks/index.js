import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./auth";

const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth
  });

const Reducers = history => appReducer(history);

export default Reducers;
