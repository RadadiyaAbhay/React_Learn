import { combineReducers } from "redux";
import { adminReducer } from "./admin.reducer";
import { productReducer } from "./product.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = combineReducers({
    adminReducer , productReducer , userReducer
})