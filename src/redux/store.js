import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise-middleware";
import animalsReducer from "./reducers/animalsReducer";
import userReducer from "./reducers/userReducer";
import shelterReducer from "./reducers/shelterReducer";

const middleware = [thunk, promiseMiddleware];
const rootReducer = combineReducers({
  animals: animalsReducer,
  user: userReducer,
  shelter: shelterReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));