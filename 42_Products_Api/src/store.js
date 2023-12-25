import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./services/reducers";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
import { thunk } from "redux-thunk";

export const store = createStore(
    rootReducer , composeEnhancers(applyMiddleware(thunk))
)