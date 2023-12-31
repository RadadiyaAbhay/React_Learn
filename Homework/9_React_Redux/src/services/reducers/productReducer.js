import { CREATEPRO } from "../const"

const initialState = {
    products : [],
    product : null
}
export const productReducer = (state = initialState , action) => {
    switch (action.type) {
        case CREATEPRO:
            return{
                ...state,
                products :[...state.products , action.payload]
            }
    
        default:
            return state;
            
    }
}