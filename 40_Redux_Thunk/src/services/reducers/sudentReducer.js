import { ADDREJ, ADDREQ, ADDSUC } from "../const";

const initialState = {
  employees: [],
  isLoading: false,
  err: null
};

export const studentReducer = (state = initialState , action) =>{
    switch (action.type) {
        case ADDREQ:
            return {
                ...state,
                isLoading: true,
                err: null
              }

        case ADDSUC:
            return {
                employees: action.payload,
                isLoading: false,
                err: null
              }

        case ADDREJ:
            return {
                ...state,
                isLoading: false,
                err: "Server Error"
              }

        default:
            return state;
    }
}