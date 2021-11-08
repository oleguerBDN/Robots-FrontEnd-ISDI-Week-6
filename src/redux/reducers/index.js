import { combineReducers } from "redux";
import robotReducer from "./robotReducer";
import robotsReducer from "./robotsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
  robot: robotReducer,
  user: userReducer,
});

export default rootReducer;
