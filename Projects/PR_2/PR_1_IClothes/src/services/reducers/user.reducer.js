import { getData, setData } from "../../utilities/state";
import { CREATEUSERREQ, CREATEUSERREJ, GOOGLESIGNINREJ, GOOGLESIGNINREQ, GOOGLESIGNINRES, SIGNINREJ, SIGNINREQ, SIGNINRES, SIGNOUTREJ, SIGNOUTREQ, SIGNOUTRES, SIGNUPREJ, SIGNUPREQ, SIGNUPRES, CREATEUSERRES } from "../const";

const k = getData('users')
let initialState
if(k == null){
    initialState = {
    err: null,
    isLoading: false,
    isSignUp: false,
    isLogin: false,
    user: null
}
}else{
    initialState = k
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEUSERREQ:
            setData('users', {
                ...state,
                isLoading: true,
                err: null
            })

            return {
                ...state,
                isLoading: true,
                err: null
            }

            case CREATEUSERRES:
                setData('users', {
                    ...state,
                    isLoading: false,
                    err: null,
                })
    
                return {
                    ...state,
                    isLoading: false,
                    err: null,
                }
        case CREATEUSERREJ:
            setData('users', {
                ...state,
                isLoading: false,
                err: action.payload
            })

            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case GOOGLESIGNINREQ:
            setData('users', {
                ...state,
                isLoading: true
            })

            return {
                ...state,
                isLoading: true
            }
        case GOOGLESIGNINRES:
            setData('users', {
                ...state,
                isLoading: false,
                err: null,
                isLogin: true,
                user: action.payload
            })

            return {
                ...state,
                isLoading: false,
                err: null,
                isLogin: true,
                user: action.payload
            }
        case GOOGLESIGNINREJ:
            setData('users', {
                ...state,
                isLoading: false,
                err: action.payload
            })

            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case SIGNINREQ:
            setData('users', {
                ...state,
                isLoading: true,
                user: null
            })

            return {
                ...state,
                isLoading: true,
                user: null
            }
        case SIGNINRES:
            setData('users', {
                ...state,
                isLoading: false,
                err: null,
                user: action.payload,
                isLogin: true,
                isSignUp:false
            })

            return {
                ...state,
                isLoading: false,
                err: null,
                user: action.payload,
                isLogin: true,
                isSignUp:false
            }
        case SIGNINREJ:
            setData('users', {
                ...state,
                isLoading: false,
                err: action.payload
            })

            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case SIGNUPREQ:
            setData('users', {
                ...state,
                isLoading: true
            })

            return {
                ...state,
                isLoading: true
            }
        case SIGNUPRES:
            setData('users', {
                ...state,
                isLoading: false,
                err: null,
                isSignUp: true
            })

            return {
                ...state,
                isLoading: false,
                err: null,
                isSignUp: true
            }
        case SIGNUPREJ:
            setData('users', {
                ...state,
                isLoading: false,
                err: action.payload
            })

            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case SIGNOUTREQ:
            setData('users', {
                ...state,
                isLoading: true
            })

            return {
                ...state,
                isLoading: true
            }
        case SIGNOUTRES:
            setData('users', {
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
            setData('users', {
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