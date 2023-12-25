import { CREATEUSERSREJ, CREATEUSERSREQ, DELETEUSERSREJ, DELETEUSERSREQ, DONEEDITUSERSREJ, DONEEDITUSERSREQ, EDITUSERSREJ, EDITUSERSREQ, EDITUSERSRES, USERSREJ, USERSREQ, USERSRES } from "../const";

const initialState ={
    isLoading : false,
    err : null,
    users:[],
    user: null
}

export const usersReducer = (state = initialState , action) =>{
    switch (action.type) {
        case USERSREQ:
            return{
                ...state,
                isLoading : true
            }

        case USERSRES:
            return{
                ...state,
                isLoading: false,
                users : action.payload
            }
        case USERSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }
        
        case DELETEUSERSREQ:
            return{
                ...state,
                isLoading : true
            }
        
        case DELETEUSERSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }

        case EDITUSERSREQ:
            return{
                ...state,
                isLoading : true
            }

        case EDITUSERSRES:
            return{
                ...state,
                isLoading: false,
                user : action.payload
            }
        case EDITUSERSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }
        case DONEEDITUSERSREQ:
            return{
                ...state,
                isLoading : true
            }
        case DONEEDITUSERSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }
        case CREATEUSERSREQ:
            return{
                ...state,
                isLoading : true
            }
        case CREATEUSERSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}