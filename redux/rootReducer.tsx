import { combineReducers } from "redux";
// ** Reducers Imports

import auth from "./auth.redux";
import notification from "./slices/notification.redux";

const rootReducer = combineReducers({
  auth,
  notification,
});

export default rootReducer;
