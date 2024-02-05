import { combineReducers } from "redux";
import {userReducer} from './users.reducer'
import {authenticationReducer} from './authentication.reducer'

export const rootReducer = combineReducers({
    userReducer , authenticationReducer
})