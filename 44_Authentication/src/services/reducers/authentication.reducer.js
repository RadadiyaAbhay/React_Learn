import { GOOGLESIGNINREJ, GOOGLESIGNINREQ, GOOGLESIGNINRES, SIGNINREJ, SIGNINREQ, SIGNINRES, SIGNOUTREJ, SIGNOUTREQ, SIGNOUTRES, SIGNUPREJ, SIGNUPREQ, SIGNUPRES } from "../const";

const initialState = {
    err: null,
    isLoading: false,
    isSignUp: false,
    isLogin: false,
    user: null
}
export const authenticationReducer = (state = initialState, action) => {

    switch (action.type) {
        case GOOGLESIGNINREQ:
            return {
                ...state,
                isLoading: true
            }
        case GOOGLESIGNINRES:
            return {
                ...state,
                isLoading: false,
                err: null,
                isLogin: true,
                user: action.payload
            }
        case GOOGLESIGNINREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case SIGNINREQ:
            return {
                ...state,
                isLoading: true
            }
        case SIGNINRES:
            return {
                ...state,
                isLoading: false,
                err: null,
                isLogin: true,
                user: action.payload
            }
        case SIGNINREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case SIGNUPREQ:
            return {
                ...state,
                isLoading: true
            }
        case SIGNUPRES:
            return {
                ...state,
                isLoading: false,
                err: null,
                isSignUp: true
            }
        case SIGNUPREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case SIGNOUTREQ:
            return {
                ...state,
                isLoading: true
            }
        case SIGNOUTRES:
            return {
                ...state,
                isLoading: false,
                err: null,
                isLogin: false,
                user: null
            }
        case SIGNOUTREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        default:
            return state;
    }
}