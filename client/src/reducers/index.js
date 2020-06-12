// We’ll use combinedReducers from redux to combine our authReducer and errorReducer into one rootReducer.
// rootReducer
import { combineReducers } from "redux";
import authReducer from "./authreducers";
import errorReducer from "./errorReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
