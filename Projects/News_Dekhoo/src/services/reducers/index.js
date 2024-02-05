import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { adminReducer } from "./admin.reducer";
import { blogReducer } from "./blog.reducer";

export const rootReducer = combineReducers({
    userReducer , adminReducer , blogReducer
})