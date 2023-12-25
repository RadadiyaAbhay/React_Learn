import { CREATEADMINSREJ, CREATEADMINSREQ, DELETEADMINSREJ, DELETEADMINSREQ, DONEEDITADMINSREJ, DONEEDITADMINSREQ, EDITADMINSREJ, EDITADMINSREQ, EDITADMINSRES, ADMINSREJ, ADMINSREQ, ADMINSRES } from "../const";

const initialState ={
    isLoading : false,
    err : null,
    admins:[],
    admin: null
}

export const adminsReducer = (state = initialState , action) =>{
    switch (action.type) {
        case ADMINSREQ:
            return{
                ...state,
                isLoading : true
            }

        case ADMINSRES:
            return{
                ...state,
                isLoading: false,
                admins : action.payload
            }
        case ADMINSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }
        
        case DELETEADMINSREQ:
            return{
                ...state,
                isLoading : true
            }
        
        case DELETEADMINSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }

        case EDITADMINSREQ:
            return{
                ...state,
                isLoading : true
            }

        case EDITADMINSRES:
            return{
                ...state,
                isLoading: false,
                admin : action.payload
            }
        case EDITADMINSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }
        case DONEEDITADMINSREQ:
            return{
                ...state,
                isLoading : true
            }
        case DONEEDITADMINSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }
        case CREATEADMINSREQ:
            return{
                ...state,
                isLoading : true
            }
        case CREATEADMINSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}