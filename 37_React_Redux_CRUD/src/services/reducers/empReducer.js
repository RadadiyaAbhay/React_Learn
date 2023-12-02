import { CREATEEMP } from "../const"

const initialState = {
    employees: [],
    employee: null
}

export const empReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEEMP:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        default:
            return state;
    }
}