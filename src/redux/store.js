import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise-middleware";
import animalsReducer from "./reducers/animalsReducer";
import userReducer from "./reducers/userReducer";

const middleware = [thunk, promiseMiddleware];
const rootReducer = combineReducers({
  animals: animalsReducer,
  user: userReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));