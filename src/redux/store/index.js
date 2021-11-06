import thunk from "redux-thunk";
import rootReducer from "../reducers";
const { createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");

const configureStore = (initValues) => {
  return createStore(
    rootReducer,
    initValues,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
