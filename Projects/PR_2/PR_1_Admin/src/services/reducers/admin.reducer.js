import { getData, setData } from "../../utilities/state";
import { ADMINLOGINREJ, ADMINLOGINREQ, ADMINLOGINRES, SIGNOUTREJ, SIGNOUTREQ, SIGNOUTRES, SINGLEADMINREJ, SINGLEADMINREQ, SINGLEADMINRES } from "../const";
const k = getData('admin')
let initialState
if (k == null) {
    initialState = {
        err: null,
        isLoading: false,
        isLogin: false,
        user: null
    }
} else {
    initialState = k
}
export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADMINLOGINREQ:
            setData('admin',{
                ...state,
                isLoading: true,
                err: null                
            })
            return {
                ...state,
                isLoading: true,
                err: null
            }
        case ADMINLOGINRES:
            setData('admin',{
                ...state,
                isLoading: false,
                isLogin: true,
                user: action.payload,
                err: null
            })
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                user: action.payload,
                err: null
            }
        case ADMINLOGINREJ:
            setData('admin',{
                ...state,
                isLoading: false,
                isLogin: false,
                err: action.payload,
                user: null
            })
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                err: action.payload,
                user: null
            }
        case SIGNOUTREQ:
            setData('admin',{
                ...state,
                isLoading: true
            })
            return {
                ...state,
                isLoading: true
            }
        case SIGNOUTRES:
            setData('admin',{
                ...state,
                isLoading: false,
                err: null,
                isLogin: false,
                user: null
            })
            return {
                ...state,
                isLoading: false,
                err: null,
                isLogin: false,
                user: null
            }
        case SIGNOUTREJ:
            setData('admin',{
                ...state,
                isLoading: false,
                err: action.payload
            })
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case SINGLEADMINREQ:
            setData('admin',{
                ...state,
                isLoading: true,
            })
            return {
                ...state,
                isLoading: true,
            }
        case SINGLEADMINRES:
            setData('admin',{
                ...state,
                isLoading: false,
                user: action.payload,
                err: null
            })
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                err: null
            }
        case SINGLEADMINREJ:
            setData('admin',{
                ...state,
                isLoading: false,
                err: action.payload
            })
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        default:
            return state;
    }
}    