const { createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const thunk = require("redux-thunk");
const rootReducer = require("../reducers");

const configureStore = (initValues) => {
  return createStore(
    rootReducer,
    initValues,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
