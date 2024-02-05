import { CREATEPRODUCTREJ, CREATEPRODUCTREQ, DELETEPRODUCTREJ, DELETEPRODUCTREQ, EDITPRODUCTREJ, EDITPRODUCTREQ, PRODUCTSREJ, PRODUCTSREQ, PRODUCTSRES, SINGLEPRODUCTREJ, SINGLEPRODUCTREQ, SINGLEPRODUCTRES } from "../const";

const initialState = {
    isLoading: false,
    err: null,
    product: null,
    products: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTSREQ:
            return {
                ...state,
                isLoading: true,
            }
        case PRODUCTSRES:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                product: null,
                err : null
            }
        case PRODUCTSREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case CREATEPRODUCTREQ:
            return {
                ...state,
                isLoading: true,
                err : null
            }
        case CREATEPRODUCTREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case SINGLEPRODUCTREQ:
            return {
                ...state,
                isLoading: true,
            }
        case SINGLEPRODUCTRES:
            return {
                ...state,
                isLoading: false,
                product: action.payload,
                err : null
            }
        case SINGLEPRODUCTREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case EDITPRODUCTREQ:
            return {
                ...state,
                isLoading: true,
                err : null
            }
        case EDITPRODUCTREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case DELETEPRODUCTREQ:
            return {
                ...state,
                isLoading: true,
                err : null
            }
        case DELETEPRODUCTREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        default:
            return state;
    }
}