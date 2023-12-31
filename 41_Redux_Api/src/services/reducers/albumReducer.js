import { ALBUMREJ, ALBUMREQ, ALBUMSUC } from "../const";

const initialState = {
    isLoading : false,
    err : false,
    albums : [],
    album : null
}

export const albumReducer = (state = initialState , action) =>{
    switch (action.type) {
        case ALBUMREQ:
            return {
                ...state,
                isLoading : true
            };
        
        case ALBUMSUC:
            return {
                ...state,
                isLoading : false,
                albums : action.payload
            };
        
        case ALBUMREJ:
            return {
                ...state,
                err : true,
                isLoading : false
            };
                
    
        default:
            return state;
    }
}