import {DELETEUSERREJ, DELETEUSERREQ, EDITUSERREJ, EDITUSERREQ, USERSREJ, USERSREQ, USERSRES, SINGLEUSERREJ, SINGLEUSERREQ, SINGLEUSERRES } from "../const";

const initialState = {
    isLoading: false,
    err: null,
    user: null,
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERSREQ:
            return {
                ...state,
                isLoading: true,
            }
        case USERSRES:
            return {
                ...state,
                isLoading: false,
                users: action.payload,
                user: null,
                err : null
            }
        case USERSREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case SINGLEUSERREQ:
            return {
                ...state,
                isLoading: true,
            }
        case SINGLEUSERRES:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                err : null
            }
        case SINGLEUSERREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case EDITUSERREQ:
            return {
                ...state,
                isLoading: true,
                err : null
            }
        case EDITUSERREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case DELETEUSERREQ:
            return {
                ...state,
                isLoading: true,
                err : null
            }
        case DELETEUSERREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        default:
            return state;
    }
}