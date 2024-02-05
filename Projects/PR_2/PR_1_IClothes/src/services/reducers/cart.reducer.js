import { getData, setData } from "../../utilities/state";
import { CARTREJ, CARTREQ, CARTRES, GETCARTREJ, GETCARTREQ, GETCARTRES, SIGNOUTCARTRES } from "../const";

const oldData = getData('cart')
let initialState
if (oldData == null) {
    initialState = {
        isLoading: false,
        err: null,
        cartProduct: {product : []},
    }
} else {
    initialState = oldData
}
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARTREQ:
            setData('cart', {
                ...state,
                isLoading: true,
            })

            return {
                ...state,
                isLoading: true,
            }
        case CARTRES:
            setData('cart', {
                ...state,
                isLoading: false,
                cartProduct: action.payload,
                err: null
            })

            return {
                ...state,
                isLoading: false,
                cartProduct: action.payload,
                err: null
            }
        case CARTREJ:
            setData('cart', {
                ...state,
                isLoading: false,
                err: action.payload
            })

            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case SIGNOUTCARTRES:
            setData('cart', {
                ...state,
                cartProduct: action.payload,
                isLoading: false,
                err: null
            })
            return {
                ...state,
                cartProduct: action.payload,
                isLoading: false,
                err: null
            }

        case GETCARTREQ:
            setData('cart', {
                ...state,
                isLoading: true,
            })

            return {
                ...state,
                isLoading: true,
            }
        case GETCARTRES:
            setData('cart', {
                ...state,
                isLoading: false,
                cartProduct: action.payload,
                err: null
            })

            return {
                ...state,
                isLoading: false,
                cartProduct: action.payload,
                err: null
            }
        case GETCARTREJ:
            setData('cart', {
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