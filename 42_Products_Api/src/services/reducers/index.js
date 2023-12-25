import { combineReducers } from "redux";
import {productsReducer} from "./products.reducer"
import {adminsReducer} from "./admins.reducer"
import {usersReducer} from "./users.reducer"

export const rootReducer = combineReducers({productsReducer , adminsReducer , usersReducer})