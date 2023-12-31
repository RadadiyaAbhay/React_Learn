import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { studentReducer } from "../services/reducers/sudentReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(studentReducer , composeEnhancers(
    applyMiddleware(thunk)
))