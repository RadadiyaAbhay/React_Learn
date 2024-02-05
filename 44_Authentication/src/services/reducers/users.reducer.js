import { ADDUSERREJ, ADDUSERREQ } from "../const";

const initialState = {
    user: null,
    err: null,
    users : [],
    isLoading : false
}
export const userReducer = (state = initialState ,action) =>{
    
    switch (action.type) {
        case ADDUSERREQ:
            return{
                ...state,
                isLoading:true
            }
        case ADDUSERREJ:
            return{
                ...state,
                isLoading:false,
                err : action.payload
            }
        default:
            return state;
    }
}