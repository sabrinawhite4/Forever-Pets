import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import animalsReducer from "./animalsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  animals: animalsReducer,
  user: userReducer,
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));