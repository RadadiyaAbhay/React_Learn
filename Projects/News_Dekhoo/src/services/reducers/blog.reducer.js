import { getData, setData } from "../../utilities/state";
import { CREATEBLOGREJ, CREATEBLOGREQ, DELETEBLOGREJ, DELETEBLOGREQ, EDITBLOGREJ, EDITBLOGREQ, BLOGSREJ, BLOGSREQ, BLOGSRES, SINGLEBLOGREJ, SINGLEBLOGREQ, SINGLEBLOGRES } from "../const";

const k = getData('blogs')
let initialState
if (k == null) {
    initialState = {
        isLoading: false,
        err: null,
        blog: null,
        blogs: []
    }
} else {
    initialState = k
}
export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case BLOGSREQ:
            setData('blogs', {
                ...state,
                blogs: [],
                isLoading: true,
            })

            return {
                ...state,
                isLoading: true,
            }
        case BLOGSRES:
            setData('blogs', {
                ...state,
                isLoading: false,
                blogs: [],
                err: null
            })

            return {
                ...state,
                isLoading: false,
                blogs: action.payload,
                err: null
            }
        case BLOGSREJ:
            setData('blogs', {
                ...state,
                blogs: [],
                isLoading: false,
                err: action.payload
            })

            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case CREATEBLOGREQ:
            return {
                ...state,
                isLoading: true,
                err: null
            }
        case CREATEBLOGREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case SINGLEBLOGREQ:
            setData('blogs', {
                ...state,
                isLoading: true,
                blogs: [],
            })

            return {
                ...state,
                isLoading: true,
            }
        case SINGLEBLOGRES:
            setData('blogs', {
                ...state,
                isLoading: false,
                blogs: [],
                blog: action.payload,
                err: null
            })

            return {
                ...state,
                isLoading: false,
                blog: action.payload,
                err: null
            }
        case SINGLEBLOGREJ:
            setData('blogs', {
                ...state,
                blogs: [],
                isLoading: false,
                err: action.payload
            })

            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case EDITBLOGREQ:
            return {
                ...state,
                isLoading: true,
                err: null
            }
        case EDITBLOGREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        case DELETEBLOGREQ:
            return {
                ...state,
                isLoading: true,
                err: null
            }
        case DELETEBLOGREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }
        default:
            return state;
    }
}