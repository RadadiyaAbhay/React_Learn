import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./services/reducers";
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    rootReducer , composeEnhancers(applyMiddleware(thunk))
)