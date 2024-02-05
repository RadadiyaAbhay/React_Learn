import { getData, setData } from "../../utilities/state";
import { PRODUCTSREJ, PRODUCTSREQ, PRODUCTSRES, SINGLEPRODUCTREJ, SINGLEPRODUCTREQ, SINGLEPRODUCTRES } from "../const";

const k = getData('products')
let initialState
if(k == null){
    initialState = {
        isLoading: false,
        err: null,
        singleProduct: null,
        products: []
    }
}else{
    initialState = k
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTSREQ:
            setData('products', {
                ...state,
                products: [],
                isLoading: true,
            })

            return {
                ...state,
                isLoading: true,
            }
        case PRODUCTSRES:
            setData('products', {
                ...state,
                isLoading: false,
                products: [],
                err: null
            })

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                err: null
            }
        case PRODUCTSREJ:
            setData('products', {
                ...state,
                products: [],
                isLoading: false,
                err: action.payload
            })

            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case SINGLEPRODUCTREQ:
            setData('products', {
                ...state,
                isLoading: true,
                products: [],
            })

            return {
                ...state,
                isLoading: true,
            }
        case SINGLEPRODUCTRES:
            setData('products', {
                ...state,
                isLoading: false,
                products: [],
                singleProduct: action.payload,
                err: null
            })

            return {
                ...state,
                isLoading: false,
                singleProduct: action.payload,
                err: null
            }
        case SINGLEPRODUCTREJ:
            setData('products', {
                ...state,
                products: [],
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