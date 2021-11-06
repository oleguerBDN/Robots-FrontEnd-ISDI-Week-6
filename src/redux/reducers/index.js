import { combineReducers } from "redux";
import robotReducer from "./robotReducer";
import robotsReducer from "./robotsReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
  robot: robotReducer,
});

export default rootReducer;
