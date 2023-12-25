import { CREATEPRODUCTSREJ, CREATEPRODUCTSREQ, DELETEPRODUCTSREJ, DELETEPRODUCTSREQ, DONEEDITPRODUCTSREJ, DONEEDITPRODUCTSREQ, EDITPRODUCTSREJ, EDITPRODUCTSREQ, EDITPRODUCTSRES, PRODUCTSREJ, PRODUCTSREQ, PRODUCTSRES } from "../const";

const initialState ={
    isLoading : false,
    err : null,
    products:[],
    product: null
}

export const productsReducer = (state = initialState , action) =>{
    switch (action.type) {
        case PRODUCTSREQ:
            return{
                ...state,
                isLoading : true
            }

        case PRODUCTSRES:
            return{
                ...state,
                isLoading: false,
                products : action.payload
            }
        case PRODUCTSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }
        
        case DELETEPRODUCTSREQ:
            return{
                ...state,
                isLoading : true
            }
        
        case DELETEPRODUCTSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }

        case EDITPRODUCTSREQ:
            return{
                ...state,
                isLoading : true
            }

        case EDITPRODUCTSRES:
            return{
                ...state,
                isLoading: false,
                product : action.payload
            }
        case EDITPRODUCTSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }
        case DONEEDITPRODUCTSREQ:
            return{
                ...state,
                isLoading : true
            }
        case DONEEDITPRODUCTSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }
        case CREATEPRODUCTSREQ:
            return{
                ...state,
                isLoading : true
            }
        case CREATEPRODUCTSREJ:
            return{
                ...state,
                err: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}