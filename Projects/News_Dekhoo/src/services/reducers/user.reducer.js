import { getData, setData } from "../../utilities/state";
import { CREATEUSERREQ, CREATEUSERREJ, GOOGLESIGNINREJ, GOOGLESIGNINREQ, GOOGLESIGNINRES, SIGNINREJ, SIGNINREQ, SIGNINRES, SIGNOUTREJ, SIGNOUTREQ, SIGNOUTRES, SIGNUPREJ, SIGNUPREQ, SIGNUPRES, CREATEUSERRES, DELETEUSERREJ, DELETEUSERREQ, EDITUSERREJ, EDITUSERREQ, SINGLEUSERREJ, SINGLEUSERRES, SINGLEUSERREQ, USERSREJ, USERSRES, USERSREQ, ISROLEFINDREQ, ISROLEFINDRES, ISROLEFINDREJ } from "../const";

const k = getData('users')
let initialState
if (k == null) {
    initialState = {
        err: null,
        isLoading: false,
        isSignUp: false,
        isSignIn: false,
        user: null,
        users: [],
        isRole: false
    }
} else {
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
                isSignIn: true,
                user: action.payload
            })

            return {
                ...state,
                isLoading: false,
                err: null,
                isSignIn: true,
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
                isSignIn: true,
                isSignUp: false
            })

            return {
                ...state,
                isLoading: false,
                err: null,
                user: action.payload,
                isSignIn: true,
                isSignUp: false
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
                isSignIn: false,
                user: null,
                isRole: false
            })

            return {
                ...state,
                isLoading: false,
                err: null,
                isSignIn: false,
                user: null,
                isRole: false
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
                err: null
            }
        case USERSREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case SINGLEUSERREQ:
            setData('users', {
                ...state,
                isLoading: true,
                users : []
            })
            return {
                ...state,
                isLoading: true,
            }
        case SINGLEUSERRES:
            setData('users', {
                ...state,
                isLoading: false,
                user: action.payload,
                err: null,
                users : []
            })
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                err: null
            }
        case SINGLEUSERREJ:
            setData('users', {
                ...state,
                isLoading: false,
                err: action.payload,
                users : []
            })
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case EDITUSERREQ:
            return {
                ...state,
                isLoading: true,
                err: null
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
                err: null
            }
        case DELETEUSERREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case ISROLEFINDREQ:
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
        case ISROLEFINDRES:
            setData('users', {
                ...state,
                isLoading: false,
                isRole: true,
                err: null
            })

            return {
                ...state,
                isLoading: true,
                isRole: true,
                err: null
            }
        case ISROLEFINDREJ:
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